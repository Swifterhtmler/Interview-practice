

// function reverse(str) {
        
//         let reversed = ""

//         for (let i = 0; i < str.length; i++) {
//             reversed =  str[i] + reversed
//             }

//             return reversed

//             }

//             console.log(reverse("CodingMoney"))


// function reverse(str) {
    
//     let reversed = str.split('').reverse().join('')
    
//     return reversed
    
// }
    
//     console.log(reverse("CodingMoney"))

// function reverseInt(n) {
//     reversed =  n.toString().split('').reverse().join('')
    

//     return parseInt(reversed) * Math.sign(n)
// }

// console.log(reverseInt(-15))


function palindrome(str) {
  
    let reversed = str.split('') // .reverse().join('')

    console.log(reversed)

    for (let i = 0; i < reversed.length; i++) {
         if (reversed[i] === " ") {
            reversed.pop[" "]
         }
    }
    console.log(reversed)

//   if (reversed === str) {  
//      return true
//    } else {
//     return false
//    }

}

console.log(palindrome("race car"))