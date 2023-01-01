//1:- using any in build function
function reverse(str) {
  return str.split('').reverse().join('');
}

let original = 'Hello, world!';
let reversed = reverse(original);
console.log(reversed); // Output: "!dlrow ,olleH"


function reverseStr(str){
    let result = '';
    let len = str.length;
    for(let i=0;i<len;i++){
         result +=str[len-1-i]
    }
   return result;
}

let final = reverseStr("hello")
console.log(final)


//second example without using any inbuild function
function reverse(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

let original = 'Hello, world!';
let reversed = reverse(original);
console.log(reversed); // Output: "!dlrow ,olleH"
