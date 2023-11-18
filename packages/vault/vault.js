const NodeVault = require('node-vault');
const dotenv = require('dotenv');

// .env 파일에서 환경 변수 로드
dotenv.config();

// Vault 클라이언트 구성
const vault = NodeVault({
  apiVersion: 'v1',
  endpoint: process.env.VAULT_ADDR, // Vault 서버 주소
  token: process.env.VAULT_TOKEN // Vault 토큰
});

let cachedSecrets = {}; // 캐시된 시크릿을 저장할 변수

async function loadSecrets() {
  try {
    // Vault에서 시크릿 로드 시도
    const data = await vault.read(process.env.VAULT_SECRET_URL);
    cachedSecrets = data.data.data; // Vault에서 받은 시크릿 데이터를 캐시에 저장
    console.log('Secrets loaded from Vault');
  } catch (error) {
    // Vault 접근 실패 시, 필요한 환경 변수만 .env 파일에서 로드
    console.log('Vault access failed, loading from .env:', error.message);
    for (const key in process.env) {
      if (key !== 'VAULT_ADDR' && key !== 'VAULT_TOKEN' && key !== 'VAULT_SECRET_URL') {
        cachedSecrets[key] = process.env[key]; // 중요하지 않은 환경 변수만 복사
      }
    }
    // console.log(cachedSecrets);
  }
}

function getSecret(key) {
  // 캐시된 데이터에서 키에 해당하는 값을 반환
  return cachedSecrets[key];
}

async function bootstrap() {
  await loadSecrets(); // 애플리케이션 시작 시 시크릿 로드
}

bootstrap();

module.exports = {
  getSecret, loadSecrets
}