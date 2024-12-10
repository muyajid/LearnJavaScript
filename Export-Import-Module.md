#Export - Import - Module JS

Kita dapat menggunakan function dari module lainya dengan syarat function itu sudah di export dan sudah 
di import ke module yang sedang kita gunakan.

#Kata Kunci Untuk Melakukan Export Dan Import 

!Import Default
import namaFunction from './anotherfile.mjs'
!Export Default 
export default function namaFunction() {}

Apapun nama yang kita tulis di default import funtion yang kita export akan tetap dijalankan oleh nodeJS.

#Cara Impor beberapa function menggunakan named import 

named import harus menggunakan nama spesifik dari function yang ingin di import ke suatu modul, dan menuliskan nama function yang ingin di import di dalam kurung kurawal.

begitu juga dalam melakukan export nama function nya dituliskan di dalam export {} didalam kurung kurawal export.

#Cara Impor menggunakan Impor* 

kegunaan nya adalah saat dalam suatu modul itu ada sangat banyak function atau variabel dan kita ingin import ke dalam modul kita kita di usah susah import nama function atau variable nya satu satu tinggal kita buat import * as namaVariableKitaBuat from'./anotherfile.mjs' 

terus untuk manggil function atau varibale nya tinggal

/* namaVariableKitaBuat.namaFunction */

import * memungkinkan kita untuk import seluruh function yang di ekspor kita juga dapat mengubah nama di function ke tika diubah dengan as atau alias 

{ namFunction as ubahNama }

#Export

di JS untuk melakukan export ada dua cara named export dan default export

named export digunakan untuk meng export banyak function dan variabel di named export juga terbagi menjadi dua cara menuliskan expord sebelum deklarasi dan setelah deklarasi 

|Named Export |

#Sebelum deklarasi 
export let namaVariable = nilai;

#Setelah deklarasi 
let namaVar = nilai;
let namaVar = nilai;

export {}

Default export digunakan untuk meng export function tunggal atau variabel tunggal dalam suatu module jadi misal kita menggunakan as import sebanyak dua tetap fungsion atau variabel default itu yang terpanggil 

|Default Export|

default export let namaVariable = nilai;

Cara import default export dan named export 

|Kombinasi|

import nameDefault, {namedExport} from './anotherfile.mjs'

import * as membuat kode lebih clean 