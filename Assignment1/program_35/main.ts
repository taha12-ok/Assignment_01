const favoriteanimals: string[] = ['Dog', 'Cat', 'Rabbit'];
console.log("List of favorite animals:");
for (let i = 0; i < favoriteanimals.length; i++) {
    console.log(favoriteanimals[i]);
}
console.log("\nStatements about favorite animals:");
for (let animal of favoriteanimals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log("\nAny of these animals would make a great pet!");
