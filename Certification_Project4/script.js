class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
        if (amount <= 0) {
            return "Deposit amount must be greater than zero.";
        }

        this.transactions.push({
            type: "deposit",
            amount: amount
        });

        this.balance += amount;

        return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }

    withdraw(amount) {
        if (amount <= 0 || amount > this.balance) {
            return "Insufficient balance or invalid amount.";
        }

        this.transactions.push({
            type: "withdraw",
            amount: amount
        });

        this.balance -= amount;

        return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }

    checkBalance() {
        return `Current balance: $${this.balance}`;
    }

    listAllDeposits() {
        const deposits = this.transactions
            .filter(transaction => transaction.type === "deposit")
            .map(transaction => transaction.amount);

        return `Deposits: ${deposits.join(",")}`;
    }

    listAllWithdrawals() {
        const withdrawals = this.transactions
            .filter(transaction => transaction.type === "withdraw")
            .map(transaction => transaction.amount);

        return `Withdrawals: ${withdrawals.join(",")}`;
    }
}

// Création du compte demandé
const myAccount = new BankAccount();

const amountInput = document.getElementById("amount");
const result = document.getElementById("result");

function deposit() {
    const amount = Number(amountInput.value);
    result.textContent = myAccount.deposit(amount);
    amountInput.value = "";
}

function withdraw() {
    const amount = Number(amountInput.value);
    result.textContent = myAccount.withdraw(amount);
    amountInput.value = "";
}

function balance() {
    result.textContent = myAccount.checkBalance();
}

function deposits() {
    result.textContent = myAccount.listAllDeposits();
}

function withdrawals() {
    result.textContent = myAccount.listAllWithdrawals();
}

// Au moins 5 transactions
myAccount.deposit(200);
myAccount.deposit(150);
myAccount.withdraw(50);
myAccount.deposit(100);
myAccount.withdraw(75);

// Solde final = 325 (> 100)

console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());