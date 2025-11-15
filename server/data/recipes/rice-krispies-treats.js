const treats1 = '../assets/Products/rice-krispies-treats-1.jpeg';
const treats2 = '../assets/Products/rice-krispies-treats-2.jpeg';
const treats3 = '../assets/Products/rice-krispies-treats-3.jpeg';
const treats4 = '../assets/Products/rice-krispies-treats-4.jpeg';
const treats5 = '../assets/Products/rice-krispies-treats-5.jpeg';
const treats6 = '../assets/Products/rice-krispies-treats-6.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const { BAKING_PAN, MINI_MARSHMALLOWS, RICE_KRISPIES_CEREAL, SAUCEPAN, STOVE, UNSALTED_BUTTER, VANILLA_EXTRACT } = require('./ingredients');

const MARSHMALLOW_BUTTER = 'Marshmallow and Butter';
const RICE_KRISPIES_TREAT = 'Rice Krispies Treat';

const MELT_MARSHMALLOW_AND_BUTTER = 'Melt Marshmallow and Butter';

module.exports = {
    cardName: 'Rice Krispies Treats',
    name: 'Rice Krispies Treats',
    img: treats6,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.DESSERT],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Rice Krispies Treats',
            link: "https://www.spendwithpennies.com/extra-chewy-rice-krispie-treats/",
            authors: ['Holly Nilsson'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MARSHMALLOW_BUTTER },
        { ...MINI_MARSHMALLOWS, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MARSHMALLOW_BUTTER },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RICE_KRISPIES_TREAT },
        { ...RICE_KRISPIES_CEREAL, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_KRISPIES_TREAT },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        BAKING_PAN,
    ],
    directions: [
        { step: `Over low heat, melt and stir the "${MARSHMALLOW_BUTTER}" section ingredients until mixed.`, section: MELT_MARSHMALLOW_AND_BUTTER, img: [treats1, treats2] },

        { step: `Remove from heat. Mix in vanilla.`, section: SECTIONS.ASSEMBLE, img: treats3 },
        { step: `Stir while adding in the Rice Krispies cereal. Mix until the cereal is evenly coated.`, section: SECTIONS.ASSEMBLE, img: treats4 },
        { step: `Lightly press into a greased baking pan.`, section: SECTIONS.ASSEMBLE, img: treats5 },

        { step: `Let cool and enjoy.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: "Be generous on marshmallows. The more marshmallows, the chewier the treats will be. Make sure it is completely melted to adhere well and are soft." },
        { note: "If you want to make one of the variations with chocolate, melt chocolate chip after the marshmallows are melted and stir." },
        { note: "Optionally omit the vanilla extract if you are adding chocolate." },
        { note: "Do not press down the rice krispies too hard if you want the treats to be a little softer." },
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