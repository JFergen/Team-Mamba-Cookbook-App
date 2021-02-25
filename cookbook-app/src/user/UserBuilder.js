import { User } from './User'

class UserBuilder {

    constructor() {
       
    }

    setName(name) {
        this.name = name;
    }

    setEmail(email) {
        this.email = email;
    }

    build() {
        return new User(this.name, this.email)
    }

}