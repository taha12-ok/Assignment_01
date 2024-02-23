var Fruit = /** @class */ (function () {
    function Fruit(name, color, taste) {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }
    return Fruit;
}());
var fruits = [
    new Fruit('Apple', 'Red', 'Sweet'),
    new Fruit('Banana', 'Yellow', 'Sweet'),
    new Fruit('Orange', 'Orange', 'Citrus')
];
// Intentional error: Accessing an index that is out of bounds
// Trying to access the fourth element in the array (index 3)
var errorFruit = fruits[3];
// Correcting the error: Accessing a valid index
// Accessing the third element in the array (index 2)
var correctFruit = fruits[2];
// Display information about the fruits
console.log('Intentional Error:', errorFruit); // This line will produce an error
console.log('Corrected Access:', correctFruit); // This line is correct
