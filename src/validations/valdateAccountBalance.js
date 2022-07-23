const verifyAccountValue = (infoAccount, infoBuySell, user, isSell, totalValue) => {
    if (isSell) {
        return (Number(infoBuySell) <= 0
        || Number(infoAccount.qtdPurchased) < Number(infoBuySell));  
    }
    return (Number(infoBuySell) <= 0
    || user.accountBalance < totalValue.total); 
  }
  
  export default verifyAccountValue;