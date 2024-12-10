//Fungsi convert suhu
function ConvertSuhu(Suhu) {
    const temp = 9 / 5 * Suhu + 32;
    console.log("Suhu = " +temp);
}
function Kegiatan() {
    
}


//Fungsi penjumlahan
function Jumlahkan(numbJum1, numbJum2) {
    const plus =  numbJum1 + numbJum2;
    console.log("Hasil = " +plus)
}
//Fungsi pengurangan 
function Kurangkan(numbKur1, numbKur2) {
    const min = numbKur1 - numbKur2;
    console.log("Hasil = " +min);
}
//Fungsi perkalian
function Kalikan(numbKal1, numbKal2) {
    const multiply = numbKal1 * numbKal2;
    console.log("Hasil = " +multiply);
}
//Fungsi bagi
function Bagikan(numbBag1, numbBag2) {
    const divide = numbBag1 / numbBag2;
    console.log("Hasil = " +divide);
}
Jumlahkan(10,20);
Kurangkan(40,20);
Kalikan(5,2);
Bagikan(10,2);

//Pemanggil sebuah function

//Hanya menampilkan nilai funciton
console.log(ConvertSuhu);
//Menjalankan isi function 
ConvertSuhu(90);

//Function dengan beberapa parameter
function Halo(nama, umur) {
    console.log("Halo nama ku " +nama +" Umur Ku  " +umur);
}
Halo("Yazid",15);
//Function dengan devault argumen 
function Kali5(angka = 5) {
    const multiply = angka * 5;
    console.log("Default Argumen : " +multiply);
}
//Tanpa argumen
Kali5();
//Dengan  argumen
Kali5(10);