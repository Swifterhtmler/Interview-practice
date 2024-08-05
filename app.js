

// function reverse(str) {
        
//         let reversed = ""

//         for (let i = 0; i < str.length; i++) {
//             reversed =  str[i] + reversed
//             }

//             return reversed

//             }

//             console.log(reverse("CodingMoney"))


function reverse(str) {
    
    let reversed = str.split('').reverse().join('')
    
    return reversed
    
}
    
    console.log(reverse("Hello"));


const expect = function(val) {
    return {
        toBe: function(sval) {
            if (val === sval) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(tval) {
            if (val !== tval) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

console.log(expect(5).toBe(5))
