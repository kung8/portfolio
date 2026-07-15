// const rolls1 = '../assets/Products/beef-lamb-sausage-rolls-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS, PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { BAKING_SODA, BLACK_PEPPER, CAYENNE_PEPPER, EGG, GARLIC, GROUND_BEEF, GROUND_LAMB, HEAVY_CREAM, MIXING_BOWL, OVEN, REFRIGERATED_PUFF_PASTRY, SALT, SMALL_BOWL, SMOKED_PAPRIKA, YELLOW_ONION } = require('./ingredients');

const SAUSAGE_FILLING = 'Sausage Filling';
const PUFF_PASTRY_SECTION = 'Puff Pastry';
const EGG_WASH = 'Egg Wash';

const PREP_SAUSAGE_FILLING = 'Prep Sausage Filling';
const PREP_PUFF_PASTRY = 'Prep Puff Pastry';
const PREP_EGG_WASH = 'Prep Egg Wash';
const FORM_SAUSAGE_ROLLS = 'Form Sausage Rolls';
const BAKE_SAUSAGE_ROLLS = 'Bake Sausage Rolls';

module.exports = {
    wip: true,
    cardName: 'Beef Lamb Sausage Rolls',
    name: 'Beef Lamb Sausage Rolls',
    img: '',
    available: true,
    recommended: false,
    createdAt: '06/10/2026 22:39:58',
    modifiedAt: '06/10/2026 22:39:58',
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.BRITISH],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF, PROTEIN.LAMB],
    type: [TYPES.PASTRY],
    yields: { amount: 30, unit: YIELD_UNITS.ROLL },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Beef and Lamb Sausage Rolls', link: 'https://moribyan.com/beef-lamb-sausage-rolls/', authors: ['Moribyan'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SAUSAGE_FILLING },
        { ...GROUND_LAMB, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SAUSAGE_FILLING },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SAUSAGE_FILLING },
        { ...YELLOW_ONION, amount: 1 / 2, unit: '', additionalDetails: 'pureed', section: SAUSAGE_FILLING },
        { ...SMOKED_PAPRIKA, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUSAGE_FILLING },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUSAGE_FILLING },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUSAGE_FILLING },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUSAGE_FILLING },
        { ...CAYENNE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.DASH, additionalDetails: '', section: SAUSAGE_FILLING },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SAUSAGE_FILLING },

        { ...REFRIGERATED_PUFF_PASTRY, amount: 2, unit: INGREDIENT_UNITS.SHEET, additionalDetails: 'thawed', section: PUFF_PASTRY_SECTION },

        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: EGG_WASH },
        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: EGG_WASH },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        SMALL_BOWL,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SAUSAGE_FILLING}" section ingredients.`, section: PREP_SAUSAGE_FILLING },
        
        { step: `Lightly flour a work station.`, section: PREP_PUFF_PASTRY },
        { step: `Roll out puff pastry until smoothed out.`, section: PREP_PUFF_PASTRY },
        { step: `Cut sheets in half lengthwise (you will have 4 rectangles).`, section: PREP_PUFF_PASTRY },

        { step: `In a small bowl, combine the "${EGG_WASH}" section ingredients.`, section: PREP_EGG_WASH },
        
        { step: `Preheat the oven to 375ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Line a baking sheet with parchment paper.`, section: SECTIONS.PREP_PAN },
        { step: `Brush egg wash over puff pastry.`, section: FORM_SAUSAGE_ROLLS },
        { step: `Transfer sausage filling to a ziploc bag. Cut the corner.`, section: FORM_SAUSAGE_ROLLS },
        { step: `Pipe a thick strip of filling lengthwise (about 1/3).`, section: FORM_SAUSAGE_ROLLS },
        { step: `Fold pastry over filling (from the shorter side). Press down where the meat filling ends.`, section: FORM_SAUSAGE_ROLLS },
        { step: `Cut excess off if there is a lot of overlap but a little overlap is fine.`, section: FORM_SAUSAGE_ROLLS },
        { step: `Use a fork to crimp the edges.`, section: FORM_SAUSAGE_ROLLS },
        { step: `Cut into 1.5 to 2 inch pieces.`, section: FORM_SAUSAGE_ROLLS },
        { step: `Arrange pastries on the baking sheet.`, section: FORM_SAUSAGE_ROLLS },
        { step: `Brush the tops with egg wash.`, section: FORM_SAUSAGE_ROLLS },
        { step: `Make 2 small slits on top.`, section: FORM_SAUSAGE_ROLLS },
        { step: `Sprinkle the top with sesame seeds.`, section: FORM_SAUSAGE_ROLLS },

        { step: `Bake until the pastry is golden and puffed and the filling is cooked (about 25 to 30 minutes).`, section: BAKE_SAUSAGE_ROLLS },
        
        { step: `Let cool for a few minutes.`, section: SECTIONS.CHILL },
        
        { step: `Enjoy!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through and the pastry is crisp (about 10 to 15 minutes).',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 350ºF until heated through and the pastry is crisp (about 5 to 10 minutes).',
        },
    ],
    mealPrep: true,
};