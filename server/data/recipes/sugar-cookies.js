const cookie1 = '../assets/Products/sugar-cookies-1.jpeg';
const cookie2 = '../assets/Products/sugar-cookies-2.jpeg';
const cookie3 = '../assets/Products/sugar-cookies-3.jpeg';
const cookie4 = '../assets/Products/sugar-cookies-4.jpeg';
const cookie5 = '../assets/Products/sugar-cookies-5.jpeg';
const cookie6 = '../assets/Products/sugar-cookies-6.jpeg';
const cookie7 = '../assets/Products/sugar-cookies-7.jpeg';
const cookie8 = '../assets/Products/sugar-cookies-8.jpeg';
const cookie9 = '../assets/Products/sugar-cookies-9.jpeg';
const cookie10 = '../assets/Products/sugar-cookies-10.jpeg';
const cookie11 = '../assets/Products/sugar-cookies-11.jpeg';
const cookie12 = '../assets/Products/sugar-cookies-12.jpeg';
const cookie13 = '../assets/Products/sugar-cookies-13.jpeg';
const cookie14 = '../assets/Products/sugar-cookies-14.jpeg';
const cookie15 = '../assets/Products/sugar-cookies-15.jpeg';
const cookie16 = '../assets/Products/sugar-cookies-16.jpeg';
const cookie17 = '../assets/Products/sugar-cookies-17.jpeg';
const cookie18 = '../assets/Products/sugar-cookies-18.jpeg';
const cookie19 = '../assets/Products/sugar-cookies-19.jpeg';
const cookie20 = '../assets/Products/sugar-cookies-20.jpeg';
const cookie21 = '../assets/Products/sugar-cookies-21.jpeg';
const cookie22 = '../assets/Products/sugar-cookies-22.jpeg';
const cookie23 = '../assets/Products/sugar-cookies-23.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, ALMOND_EXTRACT, BAKING_SODA, CONFECTIONERS_SUGAR, CRYSTAL_SUGAR, EGG, MERINGUE_POWDER, ROOM_TEMPERATURE_WATER, SALT, SPRINKLES, UNSALTED_BUTTER, VANILLA_EXTRACT, WHITE_SUGAR } = require('./ingredients');

const DRY_INGREDIENTS = 'Dry Ingredients';
const WET_BATTER = 'Wet Batter';
const SUGAR_COOKIES = 'Sugar Cookies';
const ROYAL_ICING = 'Royal Icing';

module.exports = {
    cardName: 'Sugar Cookies',
    name: 'Sugar Cookies',
    img: cookie23,
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.COOKIE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 3, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 150, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Sugar Cookies', 
            link: 'https://sallysbakingaddiction.com/best-sugar-cookies/',
            authors: ['Sally McKenney'],
            finder: 'Kevin Ung', 
        },
        { 
            label: 'Royal Icing', 
            link: 'https://sallysbakingaddiction.com/royal-icing/',
            authors: ['Sally McKenney'],
            finder: 'Kevin Ung', 
        },
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...BAKING_SODA, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...UNSALTED_BUTTER, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_BATTER },
        { ...WHITE_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_BATTER },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: WET_BATTER },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: WET_BATTER },
        { ...ALMOND_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: WET_BATTER },
        { ...CONFECTIONERS_SUGAR, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: ROYAL_ICING },
        { ...MERINGUE_POWDER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ROYAL_ICING },
        { ...ROOM_TEMPERATURE_WATER, amount: 10, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ROYAL_ICING },
        { ...SPRINKLES, amount: '', unit: '', additionalDetails: '', section: SECTIONS.DECORATING },
        { ...CRYSTAL_SUGAR, amount: '', unit: '', additionalDetails: '', section: SECTIONS.DECORATING },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'stand mixer' },
        { name: 'medium bowl' },
        { name: 'silicon baking mats' },
        { name: 'baking sheets' },
        { name: 'rolling pin' },
        { name: 'cookie cutters' },
        { name: 'knife' },
        { name: 'cooling rack' },
    ],
    directions: [
        { step: 'In medium bowl, combine the "Dry Ingredients" together.', section: DRY_INGREDIENTS, img: cookie1 },
        { step: 'In a stand mixer bowl, cream butter and sugar (about 3 minutes on high).', section: WET_BATTER, img: [cookie2, cookie3] },
        { step: 'Add egg, vanilla, and almond extract (about 1 minute on high).', section: WET_BATTER, img: cookie4 },
        { step: 'Scrape the sides down and continue beating if needed.', section: WET_BATTER },
        { step: 'Add the dry ingredients to the stand mixer.', section: WET_BATTER, img: cookie5 },
        { step: 'Beat on low. The dough should be soft. But if it is too soft add 1 Tbsp of flour.', section: WET_BATTER, img: [cookie6, cookie7] },
        { step: 'Lightly flour two silicon baking mats.', section: SUGAR_COOKIES, img: cookie8 },
        { step: 'Divide the dough in half and place each on the mats.', section: SUGAR_COOKIES, img: cookie9 },
        { step: 'With a floured rolling pin, roll out dough until it is about 1/4 inch thick. Add more flour if it is still sticky.', section: SUGAR_COOKIES, img: [cookie10, cookie11] },
        { step: 'Sprinkle flour on top of each of the rolled-out dough.', section: SUGAR_COOKIES, img: cookie12 },
        { step: 'Place parchment paper on top of one. Stack the second mat on top.', section: SUGAR_COOKIES, img: [cookie13, cookie14] },
        { step: 'Cover with plastic wrap. Refrigerate for 1 to 2 hours (up to 2 days).', section: SUGAR_COOKIES, img: [cookie15, cookie16] },
        { step: 'Preheat the oven to 350ºF when ready to bake.', section: SUGAR_COOKIES },
        { step: 'Cut dough into your favorite shapes using cookie cutters.', section: SUGAR_COOKIES, img: cookie17 },
        { step: 'Re-roll the scraps and repeat until all the dough is used.', section: SUGAR_COOKIES },
        { step: 'Place the cookies on silicon baking sheet an inch apart. They do not spread very much but they will rise slightly.', section: SUGAR_COOKIES },
        { step: 'Bake until the edges are lightly browned (about 11 to 12 minutes).', section: SUGAR_COOKIES },
        { step: 'Let cookies cool for 5 minutes before transferring to a cooling rack.', section: SUGAR_COOKIES, img: cookie18 },
        { step: 'Let the cookies cool completely before decorating.', section: SUGAR_COOKIES },
        { step: 'In a stand mixer, combine the icing ingredients.', section: ROYAL_ICING, img: [cookie19, cookie20] },
        { step: 'Beat on high until mixed (about 2 minutes).', section: ROYAL_ICING, img: cookie21 },
        { step: 'When lifting the whisk, the icing should drip and smooth within 5 to 10 seconds. The longer you whisk the more air is added and the thicker the icing becomes. Normally the icing will dry in about 2 hours at room temperature. If the icing is too thin it will take longer to dry. If the icing is too thick it can also take longer to dry because of the layers. For intricate designs where you are layering the icing, you can place the decorated cookies in the refrigerator to speed up the drying process.', section: ROYAL_ICING, img: cookie22 },
        { step: 'Use a knife to spread some icing on top of the cookies.', section: SECTIONS.DECORATING },
        { step: 'Add sprinkles and/or crystal sugars.', section: SECTIONS.DECORATING },
        { step: 'Let the decorated cookies cool for 2 hours.', section: SECTIONS.DECORATING },
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};