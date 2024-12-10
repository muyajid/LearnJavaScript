let sayHello = () => { console.log("Hello World"); }
let sayGoobye = () => { console.log("Good Bye") }

let addition = (numbA, numbB) => { return numbA + numbB };
let kalikan = (numbA, numbB) => { return numbA * numbB };

let nama = "Yazid Arsy";
let umur = 15;
let alamat = "JL Jenderal ahmad tani no 165 karangkates sumberpucung"
export {sayHello, sayGoobye , addition, kalikan, nama, umur, alamat};

export default function Keiko () {
    console.log("Hai Kei");
};
function Stranger () {
    console.log("Beautiful Stranger");
};
export {Stranger};