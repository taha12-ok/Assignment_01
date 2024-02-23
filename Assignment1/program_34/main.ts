const favoritePizzas: string[] = ['Cheeze', 'Pepperoni', 'Tikka'];
console.log("List of favorite pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
console.log("\nStatements about favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("\nI really love pizza!");
