let string1 = 'apple';
let string2 = 'orange';
console.log("If string1 and string2 is equal than False.");
console.log(string1 === string2);
console.log("If string1 and string2 is not equal than True.");
console.log(string1 !== string2);

let upperCaseString = 'HELLO';
console.log("If upperCaseString in lowercase is equal to 'hello' than True.");
console.log(upperCaseString.toLowerCase() === 'hello');
let num1 = 10;
let num2 = 5;
console.log("If num1 is greater than num2 than True.");
console.log(num1 > num2);
console.log("If num1 is less than or equal to num2 than False.");
console.log(num1 <= num2);

let condition1 = true;
let condition2 = false;
console.log("If condition1 is true and condition2 is false than False.");
console.log(condition1 && condition2);
console.log("If condition1 is true or condition2 is false than True.");
console.log(condition1 || condition2);

let fruitsArray = ['apple', 'banana', 'orange'];
console.log("If 'banana' is in fruitsArray than True.");
console.log(fruitsArray.includes('banana'));
console.log("If 'grape' not is in fruitsArray than True.");
console.log(!fruitsArray.includes('grape'));
