export default verifyValidation = () => {
  const MIN_LETTERS = 6;
  const { inputEmail, inputPassword } = this.state;
  return !(inputPassword.length >= MIN_LETTERS
    && inputEmail.includes('@')
    && inputEmail.includes('.com'));
}