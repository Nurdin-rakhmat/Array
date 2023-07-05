// Diberikan sebuah function palindrome(kata) yang menerima
// satu parameter. Function tersebut akan mengembalikan 
// nilai true jika kata merupakan palindrome, dan false 
// jika bukan. Kata palindrome adalah sebuah kata yang jika 
// dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 
// 'katak'.

// function palindrome(kata) {
//     // you can only write your code here!
//     let balikKata=""
//     for (let i = kata.length-1; i > 0-1; i--) {
//         const element = kata[i];
//         balikKata=balikKata + element
//     }
//     console.log(balikKata)
//     if(balikKata==kata){
//         return(true)
//     } else {return (false)}
//   }
  
//   // TEST CASES
//   console.log(palindrome('katak')); // true
//   console.log(palindrome('blanket')); // false
//   console.log(palindrome('civic')); // true
//   console.log(palindrome('kasur rusak')); // true
//   console.log(palindrome('mister')); // false


function palindrome(kata) {
    // you can only write your code here!
    let balikKata=""
    for (let i = 0; i < kata.length; i++) {
        const element = kata[kata.length-1-i];
        balikKata=balikKata + element
    }
    console.log(balikKata)
    if(balikKata==kata){
        return(true)
    } else {return (false)}
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

