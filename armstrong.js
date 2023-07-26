
const num = prompt("Enter a number:");
let sum = 0;
const length = num.length;
let a = num;
while (a != 0) {
    let rem = a % 10;
    sum = (sum*10)+rem;   //----palindrome for numbers & number in string
    // sum=sum+rem**length   //armstrong number
    a = parseInt(a / 10);
}
if (sum == num) {
    alert("It is a palindrome")
}
else {
    alert("It is not a palindrome") 
}


// method for both string and number reversing
let word=prompt("enter a word:")
let b=word.split('');
let c=b.reverse().join('');
console.log(c)
