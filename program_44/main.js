function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some ingredients for your sandwich.");
    }
    else {
        console.log("Ingredients: " + items.join(', '));
    }
    console.log("--------------------");
}
order_sandwich('Beef', 'Cheese', 'Chicken');
order_sandwich('Potato', 'Tomato');
order_sandwich();
