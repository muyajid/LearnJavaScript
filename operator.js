//Asigment operator =
let location = "Jakarta";
let country = "Indonesia";

console.log(location + " " + country);

//Mengubah nilai var location 
location = "Kudus";
country = "Malaysia";

console.log("Kota : " +location +"\n" +"Negara : " +country);

//Aritmatika operator + - *  /
let jumlahkan = 5 + 5;
console.log("Hasil = " + jumlahkan) 
let kurangkan = 10 - 5
console.log("Hasil = " + kurangkan)
let kalikan = 5 * 2;
console.log("Hasil = " +kalikan)
let bagikan = 20 / 2
console.log("Hasil = " +bagikan)
let pangkat = 2 ** 3;
console.log("Hasil Pangkat = " +pangkat);

//Increment dan dicrement 
let inNumb = 9;
let decNumb = 2;
console.log("Hasil : "+(++inNumb));
console.log("Hasil : "+(--decNumb))

//Comparison operator 
const a = 10;
const b = 20;
const c = 10;

//lebih besar dari 
console.log("Output > : "+(a > b));
//Lebih kecil dari
console.log("Output < : "+(c < b));
//Sama 
console.log("Output == : "+(a == c));
//Tidak Sama 
console.log("Output != : "+(c != a));

const namaSatu = "Yazid";
const namaDua = "Yazid";
//Identik 
console.log("Output === : " +(namaSatu === namaDua));

//Logical Operator
const logA = 10;
const logB = 5;
const logC = 20;
/*
Logical Operator and&& dua perbandingan true maka true jika ada yang false maka false
 */
console.log("Logical and : " +(logA > logB && logB < logA));
/*
Logical Operator or|| salah satu dari dua perbandingan true maka true outputnya 
 */
console.log("Logical or : " +(logA == logC || logB < logA));
/*
Logical not membalik output nya bila true maka false bila false maka true
 */
console.log("Logical not : " +(!(logB < logA)));
console.log("Tanpa Not : " +(logB < logA));