class Transaction {
    constructor({ custumer, car, dueDate, amount }) {
        this.custumer = custumer,
        this.car = car,
        this.amount = amount,
        this.dueDate = dueDate
    }
}

module.exports = Transaction