// 1. Create a Payment class in JavaScript

class Payment {
    constructor (payerName, amount, method, date) {
        this.payerName = payerName
        this.amount = amount
        this.method = method
        this.date = date
    }

// 2. Add methods to the class
    getSummary () {
        return (`The payment information is as follows: ${this.payerName}, ${this.amount}, and ${this.method}`)
    }
    isLargePayment() {

    }
}