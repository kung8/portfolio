const CATEGORIES = {
    BREAKFAST: 'Breakfast',
    LUNCH: 'Lunch',
    DINNER: 'Dinner',
    APPETIZER: 'Appetizer',
    SIDE_DISH: 'Side Dish',
    SNACK: 'Snack',
    DESSERT: 'Dessert',
    DRINK: 'Drink',
    SAUCE: 'Sauce',
    TOPPING: 'Topping',
    DRESSING: 'Dressing',
    DIP: 'Dip',
};

const DIET = {
    VEGETARIAN: 'Vegetarian',
    VEGAN: 'Vegan',
    GLUTEN_FREE: 'Gluten-Free',
    DAIRY_FREE: 'Dairy-Free',
    NUT_FREE: 'Nut-Free',
    SOY_FREE: 'Soy-Free',
    EGG_FREE: 'Egg-Free',
    SUGAR_FREE: 'Sugar-Free',
    LOW_CARB: 'Low-Carb',
    LOW_FAT: 'Low-Fat',
    LOW_SODIUM: 'Low-Sodium',
    LOW_SUGAR: 'Low-Sugar',
    HIGH_PROTEIN: 'High-Protein',
    HIGH_FIBER: 'High-Fiber',
    KETO: 'Keto',
    PALEO: 'Paleo',
    WHOLE_30: 'Whole30',
}

// whenever adding a new item within the category, make sure to add it to the featuredRecipes.js file
const GENRES = {
    AFRICAN: 'African',
    AMERICAN: 'American',
    ASIAN: 'Asian',
    AUSTRIAN: 'Austrian',
    BBQ: 'BBQ',
    BRAZILIAN: 'Brazilian',
    BRITISH: 'British',
    CAJUN: 'Cajun',
    CAMBODIAN: 'Cambodian',
    CHINESE: 'Chinese',
    CREOLE: 'Creole',
    CZECH: 'Czech',
    EGYPTIAN: 'Egyptian',
    EUROPEAN: 'European',
    FILIPINO: 'Filipino',
    FRENCH: 'French',
    GERMAN: 'German',
    GREEK: 'Greek',
    HAWAIIAN: 'Hawaiian',
    INDIAN: 'Indian',
    INDONESIAN: 'Indonesian',
    IRISH: 'Irish',
    ITALIAN: 'Italian',
    JAPANESE: 'Japanese',
    KOREAN: 'Korean',
    LATIN: 'Latin',
    LEBANESE: 'Lebanese',
    MALAYSIAN: 'Malaysian',
    MEDITERRANEAN: 'Mediterranean',
    MEXICAN: 'Mexican',
    MIDDLE_EASTERN: 'Middle Eastern',
    MONGOLIAN: 'Mongolian',
    MOROCCAN: 'Moroccan',
    PERUVIAN: 'Peruvian',
    POLYNESIAN: 'Polynesian',
    PORTUGUESE: 'Portuguese',
    RUSSIAN: 'Russian',
    SINGAPOREAN: 'Singaporean',
    SOUTHERN: 'Southern',
    SPANISH: 'Spanish',
    SWEDISH: 'Swedish',
    TAIWANESE: 'Taiwanese',
    THAI: 'Thai',
    TURKISH: 'Turkish',
    VIETNAMESE: 'Vietnamese',
    WESTERN: 'Western',
};

const INGREDIENT_UNITS = {
    TEASPOON: { s: 'tsp', p: 'tsp' },
    TABLESPOON: { s: 'Tbsp', p: 'Tbsp' },
    OUNCE: { s: 'oz', p: 'oz' },
    POUND: { s: 'lb', p: 'lb' },
    GRAM: { s: 'g', p: 'g' },
    KILOGRAM: { s: 'kg', p: 'kg' },
    CUP: { s: 'cup', p: 'cups' },
    PINT: { s: 'pt', p: 'pt' },
    QUART: { s: 'qt', p: 'qt' },
    GALLON: { s: 'gal', p: 'gal' },
    MILLILITER: { s: 'ml', p: 'ml' },
    LITER: { s: 'l', p: 'l' },
    FLUID_OUNCE: { s: 'fl. oz', p: 'fl. oz' },
    SLICE: { s: 'slice', p: 'slices' },
    PIECE: { s: 'piece', p: 'pieces' },
    WHOLE: { s: 'whole', p: 'whole' },
    BUNCH: { s: 'bunch', p: 'bunches' },
    STALK: { s: 'stalk', p: 'stalks' },
    HEAD: { s: 'head', p: 'heads' },
    CLOVE: { s: 'clove', p: 'cloves' },
    INCH: { s: 'inch', p: 'inches' },
    LEAF: { s: 'leaf', p: 'leaves' },
    SPRIG: { s: 'sprig', p: 'sprigs' },
    BULB: { s: 'bulb', p: 'bulbs' },
    CAN: { s: 'can', p: 'cans' },
    BOTTLE: { s: 'bottle', p: 'bottles' },
    BOX: { s: 'box', p: 'boxes' },
    BAG: { s: 'bag', p: 'bags' },
    PACKAGE: { s: 'package', p: 'packages' },
    PACKET: { s: 'packet', p: 'packets' },
    JAR: { s: 'jar', p: 'jars' },
    HANDFUL: { s: 'handful', p: 'handfuls' },
    PINCH: { s: 'pinch', p: 'pinches' },
    DASH: { s: 'dash', p: 'dashes' },
    STICK: { s: 'stick', p: 'sticks' },
    SPRINKLE: { s: 'sprinkle', p: 'sprinkles' },
    DRIZZLE: { s: 'drizzle', p: 'drizzles' },
    SPLASH: { s: 'splash', p: 'splashes' },
    SMALL: { s: 'small', p: 'small' },
    MEDIUM: { s: 'medium', p: 'medium' },
    LARGE: { s: 'large', p: 'large' },
    NOODLE: { s: 'noodle', p: 'noodles' },
    RIB: { s: 'rib', p: 'ribs' },
    DROP: { s: 'drop', p: 'drops' },
    EACH: { s: 'each', p: 'each' },
    EAR: { s: 'ear', p: 'ears' },
    SHEET: { s: 'sheet', p: 'sheets' },
};

const METHODS = {
    AIR_FRY: 'Air Fry',
    BAKE: 'Bake',
    BOIL: 'Boil',
    BLANCH: 'Blanch',
    BLEND: 'Blend',
    CHILLED: 'Chilled',
    DEEP_FRY: 'Deep Fry',
    GRILL: 'Grill',
    KNEAD: 'Knead',
    MARINADE: 'Marinade',
    MASH: 'Mash',
    MELT: 'Melt',
    MICROWAVE: 'Microwave',
    MIX: 'Mix',
    PAN_FRY: 'Pan Fry',
    RAW: 'Raw',
    POACHED: 'Poached',
    ROAST: 'Roast',
    SAUTE: 'Saute',
    SIMMER: 'Simmer',
    SLOW_COOK: 'Slow Cook',
    STEAM: 'Steam',
    STIR_FRY: 'Stir-Fry',
    WRAP: 'Wrap',
    FREEZE: 'Freeze',
    PRESSURE_COOK: 'Pressure Cook',
}

const PROTEIN = {
    ALTERNATIVE: 'Alternative',
    BEAN: 'Bean',
    BEEF: 'Beef',
    CHICKEN: 'Chicken',
    CHOCOLATE: 'Chocolate',
    EDAMAME: 'Edamame',
    EGG: 'Egg',
    FISH: 'Fish',
    LAMB: 'Lamb',
    LENTILS: 'Lentils',
    PEANUT: 'Peanut',
    PORK: 'Pork',
    SEAFOOD: 'Seafood',
    TOFU: 'Tofu',
    TURKEY: 'Turkey',
    PINE_NUT: 'Pine Nut',
    SHRIMP: 'Shrimp',
}

const SECTIONS = {
    ASSEMBLE: 'Assemble',
    MAIN: 'Main',
    MARINADE: 'Marinade',
    SAUCE: 'Sauce',
    BROTH: 'Broth',
    TOPPINGS: 'Toppings',
    RICE: 'Rice',
    NOODLES: 'Noodles',
    CHICKEN: 'Chicken',
    PORK: 'Pork',
    FILLING: 'Filling',
    DOUGH: 'Dough',
    CRUST: 'Crust',
    BREAD: 'Bread',
    DRESSING: 'Dressing',
    DRY_RUB: 'Dry Rub',
    WET_RUB: 'Wet Rub',
    SERVE: 'Serve',
    SOUP: 'Soup',
    MEAT: 'Meat',
    EGGS: 'Eggs',
    BAKE: 'Bake',
    STORE: 'Store',
    FROSTING: 'Frosting',
    ICING: 'Icing',
    DECORATING: 'Decorating',
    BEEF: 'Beef',
    CHILL: 'Chill',
    REHEAT: 'Reheat',
};

const TIME_UNITS = {
    SECOND: { s: 's', p: 's' },
    MINUTE: { s: 'm', p: 'm' },
    HOUR: { s: 'h', p: 'h' },
}

const TYPES = {
    NOODLE: 'Noodle',
    RICE: 'Rice',
    SANDWICH: 'Sandwich',
    SOUP: 'Soup',
    SALAD: 'Salad',
    CURRY: 'Curry',
    BREAD: 'Bread',
    WRAP: 'Wrap',
    CASSEROLE: 'Casserole',
    VEGETABLE: 'Vegetable',
    FRUIT: 'Fruit',
    PROTEIN: 'Protein',
    MAIN_COURSE: 'Main Course',
    SIDE_DISH: 'Side Dish',
    FINGER_FOOD: 'Finger Food',
    DESSERT: 'Dessert',
    SAUCE: 'Sauce',
    STIR_FRY: 'Stir Fry',
    PIE: 'Pie',
    PASTA: 'Pasta',
    PIZZA: 'Pizza',
    TACO: 'Taco',
    BURGER: 'Burger',
    CAKE: 'Cake',
    COOKIE: 'Cookie',
    BAR: 'Bar',
    DRINK: 'Drink',
    SMOOTHIE: 'Smoothie',
    ICE_CREAM: 'Ice Cream',
    SORBET: 'Sorbet',
    SHERBET: 'Sherbet',
    CANDY: 'Candy',
    CHOCOLATE: 'Chocolate',
    TRUFFLE: 'Truffle',
    FUDGE: 'Fudge',
    BROWNIE: 'Brownie',
    CUPCAKE: 'Cupcake',
    MUFFIN: 'Muffin',
    BISCUIT: 'Biscuit',
    SCONES: 'Scones',
    PASTRY: 'Pastry',
    DIP: 'Dip',
    TART: 'Tart',
    SPICE: 'Spice',
    BURRITO: 'Burrito',
}

const YIELD_UNITS = {
    SERVING: { s: 'serving', p: 'servings' },
    LOAF: { s: 'loaf', p: 'loaves' },
    BAR: { s: 'bar', p: 'bars' },
    SLICE: { s: 'slice', p: 'slices' },
    DOZEN: { s: 'dozen', p: 'dozens' },
    ROLL: { s: 'roll', p: 'rolls' },
    CUP: { s: 'cup', p: 'cups' },
    PINT: { s: 'pint', p: 'pints' },
    QUART: { s: 'quart', p: 'quarts' },
}

module.exports = {
    CATEGORIES,
    DIET,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    PROTEIN,
    SECTIONS,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS,
}