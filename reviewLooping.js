//Belajar Looping
//1. Function
//2. Looping
// 3. Data [], 

// Diberikan sebuah function pasanganTerbesar(angka) yang 
// menerima 1 parameter berupa angka. Functiona akan 
// menentukan pasangan dua digit angka mana yang paling besar 
// dan me-return angka tersebut. Contoh, jika angka 
// adalah 183928, maka function akan me-return 92, 
// pasangan dua digit angka yang paling besar diantara yang 
// lainnya.

function pasanganTerbesar(num) {
    // you can only write your code here!
    let panjangAngka=num.toString().length;
    let tampung=[]
    console.log(panjangAngka,"==")
    for (let i = 0; i < panjangAngka; i++) {
        const element = num.charAt(i);
        console.log(element,"++")
        
    }
    return(tampung)

  }
  
//   // TEST CASES
//   console.log(pasanganTerbesar(641573)); // 73
//   console.log(pasanganTerbesar(12783456)); // 83
//   console.log(pasanganTerbesar(910233)); // 91
//   console.log(pasanganTerbesar(71856421)); // 85
//   console.log(pasanganTerbesar(79918293)); // 99


   
// Cara 1
// ======================
//   function pasanganTerbesar(num) {
//     let angkaTerbesar=0
//     let num1 = num.toString();
//     let digit2=[]
//     for (let i = 0; i < num1.length; i++) {
//         const digit1 = num1[i];
//         let digit=num1[i]+num1[i+1]
        
//         digit2.push(Number(digit))
//     }
//     for (let j = 0; j <digit2.length; j++) {
//         const element = digit2[j];
//         if(element>angkaTerbesar){
//             angkaTerbesar=element
//         }
//     }
//     console.log(angkaTerbesar)

//   }

//   cara 2

function pasanganTerbesar(num) {
    let angkaTerbesar=0
    let num1 = num.toString();
    let digit2=[]
    for (let i = 0; i < num1.length; i++) {
        const digit1 = num1[i];
        let digit=num1[i]+num1[i+1]
        
        if(Number(digit)>angkaTerbesar){
            angkaTerbesar=Number(digit)
        }
        // digit2.push(Number(digit))
    }
    // for (let j = 0; j <digit2.length; j++) {
    //     const element = digit2[j];
    // }
    return(angkaTerbesar)

  }

   // TEST CASES
   console.log(pasanganTerbesar(641573)); // 73
   console.log(pasanganTerbesar(12783456)); // 83
   console.log(pasanganTerbesar(910233)); // 91
   console.log(pasanganTerbesar(71856421)); // 85
   console.log(pasanganTerbesar(79918293)); // 99
 
