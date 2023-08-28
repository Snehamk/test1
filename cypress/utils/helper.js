const getTotalDelay = function(accountNumber) {
  let agreementDelay = accountNumber.slice(0, 2);
  agreementDelay = parseInt(agreementDelay);
  let paymentDelay = accountNumber.slice(2, 4);
  paymentDelay = parseInt(paymentDelay);
  const totalDelay = agreementDelay + paymentDelay;
  return totalDelay;
}

module.exports = { getTotalDelay };