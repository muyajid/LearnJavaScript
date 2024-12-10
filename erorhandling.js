const chekUmur = (umur) => {
    if (umur < 18) {
        throw "Kamu Belum Cukup Umur !!"
    }
    return "Kamu Sudah Dewasa"
}
try {
    console.log(chekUmur(10))
} catch (eror) {
    console.eror("Terjadi Eror : " +eror)
} finally {
    console.log("Coba Lagi Ya Kalau Udah Besar")
}