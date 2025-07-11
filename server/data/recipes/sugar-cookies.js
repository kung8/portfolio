const dry1 = '../assets/Products/sugar-cookies-dry-ingredients-1.jpeg';
const batter1 = '../assets/Products/sugar-cookies-batter-1.jpeg';
const batter2 = '../assets/Products/sugar-cookies-batter-2.jpeg';
const batter3 = '../assets/Products/sugar-cookies-batter-3.jpeg';
const batter4 = '../assets/Products/sugar-cookies-batter-4.jpeg';
const batter5 = '../assets/Products/sugar-cookies-batter-5.jpeg';
const batter6 = '../assets/Products/sugar-cookies-batter-6.jpeg';
const dough1 = '../assets/Products/sugar-cookies-dough-1.jpeg';
const dough2 = '../assets/Products/sugar-cookies-dough-2.jpeg';
const dough3 = '../assets/Products/sugar-cookies-dough-3.jpeg';
const dough5 = '../assets/Products/sugar-cookies-dough-5.jpeg';
const dough6 = '../assets/Products/sugar-cookies-dough-6.jpeg';
const dough7 = '../assets/Products/sugar-cookies-dough-7.jpeg';
const dough8 = '../assets/Products/sugar-cookies-dough-8.jpeg';
const dough9 = '../assets/Products/sugar-cookies-dough-9.jpeg';
const dough10 = '../assets/Products/sugar-cookies-dough-10.jpeg';
const cookies4 = '../assets/Products/sugar-cookies-4.jpeg';
const cookies5 = '../assets/Products/sugar-cookies-5.jpeg';
const cookies6 = '../assets/Products/sugar-cookies-6.jpeg';
const icing1 = '../assets/Products/sugar-cookies-icing-1.jpeg';
const icing2 = '../assets/Products/sugar-cookies-icing-2.jpeg';
const icing3 = '../assets/Products/sugar-cookies-icing-3.jpeg';
const icing4 = '../assets/Products/sugar-cookies-icing-4.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { UNSALTED_BUTTER, WHITE_SUGAR, EGG, VANILLA_EXTRACT, ALL_PURPOSE_FLOUR, SALT, BAKING_SODA, ALMOND_EXTRACT, SPRINKLES, CONFECTIONERS_SUGAR, MERINGUE_POWDER, ROOM_TEMPERATURE_WATER, CRYSTAL_SUGAR } = require('./ingredients');

const DRY_INGREDIENTS = 'Dry Ingredients';
const WET_BATTER = 'Wet Batter';
const SUGAR_COOKIES = 'Sugar Cookies';
const ROYAL_ICING = 'Royal Icing';

module.exports = {
    cardName: 'Sugar Cookies',
    name: 'Sugar Cookies',
    img: cookies6,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.COOKIE],
    yields: { amount: 3, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 150, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Sugar Cookies', link: 'https://sallysbakingaddiction.com/best-sugar-cookies/' },
        { label: 'Royal Icing', link: 'https://sallysbakingaddiction.com/royal-icing/' },
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
        { step: 'In medium bowl, combine the "Dry Ingredients" together.', section: DRY_INGREDIENTS, img: dry1 },
        { step: 'In a stand mixer bowl, cream butter and sugar (about 3 minutes on high).', section: WET_BATTER, img: [batter1, batter2] },
        { step: 'Add egg, vanilla, and almond extract (about 1 minute on high).', section: WET_BATTER, img: batter3 },
        { step: 'Scrape the sides down and continue beating if needed.', section: WET_BATTER },
        { step: 'Add the dry ingredients to the stand mixer.', section: WET_BATTER, img: batter4 },
        { step: 'Beat on low. The dough should be soft. But if it is too soft add 1 Tbsp of flour.', section: WET_BATTER, img: [batter5, batter6] },
        { step: 'Lightly flour two silicon baking mats.', section: SUGAR_COOKIES, img: dough1 },
        { step: 'Divide the dough in half and place each on the mats.', section: SUGAR_COOKIES, img: dough2 },
        { step: 'With a floured rolling pin, roll out dough until it is about 1/4 inch thick. Add more flour if it is still sticky.', section: SUGAR_COOKIES, img: [dough3, dough5] },
        { step: 'Sprinkle flour on top of each of the rolled-out dough.', section: SUGAR_COOKIES, img: dough6 },
        { step: 'Place parchment paper on top of one. Stack the second mat on top.', section: SUGAR_COOKIES, img: [dough7, dough8] },
        { step: 'Cover with plastic wrap. Refrigerate for 1 to 2 hours (up to 2 days).', section: SUGAR_COOKIES, img: [dough9, dough10] },
        { step: 'Preheat the oven to 350ºF when ready to bake.', section: SUGAR_COOKIES },
        { step: 'Cut dough into your favorite shapes using cookie cutters.', section: SUGAR_COOKIES, img: cookies4 },
        { step: 'Re-roll the scraps and repeat until all the dough is used.', section: SUGAR_COOKIES },
        { step: 'Place the cookies on silicon baking sheet an inch apart. They do not spread very much but they will rise slightly.', section: SUGAR_COOKIES },
        { step: 'Bake until the edges are lightly browned (about 11 to 12 minutes).', section: SUGAR_COOKIES },
        { step: 'Let cookies cool for 5 minutes before transferring to a cooling rack.', section: SUGAR_COOKIES, img: cookies5 },
        { step: 'Let the cookies cool completely before decorating.', section: SUGAR_COOKIES },
        { step: 'In a stand mixer, combine the icing ingredients.', section: ROYAL_ICING, img: [icing1, icing2] },
        { step: 'Beat on high until mixed (about 2 minutes).', section: ROYAL_ICING, img: icing3 },
        { step: 'When lifting the whisk, the icing should drip and smooth within 5 to 10 seconds. The longer you whisk the more air is added and the thicker the icing becomes. Normally the icing will dry in about 2 hours at room temperature. If the icing is too thin it will take longer to dry. If the icing is too thick it can also take longer to dry because of the layers. For intricate designs where you are layering the icing, you can place the decorated cookies in the refrigerator to speed up the drying process.', section: ROYAL_ICING, img: icing4 },
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