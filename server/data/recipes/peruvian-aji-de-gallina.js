const blended = '../assets/Products/aji-de-gallina-blended.jpeg';
const blender = '../assets/Products/aji-de-gallina-blender.jpeg';
const boiling = '../assets/Products/aji-de-gallina-boiling-chicken.jpeg';
const breadInBlender = '../assets/Products/aji-de-gallina-bread-in-blender.jpeg';
const reAdded = '../assets/Products/aji-de-gallina-chicken-re-added.jpeg';
const zoomed = '../assets/Products/aji-de-gallina-cooked-zoomed.jpeg';
const garlic = '../assets/Products/aji-de-gallina-garlic.jpeg';
const onion = '../assets/Products/aji-de-gallina-onion.jpeg';
const shredded = '../assets/Products/aji-de-gallina-shredded-chicken.jpeg';
const aji = '../assets/Products/aji-de-gallina.jpeg';
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
    img: zoomed,
    recipeAuthors: ['Caroline'],
    recipeFinder: 'Gaby Ward',
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
        { label: 'Aji de Gallina', link: 'https://www.carolinescooking.com/aji-de-gallina-peruvian-chicken-stew/' }
    ],
    ingredients: [
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'diced', optional: false, section: ONION_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', optional: false, section: ONION_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', optional: false, section: ONION_SECTION },
        { ...OREGANO, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', optional: false, section: ONION_SECTION },
        { ...NUTMEG, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', optional: true, section: ONION_SECTION },

        { ...CHICKEN_BREAST, amount: 2, unit: '', additionalDetails: '', optional: false, section: SECTIONS.CHICKEN },

        { ...YELLOW_BELL_PEPPER, amount: 3 / 2, unit: '', additionalDetails: '', optional: false, section: SECTIONS.SAUCE_SECTION },
        { ...BREAD, amount: 4, unit: '', additionalDetails: '', optional: false, section: SECTIONS.SAUCE_SECTION },
        { ...MILK, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false, section: SECTIONS.SAUCE_SECTION },

        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', optional: false, section: SECTIONS.MAIN },

        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: '', optional: false, section: SECTIONS.SERVE },
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
        { step: 'Boil the chicken breasts in a pot of water.', section: SECTIONS.COOK_CHICKEN, img: boiling },
        { step: 'Once the chicken is cooked, shred the chicken on a cutting board. Place the shredded chicken in a large mixing bowl. Keep some of the chicken broth in the pot.', section: SECTIONS.COOK_CHICKEN, img: shredded },
        { step: `Add the "${SECTIONS.SAUCE}" section ingredients to a blender and blend together.`, section: SECTIONS.PREP_SAUCE, img: [blender, breadInBlender, blended] },
        { step: 'Over medium-high heat, heat oil in pan. brown the garlic.', section: COOK_AND_COMBINE, img: garlic },
        { step: 'Add the garlic. Cook until the garlic is fragrant and is light brown.', section: COOK_AND_COMBINE, img: garlic },
        { step: 'Add the onions to the pan. Cook until the onions are browned.', section: COOK_AND_COMBINE, img: onion },
        { step: 'Add the sauce and chicken to the pan.', section: COOK_AND_COMBINE, img: reAdded },
        { step: 'Continue to mix this mixture and let cook a few more minutes until well blended. At this point if you want to thin the sauce you can add a little chicken broth or milk, depending on your preference.', section: COOK_AND_COMBINE },
        { step: 'Serve with rice and enjoy the taste of my favorite Peruvian dish!', section: SECTIONS.SERVE, img: aji },
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