var favoriteanimals = ['Dog', 'Cat', 'Rabbit'];
console.log("List of favorite animals:");
for (var i = 0; i < favoriteanimals.length; i++) {
    console.log(favoriteanimals[i]);
}
console.log("\nStatements about favorite animals:");
for (var _i = 0, favoriteanimals_1 = favoriteanimals; _i < favoriteanimals_1.length; _i++) {
    var animal = favoriteanimals_1[_i];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log("\nAny of these animals would make a great pet!");
