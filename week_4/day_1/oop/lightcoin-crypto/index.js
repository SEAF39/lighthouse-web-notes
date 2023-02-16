/*
class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let transaction of this.transactions) {
      balance += transaction.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (!this.isAllowed()) {
      return false;
    }
    this.time = new Date();
    this.account.addTransaction(this);
    return true;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }

  isAllowed() {
    return this.account.balance - this.amount >= 0;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}

// Example usage:
const myAccount = new Account('SEAF-ROSHI');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(100.00, myAccount);
t1.commit();
console.log('Deposit 1:', t1);
console.log('Ending Balance:', myAccount.balance);

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();
console.log('Withdrawal 1:', t2);
console.log('Ending Balance:', myAccount.balance);

const t3 = new Withdrawal(150.00, myAccount);
t3.commit();
console.log('Withdrawal 2:', t3);
console.log('Ending Balance:', myAccount.balance);

const t4 = new Deposit(200.00, myAccount);
t4.commit();
console.log('Deposit 2:', t4);
console.log('Ending Balance:', myAccount.balance);

console.log('Transaction History:', myAccount.transactions);
*/


// With declration & test new cases :)

// Define a class called Account
class Account {
  // The constructor takes a `username` parameter and initializes an empty array `transactions`.
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  // Define a getter called `balance` that calculates and returns the balance of the account.
  get balance() {
    let balance = 0;
    for (let transaction of this.transactions) {
      balance += transaction.value;
    }
    return balance;
  }

  // Define a method called `addTransaction` that pushes a new `transaction` object onto the `transactions` array.
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

// Define a class called Transaction.
class Transaction {
  // The constructor takes an `amount` and an `account` object.
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  // Define a method called `commit` that adds the current transaction to the `transactions` array of the account object.
  commit() {
    // Check if the transaction is allowed before adding it to the array.
    if (!this.isAllowed()) {
      return false;
    }
    // If the transaction is allowed, set the time and add the transaction to the array.
    this.time = new Date();
    this.account.addTransaction(this);
    return true;
  }
}

// Define a class called Withdrawal that extends Transaction.
class Withdrawal extends Transaction {
  // Define a getter called `value` that returns the negative amount.
  get value() {
    return -this.amount;
  }

  // Define a method called `isAllowed` that checks if the account has sufficient funds for the withdrawal.
  isAllowed() {
    return this.account.balance - this.amount >= 0;
  }
}

// Define a class called Deposit that extends Transaction.
class Deposit extends Transaction {
  // Define a getter called `value` that returns the positive amount.
  get value() {
    return this.amount;
  }

  // Define a method called `isAllowed` that always returns `true` for deposits.
  isAllowed() {
    return true;
  }
}

// Example usage:
// Create a new account object with a username.
const myAccount = new Account('SEAF-ROSHI');

// Display the starting balance.
console.log('Starting Balance:', myAccount.balance);

// Create a new deposit object and commit it to the account.
const t1 = new Deposit(100.00, myAccount);
t1.commit();
// Display the deposit object and the ending balance.
console.log('Deposit 1:', t1);
console.log('Ending Balance:', myAccount.balance);

// Create a new withdrawal object and commit it to the account.
const t2 = new Withdrawal(50.00, myAccount);
t2.commit();
// Display the withdrawal object and the ending balance.
console.log('Withdrawal 1:', t2);
console.log('Ending Balance:', myAccount.balance);

// Create another withdrawal object with an amount that exceeds the account balance and try to commit it.
const t3 = new Withdrawal(150.00, myAccount);
t3.commit();
// Display the withdrawal object and the ending balance (which should be the same as before).
console.log('Withdrawal 2:', t3);
console.log('Ending Balance:', myAccount.balance);

// Create another deposit object and commit it to the account.
const t4 = new Deposit(200.00, myAccount);
t4.commit();
// Display the deposit object and the ending balance.
console.log('Deposit 2:', t4);
console.log('Ending Balance:', myAccount.balance);

