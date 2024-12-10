const nilai = 80;

if (nilai >= 80) {
    console.log("Kamu Lulus Ujian")
} else {
    console.log("Kamu Tidak Lulus Ujian")
}

const fruit = "Apel"

switch (fruit) {
    case "Nanas":
        console.log("Buah Nanas")
        break
    case "Mangga":
        console.log("Buah Mangga")
        break
    case "Apel":
        console.log("Buah Apel")
        break
    case "Alpukat":
        console.log("Buah Alpukat")
        break
}
const PendaftarSim = 15
let cheksim = PendaftarSim < 17 ? "Kahjmu Bisa Membuat Sim" : "Kamu Tidak Bisa Membuat Sim"
console.log(cheksim)

const angka1 = 10
const operator = '+'
const angka2 = 10

if(operator === '+') {
    console.log("Hasil = " +(angka1 + angka2))
} else if (operator === '-') {
    console.log("Hasil = " +(angka1 - angka2))
}