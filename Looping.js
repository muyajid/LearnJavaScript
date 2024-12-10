//For looping
for (let i = 0; i < 5; i++) {
    console.log("Looping = " +i)
}
//For in
const Apel = {nama: "Apel", warna: "Merah", rasa: "Manis"}
for (let row in Apel) {
    console.log(row + ":" + Apel[row])
}
//for of
const buah = ["Mangga", "Apel", "Jeruk", "Nanas"]
for (let item of buah) {
    console.log(item)
}
const makanan = ["Nasi Goreng", "Nasi Sasi", "Nasi Zaky"]
for (let item2 of makanan) {console.log(item2)}
//While looping 
let rowA = 0;
while (rowA < 5) {
    rowA++
    console.log("Ini while looping" +rowA)
}
//Do While Looping 
let a = 0;
do {
    console.log("do while = " +a)
    a++
} while (a < 2)
//Control Statment 
for (let b = 0; b < 5; b++) {
    if (b === 3) {
        break
    }
    console.log("breka : " +b)
}
//Control Continue 
for (let c = 0; c < 5; c++) {
    if (c === 3) {
        continue
    }
    console.log("Continue = " +c)
}