export default function validateEmail(email) {
  // cek apakah email tidak kosong
  if (email.length === 0) return { isInvalid: true, msg: 'provide an email' };
  // cek apakah email valid
  if (!isEmailValidate(email))
    return { isInvalid: true, msg: 'enter a valid email address' };

  return { isInvalid: false, msg: 'valid email address' };
}

export function isEmailValidate(email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}
