import jwt_decode from 'jwt-decode';

const TK_KEY = 'accTk';

function isStorangeExists() {
  return typeof Storage !== 'undefined';
}

export function setAccTk(sJwt) {
  if (!isStorangeExists()) return false;
  const accTk = localStorage.getItem(TK_KEY);
  if (accTk !== null) return false;
  localStorage.setItem(TK_KEY, sJwt);
  return true;
}

export function getAccTk() {
  if (!isStorangeExists()) return false;
  const accTk = localStorage.getItem(TK_KEY);
  if (accTk === null) return false;
  return accTk;
}

export function removeAccTk() {
  const accTk = getAccTk();
  if (!accTk) return false;
  localStorage.removeItem(TK_KEY);
  return true;
}

export function getDecodedAccTk() {
  const accTk = getAccTk();
  if (!accTk) return false;
  return jwt_decode(accTk);
}

export function getApiKey() {
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJjdCJ9.kwlZao8nDQ3By0BdR5ayhgxg8CPxnxvrCoNO8XIgPao';
}

export function getBaseUrl() {
  return 'http://localhost:8080/MagangCrosstechno/e-commerce/api';
}
