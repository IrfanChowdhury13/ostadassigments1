
class BankAccount {
    static nextAccountNumber = 1001;
    
    constructor(ownerName) {
        this.accountNumber = BankAccount.nextAccountNumber++;
        this.ownerName = ownerName;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
        return (`Deposited $${amount}. Current Balance: $${this.balance}`);
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            return ("Insufficient funds");
        } else {
            this.balance -= amount;
             return (`Withdrawn $${amount}. Current Balance: $${this.balance}`);
        }
    }
    
    getBalance() {
        return this.balance;
    }
    
    displayAccountInfo() {
        return (`
        Account Number: ${this.accountNumber}
        Owner Name: ${this.ownerName}
        Balance: $${this.balance}
        `);
    }
}


// Create two instances of the BankAccount class
const account1 = new BankAccount("John Doe");
const account2 = new BankAccount("Jane Smith");



// Demonstrate functionality of methods
// Account 1 Console Checks
console.log(account1.deposit(5600));
console.log(account1.withdraw(2400));
console.log(account1.withdraw(3250)); // Insufficient funds
console.log(account1.displayAccountInfo());

// Account 2 Console Checks
console.log(account2.deposit(1000));
console.log(account2.withdraw(760));
console.log(account2.withdraw(250));  // Insufficient funds
console.log(account2.displayAccountInfo());




