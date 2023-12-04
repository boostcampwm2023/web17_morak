# Node.js 기본 이미지
FROM node:20.9.0-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 루트의 package.json 파일 복사
COPY package*.json ./

# packages 폴더의 내용 복사
# packages 폴더가 여러 개 있을 경우, 필요에 따라 추가 복사
COPY packages ./packages

# # app/frontend 폴더의 내용 복사
COPY app/frontend ./app/frontend

# 의존성 설치
RUN npm ci

# app/frontend 폴더로 이동
WORKDIR /app/app/frontend

RUN npm run build

# 애플리케이션 빌드
CMD ["npm", "run", "preview"]
