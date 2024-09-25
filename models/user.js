class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hola mi nombre es ${this.name}.`);
    }
}
module.exports = User;