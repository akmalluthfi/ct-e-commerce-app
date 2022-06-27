export default function ValidatePassword(password) {
  if (password.length === 0)
    return { isInvalid: true, msg: 'provide an password' };
  if (password.length < 8)
    return {
      isInvalid: true,
      msg: 'Password is too short, it must be 8 or more characters long',
    };

  return { isInvalid: false, msg: 'password valid' };
}
