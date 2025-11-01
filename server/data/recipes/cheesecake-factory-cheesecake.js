const cheesecake1 = '../assets/Products/cheesecake-factory-cheesecake-1.jpeg';
const cheesecake2 = '../assets/Products/cheesecake-factory-cheesecake-2.jpeg';
const cheesecake3 = '../assets/Products/cheesecake-factory-cheesecake-3.jpeg';
const cheesecake4 = '../assets/Products/cheesecake-factory-cheesecake-4.jpeg';
const cheesecake5 = '../assets/Products/cheesecake-factory-cheesecake-5.jpeg';
const cheesecake6 = '../assets/Products/cheesecake-factory-cheesecake-6.jpeg';
const cheesecake7 = '../assets/Products/cheesecake-factory-cheesecake-7.jpeg';
const cheesecake8 = '../assets/Products/cheesecake-factory-cheesecake-8.jpeg';
const cheesecake9 = '../assets/Products/cheesecake-factory-cheesecake-9.jpeg';
const cheesecake10 = '../assets/Products/cheesecake-factory-cheesecake-10.jpeg';
const cheesecake11 = '../assets/Products/cheesecake-factory-cheesecake-11.jpeg';
const cheesecake12 = '../assets/Products/cheesecake-factory-cheesecake-12.jpeg';
const cheesecake13 = '../assets/Products/cheesecake-factory-cheesecake-13.jpeg';
const cheesecake14 = '../assets/Products/cheesecake-factory-cheesecake-14.jpeg';
const cheesecake15 = '../assets/Products/cheesecake-factory-cheesecake-15.jpeg';
const cheesecake16 = '../assets/Products/cheesecake-factory-cheesecake-16.jpeg';
const cheesecake17 = '../assets/Products/cheesecake-factory-cheesecake-17.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    ALL_PURPOSE_FLOUR,
    ALUMINUM_FOIL,
    COOKING_SPRAY,
    CORNSTARCH,
    CREAM_CHEESE,
    EGG,
    GRAHAM_CRACKER,
    LEMON,
    OVEN,
    PLASTIC_WRAP,
    REFRIGERATOR,
    ROASTING_PAN,
    SALT,
    SAUCEPAN,
    SOUR_CREAM,
    SPRINGFORM_PAN,
    STAND_MIXER,
    STRAWBERRY,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WATER,
    WHITE_SUGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'C.F. Cheesecake',
    name: 'Cheesecake Factory Cheesecake',
    img: cheesecake17,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 2, unit: TIME_UNITS.HOUR },
    waitTime: { amount: 5, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Cheesecake Factory Copycat', 
            link: 'https://www.delish.com/cooking/recipe-ideas/a37762621/cheesecake-factory-cheesecake-1ipe/',
            authors: ['Justin Sullivan'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...COOKING_SPRAY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.CRUST },
        { ...GRAHAM_CRACKER, amount: 14.4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'finely crushed', section: SECTIONS.CRUST },
        { ...WHITE_SUGAR, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CRUST },
        { ...UNSALTED_BUTTER, amount: 12, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: SECTIONS.CRUST },
        { ...CREAM_CHEESE, amount: 32, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: SECTIONS.FILLING },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...EGG, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SOUR_CREAM, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.FILLING },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...STRAWBERRY, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'halved', section: SECTIONS.TOPPINGS },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...WATER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.TOPPINGS },
        { ...WHITE_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LEMON, amount: 1, unit: '', additionalDetails: 'juiced', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
        STAND_MIXER,
        REFRIGERATOR,
    ],
    supplies: [
        SPRINGFORM_PAN,
        ROASTING_PAN,
        ALUMINUM_FOIL,
        SAUCEPAN,
        PLASTIC_WRAP,
    ],
    directions: [
        { step: `Grease cake pan with cooking spray.`, section: SECTIONS.CRUST, img: cheesecake1 },
        { step: `Cover the bottom of the cake pan with the aluminum foil on the outside (to prevent it from soaking in water).`, section: SECTIONS.CRUST },
        { step: `In the stand mixer bowl, combine graham cracker, sugar and butter until well incorporated.`, section: SECTIONS.CRUST, img: cheesecake2 },
        { step: `Press crust mixture into the pan's bottom and up the sides.`, section: SECTIONS.CRUST, img: cheesecake3 },
        { step: `Bake the crust for 12 minutes at 325ºF.`, section: SECTIONS.CRUST, img: cheesecake4 },

        { step: `In the stand mixer bowl, beat cream cheese and sugar at medium speed until smooth and fluffy (about 2 to 3 minutes).`, section: SECTIONS.FILLING, img: cheesecake5 },
        { step: `Add eggs one at a time and beat well.`, section: SECTIONS.FILLING },
        { step: `Add vanilla, sour cream, flour, and salt and continue to beat until all is combined.`, section: SECTIONS.FILLING, img: cheesecake6 },

        { step: `Preheat oven to 325ºF.`, section: SECTIONS.PREHEAT_OVEN },
        
        { step: `Pour filling into the crust.`, section: SECTIONS.BAKE, img: cheesecake7 },
        { step: `Place the cake pan in the roasting pan and fill the roasting pan with water (about halfway up the cake pan).`, section: SECTIONS.BAKE, img: cheesecake8 },
        { step: `Place the roasting pan carefully in the oven and bake until just slightly jiggly, or until the center registers 145ºF (about 1 hour 30 minutes)`, section: SECTIONS.BAKE },
        // { step: `Turn oven off, leave door open, and let cool for 1 hour.`, section: SECTIONS.BAKE, img: bath },
        { step: `Remove from the oven, transfer to a cooling rack and carefully remove the tin foil.`, section: SECTIONS.COOL, img: cheesecake9 },

        { step: `Move cheesecake into the fridge and chill for about 5 hours to overnight.`, section: SECTIONS.CHILL, img: cheesecake10 },

        { step: `In a small bowl, whisk cornstarch and water until combined.`, section: SECTIONS.TOPPINGS },
        { step: `In a saucepan, add strawberries, sugar, lemon juice, and cornstarch mixture.`, section: SECTIONS.TOPPINGS, img: cheesecake11 },
        { step: `Bring mixture to a simmer over medium heat.`, section: SECTIONS.TOPPINGS, img: cheesecake12 },
        { step: `Cook until the sauce thickens to a syrupy texture and strawberries are coated.`, section: SECTIONS.TOPPINGS, img: cheesecake13 },
        { step: `Transfer to bowl. Let cool and cover with plastic wrap.`, section: SECTIONS.TOPPINGS, img: cheesecake14 },
        { step: `Place in fridge to cool until ready to serve.`, section: SECTIONS.TOPPINGS, img: cheesecake15 },
        { step: `Enjoy this decadent, rich "Cheesecake Factory" imitation by topping each slice with the glazed strawberries and whipped cream.`, section: SECTIONS.SERVE, img: cheesecake16 },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};