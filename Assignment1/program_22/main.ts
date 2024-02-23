class Fruit {
    constructor(public name, public color, public taste) {}
  }
  const fruits: Fruit[] = [
    new Fruit('Apple', 'Red', 'Sweet'),
    new Fruit('Banana', 'Yellow', 'Sweet'),
    new Fruit('Orange', 'Orange', 'Citrus')
  ];
  
  // Intentional error: Accessing an index that is out of bounds
  // Trying to access the fourth element in the array (index 3)
  const errorFruit = fruits[3];
  
  // Correcting the error: Accessing a valid index
  // Accessing the third element in the array (index 2)
  const correctFruit = fruits[2];
  
  // Display information about the fruits
  console.log('Intentional Error:', errorFruit); // This line will produce an error
  console.log('Corrected Access:', correctFruit); // This line is correct
  