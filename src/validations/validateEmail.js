const verifyValidation = (info) => {
  const MIN_LETTERS = 6;
  const { inputEmail, inputPassword } = info;
  const rgx = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  
  if (info.inputName) {
    return (inputPassword.length >= MIN_LETTERS
      && info.inputName.length >= MIN_LETTERS
      && rgx.test(inputEmail));
  }
  return (inputPassword.length >= MIN_LETTERS
    && rgx.test(inputEmail));
}

export default verifyValidation;

// "eslintConfig": {
  //   "extends": "react-app"
  // },