let creditLimit = 5000;

const loanOut = function(amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit - amount >= 0) {
      creditLimit -= amount;
      resolve(amount);
    } else {
      reject("Sorry, your credit limit is not enough.");
    }
  });
};

const askForLoan = function(amount) {
  console.log(`Asking for $${amount}, which should be okay ...`);
  loanOut(amount)
    .then((loan) => {
      console.log(`  -> I got $${loan} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
    })
    .catch((error) => {
      console.log(`  -> ${error}`);
    });
};

askForLoan(150);
