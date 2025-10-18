const treats1 = '../assets/Products/rice-krispy-treats-1.jpeg';
const treats2 = '../assets/Products/rice-krispy-treats-2.jpeg';
const treats3 = '../assets/Products/rice-krispy-treats-3.jpeg';
const treats4 = '../assets/Products/rice-krispy-treats-4.jpeg';
const treats5 = '../assets/Products/rice-krispy-treats-5.jpeg';
const treats6 = '../assets/Products/rice-krispy-treats-6.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const { MINI_MARSHMALLOWS, RICE_KRISPIES_CEREAL, UNSALTED_BUTTER, VANILLA_EXTRACT } = require('./ingredients');

module.exports = {
    cardName: 'Rice Krispy Treats',
    name: 'Rice Krispy Treats',
    img: treats6,
    recipeAuthors: ['Holly Nilsson'],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Rice Krispie Treats', link: "https://www.spendwithpennies.com/extra-chewy-rice-krispie-treats/" }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...MINI_MARSHMALLOWS, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...RICE_KRISPIES_CEREAL, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'serving plate or bowl' },
    ],
    directions: [
        { step: 'Over low heat, melt butter and marshmallows in a saucepan. Stir to prevent it from burning and help it be consistent. My suggestion is to mix until the marshmallows are coated with the butter.', section: SECTIONS.MAIN, img: [treats1, treats2] },
        { step: 'If you want to make one of the variations with chocolate, melt chocolate chip after marshmallows are melted and stir.', section: SECTIONS.MAIN },
        { step: 'Remove the saucepan from heat and mix in vanilla (optional depending on how sweet the chocolate chips is).', section: SECTIONS.MAIN, img: treats3 },
        { step: 'Stir while adding in the Rice Krispies cereal. Mix until the cereal is evenly coated.', section: SECTIONS.MAIN, img: treats4 },
        { step: 'Press into a greased 9x13 pan. But do not press them too hard if you want the treats to be a little softer.', section: SECTIONS.MAIN, img: treats5 },
        { step: 'Let cool and enjoy.', section: SECTIONS.MAIN },
    ],
    notes: [
        { note: "Be generous on marshmallows. The more marshmallows, the chewier the treats will be. Make sure it is completely melted to adhere well and are soft." },
        { note: "Do not use stale or old marshmallows. They will not melt well and will make the treats hard." },
        { note: "Do not overcook the marshmallows or the sugar will become hard." },
        { note: "If you want a thicker treat, use a smaller baking pan." },
        { note: "Use real butter and some vanilla for the best flavor." },
        { note: "Variations of this recipe include (1) Lemon, (2) Turtle (chocolate, caramel, and pecans), (3) Peanut Butter (chocolate and peanut butter), (4) Pineapple Coconut (pineapple and coconut), (5) Chocolate Oreo (crushed Oreo), and (6) Dulce de Leche (milk and white chocolate)." },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};