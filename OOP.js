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
        return
    }
}

// 3. Create Payment Objects

let payment1 = new Payment ("Alice", "5.00", "Credit Card", "January 2nd")
let payment2 = new Payment ("John", "65.00", "Paypal", "February 14th")
let payment3 = new Payment ("Sarah", "120.00", "Cash", "April 10th")

console.log (payment1)
console.log (payment2)
console.log (payment3)

console.log (payment1.getSummary)