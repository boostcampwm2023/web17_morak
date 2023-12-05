FROM node:20.9.0-alpine AS base
 
FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN npm install --global turbo
COPY . .
RUN turbo prune --scope=backend --docker
 
# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
 
# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm ci
 
# Build the project
COPY --from=builder /app/out/full/ .

# Generate Prisma Client Code
WORKDIR /app/app/backend
RUN npx prisma generate

WORKDIR /app
RUN npx turbo run build --filter=backend...
 
FROM base AS runner
WORKDIR /app

# 빌더 스테이지에서 필요한 파일만 복사
COPY --from=installer /app/app/backend/dist /app/dist
COPY --from=installer /app/app/backend/prisma /app/prisma
COPY --from=installer /app/node_modules /app/node_modules
COPY --from=installer /app/packages /app/packages
COPY app/backend/.env /app/app/backend/.env

# 필요한 경우, 런타임에 필요한 추가 파일 복사
# 예: 환경변수 파일, 정적 파일 등

# 애플리케이션 실행
COPY app/backend/wait-for-it.sh /wait-for-it.sh
COPY app/backend/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /wait-for-it.sh
RUN chmod +x /docker-entrypoint.sh

# 윈도우 개행문자 회피
RUN sed -i 's/\r//' /wait-for-it.sh
RUN sed -i 's/\r//' /docker-entrypoint.sh

CMD ["/wait-for-it.sh", "db:3306", "--", "/docker-entrypoint.sh"]