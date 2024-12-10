class SuperSmartphone {
    constructor(color, brand, type, model) {
        console.log("Warna = " +color)
        console.log("Brand = " +brand)
        console.log("Type = " +type)
        console.log("Model = " +model)
    }
    charging() {
        console.log("Charging Model = " +this.model)
    }
}
class IOS extends SuperSmartphone {}
class Andro extends SuperSmartphone {}

const Apple = new IOS("Black","Apple","A","12 Pro MAX")
const Samsung = new Andro("White","Samsung","B","Nasi Goreng")

class Linux extends SuperSmartphone {
    UseFor() {
        console.log("Nggak Tahu")
    }
} 
const LInuxPhone = new Linux("Black","Android","C","Kali Linux")