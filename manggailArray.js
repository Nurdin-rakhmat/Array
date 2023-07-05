// Buatlah sebuah fungsi dengan nama balikString.
// Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
//input "hello world!"
//output
// "!dlrow olleh"

// function balikString(){
//     var data=""

// }

// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen.
// Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
// Contoh input dapat dilihat dibawah:
//contoh input
// var input = [
//                 ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//                 ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//                 ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//                 ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//             ]

// Tugas kamu adalah mengimplementasikan fungsi dataHandling 
// agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun

// function dataHandling(arr){
//     for (let i  = 0; i   < arr.length; i++) {
//         // console.log("Nomor ID "+ arr[i][0])
//         // console.log("Nama Lengkap "+ arr[i][1])
//         // console.log("TTL "+ arr[i][2])
//         // console.log("Hobi "+ arr[i][3])
        
//     }
// }
// dataHandling(input)

// function dataSiswa(arr){
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
        
//         for (let i = 0; i < element.length; i++) {
//             if(i==2){
//                 const alamat = element[i];
//                 // console.log(alamat)
//                 if(alamat=="Medan"){
//                     console.log(element[1])
//                 }
//             }
//         }
//     }
// }
// dataSiswa(input)


//contoh output
// ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

// Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

// Gunakan fungsi splice untuk memodifikasi variabel tersebut
// agar menjadi seperti array dibawah. Lalu console.log array
// yang baru seperti di bawah.

// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
input.splice(1,1, "Roman Alamsyah Elsharawy");
// console.log(input)
// input.splice(2,1, "Provinsi Bandar Lampung");
// console.log(input)
input.splice(4,1, "Pria");
// console.log(input)
input.push("SMA Internasional Metro");
// console.log(input)
// console.log(input[3].split("/"))
const tanggal=input[3].split("/")
// console.log(tanggal)
if(tanggal[1]=="05"){
    // console.log("Mei")
}
function compareNumbers(a, b) {
    return b - a;
  }
  const tanggalbaru=tanggal.join("-")
//   console.log(tanggalbaru)
const sortingTanggal=tanggal.sort(compareNumbers)
// console.log(sortingTanggal)
const nama=input[1]
// console.log(nama)
const bar=nama.split(" ")
// console.log(bar)
bar.splice(2,1)
// console.log(bar);
bar.join()
console.log(bar.join(" "));







// dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy",
 * "Provinsi Bandar Lampung", "21/05/1989", "Pria",
 * "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */



















// const newArray=[1,2,3,4]
// // console.log(newArray[3])
// // const newArr1=[1,[2,3], newArray]
// // console.log(newArr1[1])
// // console.log(newArr1[1][1])
// // console.log(newArr1[2][3])
// const Arr2=[
//     [2,4],
//     [1,7,3],
//     [2,2,5,3]
// ]
// const Arr3=[
//     [2,4,7,8],
//     [1,7,3,8,9],
//     [2,2,5,3],
//     [9]
// ]
// function seleksi(arr){
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         for (let i = 0; i < element.length; i++) {
//             const isi = element[i];
//             if (isi>4) {
//                 console.log(isi)
//             }
//         }
//     }
// }
// seleksi(Arr2)