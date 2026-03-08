const croquette1 = '../assets/Products/korokke-croquette-1.jpeg';
const croquette2 = '../assets/Products/korokke-croquette-2.jpeg';
const croquette3 = '../assets/Products/korokke-croquette-3.jpeg';
const croquette4 = '../assets/Products/korokke-croquette-4.jpeg';
const croquette5 = '../assets/Products/korokke-croquette-5.jpeg';
const croquette6 = '../assets/Products/korokke-croquette-6.jpeg';
const croquette7 = '../assets/Products/korokke-croquette-7.jpeg';
const croquette8 = '../assets/Products/korokke-croquette-8.jpeg';
const croquette9 = '../assets/Products/korokke-croquette-9.jpeg';
const croquette10 = '../assets/Products/korokke-croquette-10.jpeg';
const croquette11 = '../assets/Products/korokke-croquette-11.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BLACK_PEPPER, BOWL, CABBAGE, COLANDER, DEEP_FRYER, EGG, FRYING_PAN, GROUND_BEEF, JAPANESE_SESAME_DRESSING, KOSHER_SALT, LARGE_POT, MASHER, MIXING_BOWL, PANKO_BREADCRUMBS, RUSSET_POTATO, STOVE, TONKATSU_SAUCE, UNSALTED_BUTTER, VEGETABLE_OIL, YELLOW_ONION } = require('./ingredients');

const ONION_SECTION = 'Onion';
const MASHED_POTATOES = 'Mashed Potatoes';

const COOK_ONION_AND_BEEF = 'Cook Onion and Beef';
const MASH_POTATOES = 'Mash Potatoes';
const PREP_PATTIES = 'Prep Patties';

module.exports = {
    cardName: 'Korokke Croquette',
    name: 'Korokke Croquette',
    img: croquette11,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.JAPANESE, GENRES.FRENCH],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.MAIN_COURSE],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Korokke Croquette',
            link: 'https://www.justonecookbook.com/moms-korokke-croquette/',
            authors: ['Namiko Hirasawa Chen'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...RUSSET_POTATO, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and quartered', section: SECTIONS.POTATOES },

        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'minced', section: ONION_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ONION_SECTION },

        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.BEEF },
        { ...KOSHER_SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BEEF },

        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MASHED_POTATOES },
        { ...KOSHER_SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MASHED_POTATOES },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MASHED_POTATOES },

        { ...ALL_PURPOSE_FLOUR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DREDGING_STATION },
        { ...PANKO_BREADCRUMBS, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DREDGING_STATION },
        { ...EGG, amount: 3, unit: INGREDIENT_UNITS.LARGE, additionalDetails: '', section: SECTIONS.DREDGING_STATION },

        { ...VEGETABLE_OIL, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'for deep frying', section: SECTIONS.DEEP_FRY },

        { ...TONKATSU_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CABBAGE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...JAPANESE_SESAME_DRESSING, amount: '', unit: '', additionalDetails: 'for cabbage', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
        DEEP_FRYER,
    ],
    supplies: [
        LARGE_POT,
        FRYING_PAN,
        COLANDER,
        MIXING_BOWL,
        MASHER,
        { ...BOWL, amount: 3 },
    ],
    directions: [
        { step: 'Wash, peel and cut each potatoes into 4 equal pieces (for larger potatoes cut into 16 parts).', section: SECTIONS.COOK_POTATOES },
        { step: 'Place potatoes in a large pot and cover with cold water. Cover pot with a lid slightly ajar.', section: SECTIONS.COOK_POTATOES },
        { step: 'Turn heat to medium-high. Bring to a boil (about 20 minutes).', section: SECTIONS.COOK_POTATOES, img: croquette1 },
        { step: 'Reduce to medium and let it simmer until potatoes are tender (about 15 to 20 minutes).', section: SECTIONS.COOK_POTATOES },

        { step: 'Over medium heat, heat a frying pan.', section: COOK_ONION_AND_BEEF },
        { step: 'Add vegetable oil and onion. Spread and let it cook undisturbed for a few minutes.', section: COOK_ONION_AND_BEEF },
        { step: 'Saute until translucent and tender (about 12 to 15 minutes).', section: COOK_ONION_AND_BEEF, img: croquette2 },
        { step: 'Add beef and break up with a spatula.', section: COOK_ONION_AND_BEEF, img: croquette3 },
        { step: `Add salt and pepper. Cook until no longer pink.`, section: COOK_ONION_AND_BEEF, img: croquette4 },
        { step: 'Set aside.', section: COOK_ONION_AND_BEEF },

        { step: 'Drain potatoes. Return to pot.', section: MASH_POTATOES, img: croquette5 },
        { step: 'Over low heat, stir continuously to help the water evaporate (about 1 to 2 minutes).', section: MASH_POTATOES },
        { step: 'Transfer potatoes to a mixing bowl.', section: MASH_POTATOES },
        { step: 'Mash potatoes while leaving some chunks.', section: MASH_POTATOES },
        { step: 'Add butter, salt, and pepper to the mashed potatoes.', section: MASH_POTATOES, img: croquette6 },

        { step: 'Drain the cooked beef and onions.', section: SECTIONS.ASSEMBLE },
        { step: 'Add beef and onions to the mashed potatoes.', section: SECTIONS.ASSEMBLE, img: croquette7 },
        { step: 'Gently mix.', section: SECTIONS.ASSEMBLE },

        { step: 'Form the mixture into 3 inch long patties.', section: PREP_PATTIES },
        { step: 'Place patties on a tray.', section: PREP_PATTIES, img: croquette8 },
        { step: 'Let cool to room temperature.', section: PREP_PATTIES },
        { step: 'Place patties in the fridge (about 30 minutes).', section: PREP_PATTIES },

        { step: 'Set up 3 shallow dishes for the dredging station: flour, beaten eggs, and panko breadcrumbs.', section: SECTIONS.DREDGE },
        { step: 'Dredge in flour, shake off excess.', section: SECTIONS.DREDGE },
        { step: 'Dip in egg.', section: SECTIONS.DREDGE },
        { step: 'Coat with panko. Press gently to adhere. Reshape as needed.', section: SECTIONS.DREDGE },
        { step: 'Place on a tray.', section: SECTIONS.DREDGE, img: croquette9 },

        { step: 'Line a baking sheet with paper towels and place a wire rack on top.', section: SECTIONS.DEEP_FRY },
        { step: 'Heat oil to 350ºF in a deep fryer or in a medium pot over medium heat (about 2 inches of oil).', section: SECTIONS.DEEP_FRY },
        { step: 'Deep fry until golden brown (about 2 to 3 minutes).', section: SECTIONS.DEEP_FRY },
        { step: 'Transfer cooked croquettes to the drip station.', section: SECTIONS.DEEP_FRY, img: croquette10 },

        { step: 'Enjoy these with tonkatsu sauce and a side of shredded cabbage topped with Japanese sesame dressing.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Drain the cooked beef and onions well to prevent soggy patties.' },
        { note: 'Putting the patties in the fridge helps them hold their shape when frying and prevents them from bursting.' },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through (about 10 to 15 minutes from fridge, 15 to 20 minutes for defrosted, or 45 minutes for frozen)',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 350ºF until heated through (about 5 to 7 minutes from fridge).',
        },
    ],
    mealPrep: true,
};