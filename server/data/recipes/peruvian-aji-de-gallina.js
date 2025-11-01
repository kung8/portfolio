const gallina1 = '../assets/Products/aji-de-gallina-1.jpeg';
const gallina2 = '../assets/Products/aji-de-gallina-2.jpeg';
const gallina3 = '../assets/Products/aji-de-gallina-3.jpeg';
const gallina4 = '../assets/Products/aji-de-gallina-4.jpeg';
const gallina5 = '../assets/Products/aji-de-gallina-5.jpeg';
const gallina6 = '../assets/Products/aji-de-gallina-6.jpeg';
const gallina7 = '../assets/Products/aji-de-gallina-7.jpeg';
const gallina8 = '../assets/Products/aji-de-gallina-8.jpeg';
const gallina9 = '../assets/Products/aji-de-gallina-9.jpeg';
const gallina10 = '../assets/Products/aji-de-gallina-10.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_PEPPER,
    BLENDER,
    BREAD,
    CHICKEN_BREAST,
    CUTTING_BOARD,
    GARLIC,
    JASMINE_RICE,
    KNIFE,
    LARGE_PAN,
    LARGE_POT,
    MEASURING_CUPS,
    MEASURING_SPOONS,
    MILK,
    MIXING_BOWL,
    NUTMEG,
    OREGANO,
    SALT,
    SMALL_BOWL,
    SPOON,
    STOVE,
    VEGETABLE_OIL,
    YELLOW_BELL_PEPPER,
    YELLOW_ONION,
} = require('./ingredients');

const ONION_SECTION = 'Onion Mixture';
const PREP_ONION = 'Prep Onion';
const COOK_AND_COMBINE = 'Cook and Combine';

module.exports = {
    cardName: 'Aji de Gallina',
    name: 'Peruvian Aji de Gallina',
    img: gallina10,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.PERUVIAN, GENRES.LATIN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    separated: true,
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Aji de Gallina', 
            link: 'https://www.carolinescooking.com/aji-de-gallina-peruvian-chicken-stew/',
            authors: ['Caroline'],
            finder: 'Gaby Ward', 
        }
    ],
    ingredients: [
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'diced', section: ONION_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: ONION_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: ONION_SECTION },
        { ...OREGANO, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: ONION_SECTION },
        { ...NUTMEG, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', optional: true, section: ONION_SECTION },

        { ...CHICKEN_BREAST, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...YELLOW_BELL_PEPPER, amount: 3 / 2, unit: '', additionalDetails: '', section: SECTIONS.SAUCE_SECTION },
        { ...BREAD, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.SAUCE_SECTION },
        { ...MILK, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE_SECTION },

        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },

        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        BLENDER,
        STOVE,
    ],
    supplies: [
        LARGE_PAN,
        LARGE_POT,
        MEASURING_CUPS,
        MEASURING_SPOONS,
        CUTTING_BOARD,
        KNIFE,
        MIXING_BOWL,
        SMALL_BOWL,
        SPOON,
    ],
    directions: [
        { step: `In a small bowl, combine the "${ONION_SECTION}" section ingredients.`, section: PREP_ONION },
        { step: 'Boil the chicken breasts in a pot of water.', section: SECTIONS.COOK_CHICKEN, img: gallina1 },
        { step: 'Once the chicken is cooked, shred the chicken on a cutting board. Place the shredded chicken in a large mixing bowl. Keep some of the chicken broth in the pot.', section: SECTIONS.COOK_CHICKEN, img: gallina2 },
        { step: `Add the "${SECTIONS.SAUCE}" section ingredients to a blender and blend together.`, section: SECTIONS.PREP_SAUCE, img: [gallina3, gallina4, gallina5] },
        { step: 'Over medium-high heat, heat oil in pan.', section: COOK_AND_COMBINE },
        { step: 'Add the garlic. Cook until the garlic is fragrant and is light brown.', section: COOK_AND_COMBINE, img: gallina6 },
        { step: 'Add the onions to the pan. Cook until the onions are browned.', section: COOK_AND_COMBINE, img: gallina7 },
        { step: 'Add the sauce and chicken to the pan.', section: COOK_AND_COMBINE, img: gallina8 },
        { step: 'Continue to mix this mixture and let cook a few more minutes until well blended. At this point if you want to thin the sauce you can add a little chicken broth or milk, depending on your preference.', section: COOK_AND_COMBINE },
        { step: 'Serve with rice and enjoy the taste of my favorite Peruvian dish!', section: SECTIONS.SERVE, img: gallina9 },
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