 //Membuat array dengan cara constructor 
 const sayuran = new Array(5)

 //Menginisialisasi array constructor 
 sayuran[0] = "Kangkung"
 sayuran[1] = "Sawi"
 sayuran[2] = "Bayam"

 //Menampilkan data array 
 console.log(sayuran[0])

 //Membuat array dengan cara literals
 const buahbuahan = ["Mangga", "Apel", "Jeruk", "Nanas"]

 //Mengakses array literals
 console.log(buahbuahan[2])

 //Memanipulasi data array buahbuahan 
 buahbuahan[2] = "Nasi goreng"

 //Mengganti nilai di dalam array
 console.log(buahbuahan[2])
 //Menambahkan nilai ke dalam array 
 buahbuahan.push("Mie Goreng")
 console.log(buahbuahan)
 //Menghapus nilai di dalam array 
 delete buahbuahan[1]
 console.log(buahbuahan)
 //Menghapus nilai di dalam array beserta elemen nya 
console.log(buahbuahan.length)
buahbuahan.splice(2,1)
console.log(buahbuahan)

//Menghapus elemen dan nilai pertama dalam array 
const friend = ["ell", "zaky","raden","keiko"]
friend.shift()
console.log(friend)

//Menghapus elemen terakhir
friend.pop()
console.log(friend)

//Destructuring array
const Laptop = ["Laptop HP", "Laptop MSI", "Laptop Lenovo"]
const [Raden, Sasi, Keiko] = Laptop

console.log(Raden)