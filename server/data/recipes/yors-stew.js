const stew1 = '../assets/Products/yors-stew-1.jpeg';
const stew2 = '../assets/Products/yors-stew-2.jpeg';
const stew3 = '../assets/Products/yors-stew-3.jpeg';
const stew4 = '../assets/Products/yors-stew-4.jpeg';
const stew5 = '../assets/Products/yors-stew-5.jpeg';
const stew6 = '../assets/Products/yors-stew-6.jpeg';
const stew7 = '../assets/Products/yors-stew-7.jpeg';
const stew8 = '../assets/Products/yors-stew-8.jpeg';
const stew9 = '../assets/Products/yors-stew-9.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CARROT, CHICKEN_BOUILLON, CORNSTARCH, EGG, FENNEL_SEEDS, GARLIC, HOT_DOG, PAPRIKA, PORK_BUTT, POTATO, RED_BELL_PEPPER, RED_WINE, SALT, SOUR_CREAM, SWEET_ONION, VEGETABLE_OIL, WATER } = require('./ingredients');

const SEARING_SECTION = 'Searing';
const CARAMELIZED_ONION_SECTION = 'Caramelized Onion';
const GARLIC_SECTION = 'Garlic';
const SEASONING_SECTION = 'Seasoning';
const LIQUID_SECTION = 'Liquid';
const CORNSTARCH_SLURRY_SECTION = 'Cornstarch Slurry';

const SEAR_PORK = 'Sear Pork';
const CARAMELIZE_ONION = 'Caramelize Onion';
const SAUTE_VEGETABLES = 'Saute Vegetables';
const COOK_STEW = 'Cook Stew';
const FRY_EGG = 'Fry Egg';
const COOK_HOTDOG = 'Cook Hotdog';

module.exports = {
    wip: true,
    cardName: 'Yor\'s Stew',
    name: 'Yor\'s Stew',
    img: stew9,
    available: false,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.EGG, PROTEIN.PORK],
    type: [TYPES.CURRY],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 2, unit: TIME_UNITS.HOUR },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Yor\'s Stew', 
            link: 'https://glutenfreewithme.com/yors-stew-inspired-by-spy-x-family-gluten-free/#google_vignette',
            authors: ['Carly'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SEARING_SECTION },
        { ...PORK_BUTT, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'boneless, bite size cubes', section: SEARING_SECTION },
        { ...SWEET_ONION, amount: 2, unit: '', additionalDetails: 'diced', section: CARAMELIZED_ONION_SECTION },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: GARLIC_SECTION },
        { ...CARROT, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...POTATO, amount: 5, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...PAPRIKA, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SEASONING_SECTION },
        { ...FENNEL_SEEDS, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SEASONING_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: SEASONING_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: SEASONING_SECTION },
        { ...RED_WINE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: LIQUID_SECTION },
        { ...CHICKEN_BOUILLON, amount: 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: LIQUID_SECTION },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: LIQUID_SECTION },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'optional', section: CORNSTARCH_SLURRY_SECTION },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'optional', section: CORNSTARCH_SLURRY_SECTION },
        { ...SOUR_CREAM, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...EGG, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...HOT_DOG, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Over medium heat, heat oil in a large pot.', section: SEAR_PORK },
        { step: 'Add pork. Brown on all sides. Set aside pork.', section: SEAR_PORK, img: [stew1, stew2] },
        { step: 'Add onion. Cook until caramelized (about 10 to 15 minutes).', section: CARAMELIZE_ONION, img: stew3 },
        { step: 'Add garlic. Cook until fragrant.', section: SAUTE_VEGETABLES },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients. Saute for a few minutes.`, section: SAUTE_VEGETABLES, img: stew4 },
        { step: `Re-add the pork and the "${SECTIONS.SEASONINGS}" section ingredients. Mix.`, section: COOK_STEW, img: [stew5, stew6] },
        { step: 'Add red wine. Deglaze the pot.', section: COOK_STEW },
        { step: 'Add chicken bouillon and water. It should almost cover the veggies. Bring to a boil.', section: COOK_STEW, img: stew7 },
        { step: 'Reduce to low heat. Cover. Simmer for an hour.', section: COOK_STEW },
        { step: 'Cook until potatoes are tender. Uncover the lid a little to let steam escape.', section: COOK_STEW },
        { step: 'Let the stew reduce for 15 minutes. If you need to thicken it some more, you can add optionally add the cornstarch slurry.', section: COOK_STEW },
        { step: 'In a frying pan, fry eggs one at a time. Set aside once they are done.', section: FRY_EGG },
        { step: 'Along one side of each hot dog, cut ends to form tentacles.', section: COOK_HOTDOG },
        { step: 'Brown the hotdogs in the frying pan.', section: COOK_HOTDOG, img: stew8 },
        { step: 'Serve each bowl of stew with one octopus hotdog and fried egg. Enjoy this Spy x Family inspired dish.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'I think there are some potential improvements that I will try next time. The flavor was not as good as I expected. I definitely burnt it a little, when I let it simmer. I did not use the sour cream this time but do not think it would make too much of a difference. The sauce was dried out and I tried to return the sauce by reboiling the sauce on the side and re-added to the stew to avoid over softening.' }
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};