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
