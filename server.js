const express = require("express");
const app = express();

class User {
    constructor() {
        this._id = Faker.random.number();
        this.firstName = Faker.name.firstName();
        this.lastName = Faker.name.lastName();
        this.phoneNumber = Faker.phone.phoneNumber();
        this.email = Faker.internet.email();
        this.password = Faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = Faker.random.number();
        this.name = Faker.company.companyName();
        this.address = {
            street: Faker.address.streetName(),
            city: Faker.address.city(),
            state: Faker.address.state(),
            zipCode: Faker.address.zipCodeByState(),
            country: Faker.address.country()
        }
    }
}


app.get("/api/users/new", () => {
    return console.log(new User());
});

app.get("/api/companies/new", () => {
    return console.log(new Company());
});

app.get("/api/user/company", () => {
    return console.log(new User(), new Company());
});

app.listen( 8000, () => console.log(`Listening on port: ${8000}`) );