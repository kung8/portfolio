// Add image imports here if available

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, CANDY_THERMOMETER, CINNAMON, CINNAMON_STICK, DOUGH_KNIFE, EGG_YOLK, KNIFE, MILK, MIXING_BOWL, MUFFIN_TIN, OVEN, POWDERED_SUGAR, ROLLING_PIN, SEA_SALT, STAND_MIXER, STRAINER, TONGS, UNSALTED_BUTTER, VANILLA_EXTRACT, WATER, WHISK, WHITE_SUGAR } = require('./ingredients');

const PASTEL_DE_NATA_DOUGH_SECTION = 'Pastel de Nata Dough';
const FLOUR_MIXTURE = 'Flour Mixture';
const SUGAR_MIXTURE = 'Sugar Mixture';
const MILK_SECTION = 'Milk';
const VANILLA_SECTION = 'Vanilla';
const EGG_SECTION = 'Egg';

const MAKE_PASTEL_DE_NATA_DOUGH = 'Make Pastel de Nata Dough';
const MAKE_CUSTARD = 'Make Custard';
const FIRST_LAMINATION = 'First Lamination';
const SECOND_LAMINATION = 'Second Lamination';
const FORM_DOUGH_LOG = 'Form Dough Log';

module.exports = {
    wip: true,
    cardName: 'Pasteis de Nata',
    name: 'Pasteis de Nata',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.PORTUGUESE],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.TART],
    yields: { amount: 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 60, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 90, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 510, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Pasteis de Nata', link: 'https://leitesculinaria.com/7759/recipes-pasteis-de-nata.html', authors: ['David Leite'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'set aside 2 tablespoon', section: PASTEL_DE_NATA_DOUGH_SECTION },
        { ...SEA_SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PASTEL_DE_NATA_DOUGH_SECTION },
        { ...WATER, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PASTEL_DE_NATA_DOUGH_SECTION },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PASTEL_DE_NATA_DOUGH_SECTION },
        { ...UNSALTED_BUTTER, amount: 16, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'room temperature', section: PASTEL_DE_NATA_DOUGH_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FLOUR_MIXTURE },
        { ...MILK, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_MIXTURE },
        
        { ...WHITE_SUGAR, amount: 4 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE },
        { ...CINNAMON_STICK, amount: 1, unit: '', additionalDetails: '', section: SUGAR_MIXTURE },
        { ...WATER, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE },

        { ...MILK, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MILK_SECTION },

        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VANILLA_SECTION },

        { ...EGG_YOLK, amount: 6, unit: '', additionalDetails: '', section: EGG_SECTION },

        { ...POWDERED_SUGAR, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CINNAMON, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS }
    ],
    appliances: [
        STAND_MIXER,
        OVEN,
    ],
    supplies: [
        DOUGH_KNIFE,
        ROLLING_PIN,
        KNIFE,
        MIXING_BOWL, 
        WHISK,
        CANDY_THERMOMETER,
        TONGS,
        STRAINER,
        MUFFIN_TIN,
    ],
    directions: [
        { step: `In a stand mixer, combine all the "${PASTEL_DE_NATA_DOUGH_SECTION}" section ingredients except the butter.`, section: MAKE_PASTEL_DE_NATA_DOUGH },
        { step: `Mix on low until it is becomes a soft, pillowy dough and should pull away from the bowl (a few minutes).`, section: MAKE_PASTEL_DE_NATA_DOUGH },
        { step: `Flour a clean counter. Shape it to a 6-inch square with a dough knife. It will be sticky which is expected.`, section: MAKE_PASTEL_DE_NATA_DOUGH },
        { step: `Flour the dough, cover with plastic wrap and let it rest at room temperature for 10 minutes. It won't change much though.`, section: MAKE_PASTEL_DE_NATA_DOUGH },

        { step: `Place it on more flour. Roll the dough into 16-inch square with a floured rolling pin.`, section: FIRST_LAMINATION },
        { step: `Brush off excess flour on top of the dough.`, section: FIRST_LAMINATION },
        { step: `Take about 1/3 of the butter and divide into little amount through about 2/3 of the dough on the left side (leaving an inch border). Carefully spread the butter.`, section: FIRST_LAMINATION },
        { step: `Scrape the bottom with a little flour to avoid the dough sticking to the counter. Be careful the dough will be fragile.`, section: FIRST_LAMINATION },
        { step: `Fold over the unbuttered third over to the middle third. And fold the other buttered third over the middle. Add more flour underneath with the dough knife to help unstick as needed.`, section: FIRST_LAMINATION },
        { step: `Gently fold over the top and bottom thirds to make it easier to rotate 90 degrees. Unfold.`, section: FIRST_LAMINATION },

        { step: `Repeat the lamination process.`, section: SECOND_LAMINATION },

        { step: `Roll out the dough to about 18 x 21 inch rectangle (shorter side facing you). Trim off excess.`, section: FORM_DOUGH_LOG },
        { step: `Brush off excess flour.`, section: FORM_DOUGH_LOG },
        { step: `Dot with the last of the butter and carefully spread over all of the dough.`, section: FORM_DOUGH_LOG },
        { step: `Starting at the edge facing you. Lift the edge carefully with the dough knife (flour as needed) and tightly roll it into a sausage. Brush off any excess flour as you roll.`, section: FORM_DOUGH_LOG },
        { step: `Once rolled, trim excess.`, section: FORM_DOUGH_LOG },
        { step: `Cut it in half.`, section: FORM_DOUGH_LOG },
        { step: `Wrap in plastic wrap and refrigerate for at least 2 hours (or overnight).`, section: FORM_DOUGH_LOG },
        
        { step: `In a mixing bowl, whisk "${FLOUR_MIXTURE}" section ingredients.`, section: MAKE_CUSTARD },
        { step: `In a saucepan, add the "${SUGAR_MIXTURE}" section ingredients and bring it to 220ºF. Do not stir.`, section: MAKE_CUSTARD },
        { step: `In another saucepan, bring "${MILK_SECTION}" section ingredients to a boil.`, section: MAKE_CUSTARD },
        { step: `Carefully whisk the hot milk into the flour mixture.`, section: MAKE_CUSTARD },
        { step: `Remove the cinnamon stick with tongs. Carefully whisk the sugar mixture into the flour mixture.`, section: MAKE_CUSTARD },
        { step: `Add vanilla. Whisk for 10 to 15 minutes.`, section: MAKE_CUSTARD },
        { step: `Add egg yolks. Whisk and strain into a bowl.`, section: MAKE_CUSTARD },
        { step: `Cover with plastic wrap and set aside. It should be thin.`, section: MAKE_CUSTARD },
        
        { step: `Rearrange the oven rack to about the top third.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Get the oven to 550ºF for about 30 minutes.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Cut each cold log into about 12 discs (about 1 to 1.5 inches thick).`, section: SECTIONS.ASSEMBLE },
        { step: `Place each in a muffin tin hole. Let them sit in room temperature for about 10 to 15 minutes to warm.`, section: SECTIONS.ASSEMBLE },
        { step: `Wet your thumb with water and flatten the disc and form the pastry cups.`, section: SECTIONS.ASSEMBLE },
        { step: `Fill each cup about 3/4 of the way up with the custard filling.`, section: SECTIONS.ASSEMBLE },
        
        { step: `Bake until the edges are browned (about 8 to 9 minutes).`, section: SECTIONS.BAKE },
        
        { step: `Let it cool for a few minutes before transferring to a cooling rack.`, section: SECTIONS.COOL },

        { step: `Once just warm, sprinkle generously with powdered sugar and cinnamon and enjoy!`, section: SECTIONS.SERVE },
    ],
    notes: [
        // Add any additional notes here
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.LOOSELY_COVERED,
            instructions: 'Best enjoyed the same day. They will soften over the day.'
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until warmed through (about 5 to 10 minutes).',
        },
    ],
    mealPrep: false,
};