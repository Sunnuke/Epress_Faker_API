import Express from "express";
import Faker from "faker";

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