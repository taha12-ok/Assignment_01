function order_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some ingredients for your sandwich.");
    } else {
        console.log("Ingredients: " + items.join(', '));
    }
    console.log("--------------------");
}
order_sandwich('Beef', 'Cheese', 'Chicken');
order_sandwich('Potato', 'Tomato');
order_sandwich();
