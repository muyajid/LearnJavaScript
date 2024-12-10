//Struktur data object
const Orang = {
    nama: "Yazid",
    umur: 15,
    kelamin: "Laki-Laki",
    alamat: "Malang, Jawa Timur",
    sekolah: "SMK RADEN UMAR SAID KUDUS",
    jurusan: "PPLG",
    absen: 24
}
//Mengakses property
console.log(Orang.nama)
//Mengganti value dari salah satu key dalam object
Orang.nama = "Sasi"
console.log(Orang.nama)
//Menghapus salah satu property dalam object
delete Orang.kelamin
console.log(Orang)

//Mengakses salah satu property menggunakan [ ]
console.log(Orang["sekolah"])

//Mengakses dengan object destructuring
const User = {
    id: 24,
    email: "kamuyazidkan@gmail.com",
    name: "yazid",
    username: "kei",
    password: 1232
}
const {id, username} = User
console.log(id, username)
const {username: asma, name: niki} = User
console.log(asma, niki)