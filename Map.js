//Membuat Map dengan array dimensional
const Kota = new Map([
    ["Jawa Timur", "Malang"], 
    ["Jawa Tengah", "Kudus"],
])

console.log(Kota.get("Jawa Timur")) 

//Membuat Map dengan cara biasa
const Kecamatan = new Map()

//Menginisialisasi Map 
Kecamatan.set("Malang", "Sumberpucung")
Kecamatan.set("Kudus", "Gebog")
Kecamatan.set(1, "Kepanjen")
console.log(Kecamatan)

//Menampilan nilai map
console.log(Kecamatan.get("Malang"))

//Menghapus Map Kecamatan 
Kecamatan.delete("Kudus")
console.log(Kecamatan)