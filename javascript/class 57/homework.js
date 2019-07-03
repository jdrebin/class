(function () {
    'use strict';
    const account = function () {
        return {
            balance: 0
        };
    };

    const account1 = account();
    const account2 = account();

    const transaction = {
        deposit: function (amount) {
            this.balance += amount;
            console.log('your balance is', this.balance);
        },
        withdraw: function (amount) {
            this.balance -= amount;
            console.log('your balance is', this.balance);
        }
    };

    transaction.deposit.call(account1, 50);
    transaction.deposit.call(account2, 40);

    const deposit1 = transaction.deposit.bind(account1);
    const deposit2 = transaction.deposit.bind(account2);

    deposit1(20);
    deposit2(20);
}());