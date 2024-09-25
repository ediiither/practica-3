class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    getDetails() {
        console.log(`marca: ${this.brand}, modelo: ${this.model}`);
    }
}
module.exports = Vehicle;