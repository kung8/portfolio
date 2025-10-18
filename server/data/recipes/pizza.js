const pizza1 = '../assets/Products/pizza-1.jpeg';
const pizza2 = '../assets/Products/pizza-2.jpeg';
const pizza3 = '../assets/Products/pizza-3.jpeg';
const pizza4 = '../assets/Products/pizza-4.jpeg';
const pizza5 = '../assets/Products/pizza-5.jpeg';
const pizza6 = '../assets/Products/pizza-6.jpeg';
const pizza7 = '../assets/Products/pizza-7.jpeg';
const pizza8 = '../assets/Products/pizza-8.MOV';
const pizza9 = '../assets/Products/pizza-9.jpeg';
const pizza10 = '../assets/Products/pizza-10.jpeg';
const pizza11 = '../assets/Products/pizza-11.jpeg';
const pizza12 = '../assets/Products/pizza-12.jpeg';
const pizza13 = '../assets/Products/pizza-13.jpeg';
const pizza14 = '../assets/Products/pizza-14.jpeg';
const pizza15 = '../assets/Products/pizza-15.jpeg';
const pizza16 = '../assets/Products/pizza-16.jpeg';
const pizza17 = '../assets/Products/pizza-17.jpeg';
const pizza18 = '../assets/Products/pizza-18.jpeg';
const pizza19 = '../assets/Products/pizza-19.jpeg';
const pizza20 = '../assets/Products/pizza-20.jpeg';
const pizza21 = '../assets/Products/pizza-21.jpeg';
const pizza22 = '../assets/Products/pizza-22.jpeg';
const pizza23 = '../assets/Products/pizza-23.jpeg';
const pizza24 = '../assets/Products/pizza-24.jpeg';
const pizza25 = '../assets/Products/pizza-25.jpeg';
const pizza26 = '../assets/Products/pizza-26.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    ALL_PURPOSE_FLOUR,
    BACON,
    BAKING_SHEET,
    BASIL_LEAF,
    BBQ_SAUCE,
    BLACK_PEPPER,
    BREAD_FLOUR,
    BUFFALO_SAUCE,
    CHICKEN_BREAST,
    COOKED_HAM,
    FLANK_STEAK,
    GARLIC,
    HONEY,
    LARGE_BOWL,
    MILK,
    MOZZARELLA_CHEESE,
    MUSHROOM,
    NUTMEG,
    OLIVES,
    OLIVE_OIL,
    OVEN,
    PARMESAN_CHEESE,
    PEPPERONI,
    PINEAPPLE,
    PIZZA_SAUCE,
    PLASTIC_WRAP,
    PROVOLONE_CHEESE,
    RANCH_DRESSING,
    RED_BELL_PEPPER,
    RED_ONION,
    RED_PEPPER_FLAKES,
    ROLLING_PIN,
    SALT,
    SAUSAGE,
    UNSALTED_BUTTER,
    WATER,
    YEAST,
    YELLOW_ONION,
} = require('./ingredients');

const BBQ_CHICKEN_PIZZA = 'BBQ Chicken Pizza';
const BOBO_BRAZIL_PIZZA = 'Bobo Brazil Pizza';
const BOBO_BRAZIL_SAUCE = 'Bobo Brazil Sauce';
const BUFFALO_CHICKEN_PIZZA = 'Buffalo Chicken Pizza';
const BUFFALO_CHICKEN_SAUCE = 'Buffalo Chicken Sauce';
const HAWAIIAN_PIZZA = 'Hawaiian Pizza';
const MARGHERITA_PIZZA = 'Margherita Pizza';
const PEPPERONI_PIZZA = 'Pepperoni Pizza';
const PHILLY_CHEESESTEAK_PIZZA = 'Philly Cheesesteak Pizza';
const PHILLY_CHEESESTEAK_SAUCE = 'Philly Cheesesteak Sauce';
const RANCH_CHICKEN_PIZZA = 'Ranch Chicken Pizza';
const SUPREME_PIZZA = 'Supreme Pizza';

module.exports = {
    cardName: 'Homemade Pizza',
    name: 'Homemade Pizza',
    img: pizza26,
    recipeAuthors: ['Marzia'],
    recipeFinder: 'Justin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    type: [TYPES.PIZZA],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 72.5, unit: TIME_UNITS.HOUR },
    separated: true,
    websites: [
        { label: 'Philly Cheese Steak Pizza', link: 'https://littlespicejar.com/philly-cheese-steak-pizza/' }
    ],
    ingredients: [
        { ...BREAD_FLOUR, amount: 9 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...YEAST, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'room-temperature', section: SECTIONS.DOUGH },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },

        // BBQ CHICKEN
        { ...BBQ_SAUCE, amount: '', unit: '', additionalDetails: '', section: BBQ_CHICKEN_PIZZA },
        { ...MOZZARELLA_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: BBQ_CHICKEN_PIZZA },
        { ...CHICKEN_BREAST, amount: '', unit: '', additionalDetails: '', section: BBQ_CHICKEN_PIZZA },
        { ...RED_ONION, amount: '', unit: '', additionalDetails: 'sliced or diced', section: BBQ_CHICKEN_PIZZA },
        { ...RED_BELL_PEPPER, amount: '', unit: '', additionalDetails: 'sliced or diced', section: BBQ_CHICKEN_PIZZA },

        // BOBO BRAZIL- TOPPINGS
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BOBO_BRAZIL_PIZZA },
        { ...MOZZARELLA_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: BOBO_BRAZIL_PIZZA },
        { ...SAUSAGE, amount: '', unit: '', additionalDetails: '', section: BOBO_BRAZIL_PIZZA },
        { ...RED_ONION, amount: '', unit: '', additionalDetails: 'sliced or diced', section: BOBO_BRAZIL_PIZZA },
        // BOBO BRAZIL- SAUCE
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BOBO_BRAZIL_SAUCE },
        { ...HONEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BOBO_BRAZIL_SAUCE },
        { ...RED_PEPPER_FLAKES, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BOBO_BRAZIL_SAUCE },

        // BUFFALO CHICKEN - SAUCE
        { ...PIZZA_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BUFFALO_CHICKEN_SAUCE },
        { ...BUFFALO_SAUCE, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BUFFALO_CHICKEN_SAUCE },
        { ...RANCH_DRESSING, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BUFFALO_CHICKEN_SAUCE },
        // BUFFALO CHICKEN - TOPPINGS
        { ...MOZZARELLA_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: BUFFALO_CHICKEN_PIZZA },
        { ...CHICKEN_BREAST, amount: '', unit: '', additionalDetails: '', section: BUFFALO_CHICKEN_PIZZA },
        { ...RED_ONION, amount: '', unit: '', additionalDetails: 'sliced or diced', section: BUFFALO_CHICKEN_PIZZA },

        // HAWAIIAN
        { ...PIZZA_SAUCE, amount: '', unit: '', additionalDetails: '', section: HAWAIIAN_PIZZA },
        { ...MOZZARELLA_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: HAWAIIAN_PIZZA },
        { ...COOKED_HAM, amount: '', unit: '', additionalDetails: '', section: HAWAIIAN_PIZZA },
        { ...PINEAPPLE, amount: '', unit: '', additionalDetails: '', section: HAWAIIAN_PIZZA },

        // MARGHERITA
        { ...PIZZA_SAUCE, amount: '', unit: '', additionalDetails: '', section: MARGHERITA_PIZZA },
        { ...MOZZARELLA_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: MARGHERITA_PIZZA },
        { ...BASIL_LEAF, amount: '', unit: '', additionalDetails: 'sliced (or sub wth baby spinach)', section: MARGHERITA_PIZZA },

        // PEPPERONI
        { ...PIZZA_SAUCE, amount: '', unit: '', additionalDetails: '', section: PEPPERONI_PIZZA },
        { ...MOZZARELLA_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: PEPPERONI_PIZZA },
        { ...PEPPERONI, amount: '', unit: '', additionalDetails: '', section: PEPPERONI_PIZZA },

        // PHILLY CHEESESTEAK - SAUCE
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...SALT, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...NUTMEG, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        // PHILLY CHEESESTEAK - TOPPINGS
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PHILLY_CHEESESTEAK_PIZZA },
        { ...FLANK_STEAK, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'thinly sliced', section: PHILLY_CHEESESTEAK_PIZZA },
        { ...RED_BELL_PEPPER, amount: 1 / 2, unit: '', additionalDetails: 'sliced', section: PHILLY_CHEESESTEAK_PIZZA },
        { ...MUSHROOM, amount: 5, unit: '', additionalDetails: 'sliced', section: PHILLY_CHEESESTEAK_PIZZA },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'sliced', section: PHILLY_CHEESESTEAK_PIZZA },
        { ...PROVOLONE_CHEESE, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: PHILLY_CHEESESTEAK_PIZZA },

        // RANCH CHICKEN
        { ...RANCH_DRESSING, amount: '', unit: '', additionalDetails: '', section: RANCH_CHICKEN_PIZZA },
        { ...MOZZARELLA_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: RANCH_CHICKEN_PIZZA },
        { ...CHICKEN_BREAST, amount: '', unit: '', additionalDetails: '', section: RANCH_CHICKEN_PIZZA },
        { ...RED_BELL_PEPPER, amount: '', unit: '', additionalDetails: 'sliced or diced', section: RANCH_CHICKEN_PIZZA },
        { ...RED_ONION, amount: '', unit: '', additionalDetails: 'sliced or diced', section: RANCH_CHICKEN_PIZZA },
        { ...BACON, amount: '', unit: '', additionalDetails: 'cooked', section: RANCH_CHICKEN_PIZZA },

        // SUPREME
        { ...PIZZA_SAUCE, amount: '', unit: '', additionalDetails: '', section: SUPREME_PIZZA },
        { ...MOZZARELLA_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: SUPREME_PIZZA },
        { ...PEPPERONI, amount: '', unit: '', additionalDetails: '', section: SUPREME_PIZZA },
        { ...SAUSAGE, amount: '', unit: '', additionalDetails: '', section: SUPREME_PIZZA },
        { ...MUSHROOM, amount: '', unit: '', additionalDetails: '', section: SUPREME_PIZZA },
        { ...OLIVES, amount: '', unit: '', additionalDetails: '', section: SUPREME_PIZZA },
        { ...RED_BELL_PEPPER, amount: '', unit: '', additionalDetails: 'sliced or diced', section: SUPREME_PIZZA },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        LARGE_BOWL,
        ROLLING_PIN,
        PLASTIC_WRAP,
        BAKING_SHEET,
    ],
    directions: [
        { step: 'On a clean counter, combine flour, salt, and yeast by hand. We are making focaccia bread.', section: SECTIONS.DOUGH },
        { step: 'Form a well in the center of the mixture and slowly add water and honey.', section: SECTIONS.DOUGH, img: [pizza1, pizza2] },
        { step: 'Continue to work the liquid into the entire mixture until the dough becomes only a little sticky.', section: SECTIONS.DOUGH, img: [pizza3, pizza4] },
        { step: 'Coat the inside of a large bowl with some oil.', section: SECTIONS.DOUGH },
        { step: 'Place the dough inside that oiled bowl and cover with plastic wrap or a cooking towel and refrigerate between 48 to 72 hours. This allows the dough to rise and adds flavor.', section: SECTIONS.DOUGH, img: [pizza5, pizza6] },
        { step: 'When you are ready to make the pizza, preheat the oven too 450ºF.', section: SECTIONS.DOUGH },
        { step: 'Grease a baking sheet with 1 Tablespoon olive oil.', section: SECTIONS.DOUGH },
        { step: 'This is the fun part where you will work the dough. Again on a clean counter sprinkle some flour (and you may need to add some more later so keep that flour handy).', section: SECTIONS.DOUGH },
        { step: 'Depending on how much the dough rose you might be able to make 2 to 3 pizzas. Note that the dough will rise slightly more as it returns to room temperature. Cut the dough to that number of desired pizzas and re-ball each of the dough parts and set aside.', section: SECTIONS.DOUGH, img: pizza7 },
        { step: 'Place one of dough balls on the floured counter. And begin kneading and pulling and stretching the dough. Continue until the dough has become less sticky. Add more flour conservatively. If you have added too much flour, you can add more water but try to avoid doing that.', section: SECTIONS.DOUGH },
        { step: 'Tossing the dough helps form the crust and gives the dough texture and flavor. Flatten the dough using a rolling pin until it\'s about 8 inches wide and you will place your closed fists beneath it (at about 10-and-2 steering wheel position). The tricky part is to avoid tearing the dough by making it too thin and accidentally ripping the dough with your fingers. So tuck those fingers in and use just your knuckles.', section: SECTIONS.DOUGH },
        { step: 'Pull your fists apart to pull the dough edges and try to get all around. Then with a quick flick of the wrists throw the dough directly up in the air and catch the dough with your closed fists.', section: SECTIONS.DOUGH, video: pizza8 },
        { step: 'Keep doing this until you are satisfied with the pizza size and thickness.', section: SECTIONS.DOUGH },
        { step: 'Over medium-high heat, combine olive oil, honey, and red pepper flakes in a saucepan.', section: BOBO_BRAZIL_SAUCE },
        { step: 'Cook for 1 to 2 minutes and set aside. Top the Bobo Brazil pizza with this sauce after baking.', section: BOBO_BRAZIL_SAUCE },
        { step: 'Over medium heat, melt the butter in a saucepan.', section: PHILLY_CHEESESTEAK_SAUCE, img: pizza9 },
        { step: 'Mix in flour and cook (about 1 minute).', section: PHILLY_CHEESESTEAK_SAUCE, img: [pizza10, pizza11] },
        { step: 'Slowly mix in cold milk and garlic. Bring the sauce to a simmer.', section: PHILLY_CHEESESTEAK_SAUCE, img: pizza12 },
        { step: 'Add salt, black pepper and nutmeg. Mix.', section: PHILLY_CHEESESTEAK_SAUCE },
        { step: 'Remove from heat and add parmesan cheese.', section: PHILLY_CHEESESTEAK_SAUCE, img: pizza13 },
        { step: 'Let the sauce cool for 5 to 10 minutes.', section: PHILLY_CHEESESTEAK_SAUCE },
        { step: 'Over medium-high heat, add olive oil in a frying pan.', section: PHILLY_CHEESESTEAK_PIZZA },
        { step: 'Add the thin steak slices to the pan and season with salt and pepper.', section: PHILLY_CHEESESTEAK_PIZZA, img: pizza14 },
        { step: 'Sear for 1 to 2 minutes total, making sure to flip halfway.', section: PHILLY_CHEESESTEAK_PIZZA, img: [pizza15, pizza16] },
        { step: 'Cut the steak into strips or bite-sized pieces. Set aside to top the pizza.', section: PHILLY_CHEESESTEAK_PIZZA, img: pizza17 },
        { step: 'Add a layer of Philly cheesesteak sauce on the dough.', section: PHILLY_CHEESESTEAK_PIZZA },
        { step: 'Add the other ingredients evenly across the pizza and follow the baking steps below.', section: PHILLY_CHEESESTEAK_PIZZA, img: pizza18 },
        { step: 'Place the shaped dough on the pan and add your favorite toppings.', section: SECTIONS.MAIN },
        { step: 'Bake the pizza for 20 to 25 minutes or until a nice golden brown.', section: SECTIONS.MAIN },
        { step: 'Enjoy these slices of heaven with friends and family.', section: SECTIONS.MAIN, img: [pizza19, pizza20, pizza21, pizza22, pizza23, pizza24] },
        { step: 'If you have any leftover dough that you aren\'t ready to use, you can freeze it and make pizzas, breadsticks, or cheeseballs.', section: SECTIONS.MAIN, img: pizza25 },
    ],
    notes: [
        { note: "If you need to slice the beef into thin slices, you can place the beef in the freezer for 20 to 30 minutes to make it easier to slice." },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};