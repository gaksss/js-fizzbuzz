let num = 30;

// if (num % 3 === 0 && num % 5 != 0){
//     console.log("fizz")
// }

// if (num % 5 === 0 && num % 3 != 0){
//     console.log("buzz")
// }

// if (num % 5 === 0 && num % 3 === 0){
//     console.log("fizzbuzz")
// }

// if (num % 5 !== 0 && num % 3 != 0){
//     console.log(num)
// }

// if (num % 3 === 0 && num % 5 != 0){
//     console.log("fizz")
// }
// else  if(num % 5 === 0 && num % 3 != 0){
//     console.log("buzz")
// }

// else if (num % 5 === 0 && num % 3 === 0){
//      console.log("fizzbuzz")
//     }
//     else {
//         console.log(num)
//     }

// let resultat = "le resultat est ";

// if (num % 3 === 0){
//     resultat = resultat + "fizz";
// }

// if (num % 5 === 0){
//     resultat = resultat + "buzz";
// }

// if (num % 5 != 0 && num % 3 != 0){
//     resultat = resultat + num
// }

// console.log(resultat)

let resultat = "";

if (num % 3 === 0) {
  resultat = resultat + "fizz";
}

if (num % 5 === 0) {
  resultat = resultat + "buzz";
}

console.log(resultat || num);
