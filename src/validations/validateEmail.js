const verifyValidation = (info) => {
  const MIN_LETTERS = 6;
  const { inputEmail, inputPassword } = info;
  return (inputPassword.length >= MIN_LETTERS
    && inputEmail.includes('@')
    && inputEmail.includes('.com'));
}

export default verifyValidation;