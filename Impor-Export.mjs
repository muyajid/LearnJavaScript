import {sayHello, sayGoobye, addition, kalikan} from "./Second-Impor.mjs";
sayHello();
sayGoobye();
console.log("Hasil = " +addition(5,5));
console.log("Hasil = " +kalikan(5,5))

import * as person from "./Second-Impor.mjs";
console.log(person.nama);
console.log(person.umur);
console.log(person.alamat);
import { sayHello as hallo } from "./Second-Impor.mjs";
hallo();

//Kombinasi default dan named export 
import Keiko, {Stranger as Beautiful} from "./Second-Impor.mjs";
Keiko() //Ini default
Beautiful() //Ini named
