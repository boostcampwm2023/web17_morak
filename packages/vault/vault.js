const NodeVault = require('node-vault');
const dotenv = require('dotenv');

dotenv.config();

let cachedSecrets = {}; // 231119 ccxz84 | vault 캐시된 시크릿을 저장할 변수

for (const key in process.env) {
  if (key !== 'VAULT_ADDR' && key !== 'VAULT_TOKEN' && key !== 'VAULT_SECRET_URL') { // 231119 ccxz84 | vault vault 주소와 같은 환경변수 제외
    cachedSecrets[key] = process.env[key];
  }
}

const vault = NodeVault({
  apiVersion: 'v1',
  endpoint: process.env.VAULT_ADDR,
   token: process.env.VAULT_TOKEN
});

async function loadSecrets() {
  try {
    const data = await vault.read(process.env.VAULT_SECRET_URL);
    cachedSecrets = {...cachedSecrets, ...data.data.data};
    console.log('Secrets loaded from Vault');
  } catch (error) {
    console.log('Vault access failed, loading from .env:', error.message);
  }
}

function getSecret(key) {
  return cachedSecrets[key];
}

module.exports = {
  getSecret, loadSecrets
}