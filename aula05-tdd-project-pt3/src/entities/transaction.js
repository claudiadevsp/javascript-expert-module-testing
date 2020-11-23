class Transaction {
    constructor({ customer, car, dueDate, amount }) {
        this.customer = customer
        this.car = car
        this.amount = amount
        this.dueDate = dueDate
    }
}

module.exports = Transaction