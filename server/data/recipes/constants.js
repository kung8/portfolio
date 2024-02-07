const GENRE = {
    AMERICAN: 'American',
    ASIAN: 'Asian',
    EUROPEAN: 'European',
    AFRICAN: 'African',
    MIDDLE_EASTERN: 'Middle Eastern',
    LATIN: 'Latin',
    INDIAN: 'Indian',
    MEXICAN: 'Mexican',
    ITALIAN: 'Italian',
    CHINESE: 'Chinese',
    JAPANESE: 'Japanese',
    KOREAN: 'Korean',
    VIETNAMESE: 'Vietnamese',
    THAI: 'Thai',
    FRENCH: 'French',
    GERMAN: 'German',
    GREEK: 'Greek',
    MONGOLIAN: 'Mongolian',
    FILIPINO: 'Filipino',
    INDONESIAN: 'Indonesian',
    MALAYSIAN: 'Malaysian',
    SINGAPOREAN: 'Singaporean',
};

const SECTIONS = {
    MAIN: 'Main',
    MARINADE: 'Marinade',
    SAUCE: 'Sauce',
    TOPPINGS: 'Toppings',
    PORK_LOAF: 'Pork Loaf', // Vietnamese Banh Mi Sandwich
    RICE: 'Rice',
    FILLING: 'Filling',
    PICKLED_VEGETABLES: 'Pickled Vegetables',
};

const CATEGORY = {
    BREAKFAST: 'Breakfast',
    LUNCH: 'Lunch',
    DINNER: 'Dinner',
    APPETIZER: 'Appetizer',
    SIDE_DISH: 'Side Dish',
    SNACK: 'Snack',
    DESSERT: 'Dessert',
    DRINK: 'Drink',
    SAUCE: 'Sauce',
};

module.exports = {
    ...GENRE,
    ...SECTIONS,
    ...CATEGORY,
}