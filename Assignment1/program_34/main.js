var favoritePizzas = ['Cheeze', 'Pepperoni', 'Tikka'];
console.log("List of favorite pizzas:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
console.log("\nStatements about favorite pizzas:");
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("\nI really love pizza!");
