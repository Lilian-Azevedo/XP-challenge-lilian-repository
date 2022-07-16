const verifyValidation = (nfo) => {
  const MIN_LETTERS = 6;
  const { inputEmail, inputPassword } = nfo;
  return !(inputPassword.length >= MIN_LETTERS
    && inputEmail.includes('@')
    && inputEmail.includes('.com'));
}

export default verifyValidation;