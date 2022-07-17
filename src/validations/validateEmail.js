const verifyValidation = (info) => {
  const MIN_LETTERS = 6;
  const { inputEmail, inputPassword } = info;
  const rgx = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  return (inputPassword.length >= MIN_LETTERS
    && rgx.test(inputEmail));
}

export default verifyValidation;