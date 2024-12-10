class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;

        console.log("Nama Ku = "+name)
        console.log("Umur Ku = "+age)
    }

    introdue() {
        console.log("Halo Perkenalkan Nama Saya " +this.name +" Umur Saya " +this.age);
    }
}
const person1 = new Person("Muhammad Yazid Arsy", 15);
console.log(person1)
person1.introdue();
console.log(typeof(Person))
class Human {
    constructor() {
        console.log("Nasi Goreng")
        console.log("Mie Goreng")
    }
}
const Yazid = new Human();
class Raden {
    nama(nama) {
        console.log("Nama Raden Ku " + nama)
    }
}
const newRaden = new Raden();
newRaden.nama("Yazid")

class vechile {
    constructor () {
        console.log("Ford Mustang")
        console.log("Nasi goreng")
    }
}
const newVechile = new vechile();