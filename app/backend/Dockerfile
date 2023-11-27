# Node.js 기본 이미지
FROM node:20.9.0-alpine as builder

# 작업 디렉토리 설정
WORKDIR /app

# 루트의 package.json 파일 복사
COPY package*.json ./

# packages 폴더의 내용 복사
# packages 폴더가 여러 개 있을 경우, 필요에 따라 추가 복사
COPY packages ./packages

# # app/backend 폴더의 내용 복사
COPY app/backend ./app/backend

# 의존성 설치
RUN npm ci

# app/backend 폴더로 이동
WORKDIR /app/app/backend

# 애플리케이션 빌드
RUN npx prisma generate
RUN npm run build

# .env 파일이 있으면 복사, 없으면 빈 파일 생성
RUN if [ ! -f ./.env ]; then \
        touch ./.env; \
    fi

# 실행을 위한 최종 스테이지
FROM node:20.9.0-alpine as runner

# 필요한 도구 설치
RUN apk add --no-cache netcat-openbsd

WORKDIR /app

# 빌더 스테이지에서 필요한 파일만 복사
COPY --from=builder /app/app/backend/dist /app/dist
COPY --from=builder /app/app/backend/prisma /app/prisma
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/packages /app/packages
COPY --from=builder /app/app/backend/.env /app/app/backend/.env

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
