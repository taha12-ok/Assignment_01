let number = 42;
let string = 'Hello';
let booleanValue = true;
let array = [1, 2, 3];
let object = { key: 'value' };

console.log("Is number equal to 42? I predict True.");
console.log(number === 42);

console.log("Is string equal to 'Hello'? I predict True.");
console.log(string === 'Hello');

console.log("Is booleanValue equal to true? I predict True.");
console.log(booleanValue === true);

console.log("Is array length greater than 2? I predict True.");
console.log(array.length > 2);

console.log("Is 'key' property present in the object? I predict True.");
console.log('key' in object);

console.log("Is number less than 30? I predict False.");
console.log(number < 30);

console.log("Is string equal to 'World'? I predict False.");
console.log(string === 'World');

console.log("Is array length less than 5? I predict False.");
console.log(array.length < 5);

console.log("Is 'unknownKey' property present in the object? I predict False.");
console.log('unknownKey' in object);
