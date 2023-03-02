let creditLimit = 0;

const loanOut = function(amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit <= 0) {
      reject("Insufficient Funds!");
    } else { 
      creditLimit -= amount;
      resolve(amount);
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
