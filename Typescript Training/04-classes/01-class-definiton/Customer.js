var Customer = /** @class */ (function () {
    //create a constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//creating an instance
var myCustomer = new Customer("Ethan", "Hunt");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
