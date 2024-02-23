var Fruit = /** @class */ (function () {
    function Fruit(name, color, taste) {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }
    return Fruit;
}());
var apple = new Fruit('Apple', 'Red', 'Sweet');
var banana = new Fruit('Banana', 'Yellow', 'Sweet');
var orange = new Fruit('Orange', 'Orange', 'Citrus');
console.log('Apple:', apple);
console.log('Banana:', banana);
console.log('Orange:', orange);
