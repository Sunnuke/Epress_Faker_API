const express = require("express");
const { company } = require("faker");
const faker = require('faker');
const app = express();

class User {
    constructor() {
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    }
}


app.get("/api/users/new", (req, res) => {
    res.send(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.send(new Company());
});

app.get("/api/user/company", (req, res) => {
    const test1 = new User();
    const test2 = new Company();
    const test3 = {
        user: test1,
        company: test2
    }
    res.send(test3);
});

app.listen( 8000, () => console.log(`Listening on port: ${8000}`) );