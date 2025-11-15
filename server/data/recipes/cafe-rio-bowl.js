const bowl1 = '../assets/Products/cafe-rio-bowl-1.jpeg';
const bowl2 = '../assets/Products/cafe-rio-bowl-2.jpeg';
const bowl3 = '../assets/Products/cafe-rio-bowl-3.jpeg';
const bowl4 = '../assets/Products/cafe-rio-bowl-4.jpeg';
const bowl5 = '../assets/Products/cafe-rio-bowl-5.jpeg';
const bowl6 = '../assets/Products/cafe-rio-bowl-6.jpeg';
const bowl7 = '../assets/Products/cafe-rio-bowl-7.jpeg';
const bowl8 = '../assets/Products/cafe-rio-bowl-8.jpeg';
const bowl9 = '../assets/Products/cafe-rio-bowl-9.jpeg';
const bowl10 = '../assets/Products/cafe-rio-bowl-10.jpeg';
const bowl11 = '../assets/Products/cafe-rio-bowl-11.jpeg';
const bowl12 = '../assets/Products/cafe-rio-bowl-12.jpeg';

const { CATEGORIES, GENRES, TYPES, METHODS, PROTEIN, SECTIONS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require("./constants");
const {
    AVOCADO,
    BALSAMIC_VINEGAR,
    BLACK_BEANS,
    BROWN_RICE,
    CHEDDAR_CHEESE,
    CHIPOTLE_SALAD_KITS,
    CILANTRO,
    GARLIC,
    GARLIC_POWDER,
    GRILL_OR_STOVE,
    GROUND_MUSTARD,
    HONEY,
    ITALIAN_SEASONING,
    JALAPENO_PEPPER,
    LIGHT_SOY_SAUCE,
    MAYONNAISE,
    MILK,
    PARSLEY,
    RANCH_DIP_DRESSING,
    ROMA_TOMATO,
    SAUCEPAN,
    SKIRT_STEAK,
    SOUR_CREAM,
    SPATULA,
    TONGS,
    TORTILLA,
    VEGETABLE_OIL,
    WORCESTERSHIRE_SAUCE,
    ZIPLOC_BAG,
} = require('./ingredients');

const CILANTRO_RANCH_DRESSING = 'Cilantro Ranch Dressing';

module.exports = {
    cardName: 'Cafe Rio Bowl',
    name: 'Cafe Rio Bowl',
    img: bowl12,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN, GENRES.AMERICAN],
    method: [METHODS.MARINADE, METHODS.GRILL],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.SALAD, TYPES.PROTEIN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Cafe Rio Cilantro Ranch Dressing', 
            link: "https://lilluna.com/cafe-rio-cilantro-ranch-dressing/",
            authors: ['Kristyn Merkley'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...SKIRT_STEAK, amount: 32, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'strips', section: SECTIONS.MEAT },
        { ...BALSAMIC_VINEGAR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MEAT },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MEAT },
        { ...VEGETABLE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MEAT },
        { ...WORCESTERSHIRE_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MEAT },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MEAT },
        { ...ITALIAN_SEASONING, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MEAT },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MEAT },
        { ...GROUND_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MEAT },
        { ...PARSLEY, amount: '', unit: '', additionalDetails: 'to garnish', section: SECTIONS.MEAT },

        { ...RANCH_DIP_DRESSING, amount: 1, unit: INGREDIENT_UNITS.PACKET, additionalDetails: '', section: CILANTRO_RANCH_DRESSING },
        { ...MAYONNAISE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CILANTRO_RANCH_DRESSING },
        { ...SOUR_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CILANTRO_RANCH_DRESSING },
        { ...CILANTRO, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: '', section: CILANTRO_RANCH_DRESSING },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: CILANTRO_RANCH_DRESSING },
        { ...JALAPENO_PEPPER, amount: 3, unit: '', additionalDetails: '', section: CILANTRO_RANCH_DRESSING },
        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CILANTRO_RANCH_DRESSING },

        { ...TORTILLA, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHIPOTLE_SALAD_KITS, amount: 32, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BROWN_RICE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cooked', section: SECTIONS.MAIN },
        { ...CHEDDAR_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'shredded', section: SECTIONS.MAIN },
        { ...BLACK_BEANS, amount: 15, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'drained', section: SECTIONS.MAIN },
        { ...SOUR_CREAM, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...AVOCADO, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.MAIN },
    ],
    appliances: [
        GRILL_OR_STOVE,
    ],
    supplies: [
        { ...ZIPLOC_BAG, additionalDetails: 'gallon-size' },
        TONGS,
        SAUCEPAN,
        SPATULA,
    ],
    directions: [
        { step: `In a ziploc bag or mixing bowl, mix together all the marinade ingredients except the steak and parsley.`, section: SECTIONS.MEAT, img: bowl1 },
        { step: `Add the steak to the marinade.`, section: SECTIONS.MEAT, img: bowl2 },
        { step: `Marinate for 20 minutes.`, section: SECTIONS.MEAT },
        { step: `Preheat a grill (or griddle).`, section: SECTIONS.MEAT },
        { step: `Add steak to the grill using tongs and cook until the preferred doneness.`, section: SECTIONS.MEAT, img: [bowl3, bowl4] },
        { step: `Top the steak with parsley.`, section: SECTIONS.MEAT },
        { step: `Blend together the cilantro ranch dressing ingredients.`, section: CILANTRO_RANCH_DRESSING, img: [bowl5, bowl6] },
        { step: `Serve and mix in your homemade Cafe Rio bowl.`, section: CILANTRO_RANCH_DRESSING },
        { step: `After the steak is cooked and remove from the grill, optionally cook the fajitas on the grill. Use any of the residual sauce leftover from the steak on the grill.`, section: SECTIONS.MAIN, img: [bowl7, bowl8] },
        { step: `Warm the beans in a saucepan.`, section: SECTIONS.MAIN },
        { step: `Warm the tortillas on the grill.`, section: SECTIONS.MAIN, img: bowl9 },
        { step: `Assemble the salad bowls with the warmed tortilla, cooked rice, warmed beans, cooked steak, salad kit, and all the other desired toppings.`, section: SECTIONS.MAIN, img: [bowl10, bowl11] },
    ],
    notes: [
        { note: 'I sometimes forget items in fridge or pantry when I am ready to make the salad. I recommend making a list of items beforehand, so you can reference at the time of assembly and not miss your favorite ingredients.' }
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the ingredients separately. The dressing can last 2 weeks in the fridge.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry the steak at 350ºF until heated through (about 2 to 5 minutes).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Place the steak on a wire rack inside a baking sheet. Bake at 250ºF until reaches 110ºF. Then over high heat, sear the steak until browned on both sides (about 1 minute per side).',
        },
    ],
    mealPrep: true,
};