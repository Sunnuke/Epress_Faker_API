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

