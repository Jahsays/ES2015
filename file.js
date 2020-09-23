// Convert the following es5 code blocks into es2015 code:
// 1. var person = {
//     fullName: "Harry Potter",
//     sayHi: function(){
//         setTimeout(function(){
//             console.log("Your name is " + this.fullName)
//         }.bind(this),1000)
//     }
// }

var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(() => {
            console.log(`Your name is ${this.fullName}`)
        },1000)
    }
}

// 2. var name = "Josie"
// console.log("When " + name + " comes home, so good")

let name = "Josie"
console.log(`When ${name} comes home, so good`)


// 3. var DO_NOT_CHANGE = 42;
//    DO_NOT_CHANGE = 50; // stop me from doing this!

const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50;

// 4. var arr = [1,2]
//    var temp = arr[0]
//    arr[0] = arr[1]
//    arr[1] = temp

    

// 5.  function double(arr){
//       return arr.map(function(val){
//         return val*2
//       });
//      }

// 6. var obj = {
//      numbers: {
//         a: 1,
//         b: 2
//     } 
//   }

// var a = obj.numbers.a;
// var b = obj.numbers.b;

// 7. function add(a,b){
//     if(a === 0) a = 0
//     else {
//         a = a || 10    
//     }
//     if(b === 0) b = 0
//     else {
//         b = b || 10    
//     }
//     return a+b
//   }

function add (a=10, b=10){
    return a+b;
}

// Research the following functions - what do they do?
// Array.from
// Object.assign
// Array.includes
// String.startsWith

