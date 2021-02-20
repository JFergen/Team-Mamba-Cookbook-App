class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    setName(name) {
        this.name = name;
    }

    setEmail(email) {
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    jsonify() {
        return {
            'name': this.name,
            'email': this.email,
        }
    }
}

export default User;