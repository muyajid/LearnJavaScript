//Mebuat Struktur Data Set 
const mySet = new Set()

//Menginisialisasi Struktur Data Set 
mySet.add("Nasi Goreng")
mySet.add("Nasi Mawut")
mySet.add("Nasi Pecel")
mySet.add("Nasi rawon")

//Menampilkan data set dengan looping 
for (let row of mySet) {
    console.log(row)
}

//Memeriksa apakah data ada di dalam set 
console.log(mySet.has("Nasi Goreng"))
console.log(mySet.has("Nasi Pindang"))

//Menghapus data di dalam set 
mySet.delete("Nasi Mawut")
console.log(mySet)
for (let secRow of mySet) {
    console.log(secRow)
}