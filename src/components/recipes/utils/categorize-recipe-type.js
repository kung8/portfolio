export const categorizeRecipeType = (type) => {
    switch (type) {
        case 'Breakfast':
            return 'Breakfast';
        case 'Lunch':
            return 'Lunch';
        case 'Snack':
            return 'Snack';
        case 'Dessert':
            return 'Dessert';
        case 'Appetizer':
        case 'Side Dish':
        case 'Drink':
        case 'Sauce':
        case 'Topping':
        case 'Dinner':
        default:
            return 'Dinner';
    }
}