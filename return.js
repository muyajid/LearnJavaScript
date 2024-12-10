function sumNumber(numb1, numb2) {
    return  numb1 + numb2;
}
console.log(sumNumber(10,10));

//Expresion Fungsion

//Fungsion di simpan dalam sebuah variable
const convertSuhu = function (numb) {
    return (9/5) * numb + 32;
}
console.log(convertSuhu(10));
//Fungsion jadi argumen fungsion lain nya 
function multiply(a,b) {
    return a * b;
}
function addition(c,d) {
    return c + d
}
function calculate(operator, numb1, numb2) {
    return operator(numb1, numb2)
}
console.log("Hasil = " +(calculate(multiply,10,10)))

//Arrow fungsion 
let sum = (ops, numbA, numbB) => {
    return ops(numbA, numbB)
}
console.log("Hasil = " +sum(addition,5,5))
//Lebih simple
let kali = (Opr, A, B) => Opr(A, B)

