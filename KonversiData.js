//Number and Boolean to String
const number = 123;
const boolean = true;

const strNumb = String(number);
const strBool = String(boolean);

console.log("Konversi Numb Ke String : " + strNumb);
console.log("Konversi Numb Ke String : " + strBool);

//Konversi dengan method

const secNumb = 123;
const secBool = true;

const mstrNumb = secNumb.toString();
const mstrBool = secBool.toString();

console.log("Konversi Numb Ke String : " +mstrNumb);
console.log("Konversi Numb Ke String : " +mstrBool);

//String to number 
const txtNumb = "123";
const txtFloat = "3.14";

const toNumb = txtNumb;
const toFloat = txtFloat;

console.log("Konversi String to Numb : " +toNumb.parseInt);
console.log("Konversi String to Numb : " +toFloat);

//Parse int (Tipe Data Ke int) Parse float (Tipe Data Ke Float)

const cm = "20cm";
const px = "25.5px";

const cmToint = parseInt(cm);
const pxToint = parseFloat(px);

console.log("String to Int with parse : " +cmToint);
console.log("String to Int with parse : " +pxToint);

//Konversi Implisit 

const strNumber = 123;
const result = "Hasil = " + (strNumber * 2);
console.log(result);