(function () {
    'use strict';

    class Item {
        constructor(name, quantity, totalCost) {
            this.name = name;
            this.quantity = quantity;
            this.price = totalCost / quantity;
        }
    }

    class Order {
        constructor(name, address, items) {
            this.name = name;
            this.address = address;
            this.items = items;
        }

        get total() {
            let sum = 0;
            this.items.forEach(item => {
                sum += item.price * item.quantity;
            });
            return sum;
        }
    }

    function processOrders(url) {

        const retval = [];

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then(orders => {
                orders.forEach(ord => {
                    const items = [];
                    ord.items.forEach(it => {
                        const orderItem = new Item(it.item, it.quantity, it.total);
                        items.push(orderItem);
                    });
                    retval.push(new Order(ord.customer, ord.address, items));
                });
            })
            .catch(err => console.error('Failure', err));

        return retval;
    }

    const myOrder = processOrders('quiz.json');
    console.log(myOrder);
}());