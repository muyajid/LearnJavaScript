//Spread Operator menggabungkan dua array
const makanan = ["Nasi Goreng", "Mie Goreng", "Nasi Pecel"]
const minuman = ["Es Teh", "Es Kopi", "Es Milo"]
const interArray = [...makanan, ...minuman]
console.log(interArray)

//Spread Operator menyalin array 
const duplMakanan = [...makanan]
//chek panjang array 
console.log(duplMakanan.length)
//coba cetak dulicat array 
console.log(duplMakanan[0])

//Spread Operator menambahkan data ke dalam array
const triMakanan = [...makanan, "Nasi Mawut", "Nasi Padang"]
//chek panjang array apakah bertambah
console.log(triMakanan.length)
//coba cetak nilai terbaru 
console.log(triMakanan[4])

//Rest Operator implementation 
const myName = (...name) => {
    console.log(name.length)
    return "Nama Ku " + name
}
console.log(myName("Yazid", "Sasi", "Firdaus", "Sasi"))
