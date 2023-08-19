class Customer {
    firstName: string;
    lastName: string;

    //create a constructor
    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

//creating an instance

let myCustomer = new Customer("Ethan", "Hunt");


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);