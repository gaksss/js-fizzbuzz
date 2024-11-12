let num = 45;

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

if (num % 3 === 0 && num % 5 != 0){
    console.log("fizz")
}
else  if(num % 5 === 0 && num % 3 != 0){
    console.log("buzz")
}

else if (num % 5 === 0 && num % 3 === 0){
     console.log("fizzbuzz")
    }
    else {
        console.log(num)
    }