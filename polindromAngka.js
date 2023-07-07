// Diberikan sebuah function angkaPalindrome(angka) yang 
// menerima satu parameter angka. Function akan me-return 
// angka selanjutnya yang mengandung nilai angka palindrome. 
// Contoh, jika angka adalah 27, maka function akan me-return 
// nilai 33 karena angka 33 adalah angka palindrom. Jika angka 
// dari awal sudah merupakan palindrome, maka function harus 
// mencari angka selanjutnya yang palindrome. Contoh, jika 
// angka adalah 8, walaupun dia sudah palindrome, harus 
// mencari angka selanjutnya yang palindrome, yaitu 9.
function palindrome(kata) {
    // you can only write your code here!
    let balikKata=""
    for (let i = 0; i < kata.length; i++) {
        const element = kata[kata.length-1-i];
        balikKata=balikKata + element
    }
    // console.log(balikKata)
    if(balikKata==kata){
        return(true)
    } else {return (false)}
  }
function angkaPalindrome(num) {
    // you can only write your code here!
    if(num<10){
        return(num+1)
    }else{
        let condisi=true
        while (condisi) {
            // console.log(num)
            let cekPolindrom=palindrome((num+1).toString()) //true false
            if(cekPolindrom){
                condisi=false
                return(num+1)
            }else{
                num=num+1
            }
        }
    }
    }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001