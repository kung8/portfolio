const meatball1 = '../assets/Products/swedish-meatball-1.jpeg';
const meatball2 = '../assets/Products/swedish-meatball-2.jpeg';
const meatball3 = '../assets/Products/swedish-meatball-3.jpeg';
const meatball4 = '../assets/Products/swedish-meatball-4.jpeg';
const meatball5 = '../assets/Products/swedish-meatball-5.jpeg';
const meatball6 = '../assets/Products/swedish-meatball-6.jpeg';
const meatball7 = '../assets/Products/swedish-meatball-7.jpeg';
const meatball8 = '../assets/Products/swedish-meatball-8.jpeg';
const meatball9 = '../assets/Products/swedish-meatball-9.jpeg';
const meatball10 = '../assets/Products/swedish-meatball-10.jpeg';
const meatball11 = '../assets/Products/swedish-meatball-11.jpeg';
const meatball13 = '../assets/Products/swedish-meatball-13.jpeg';
const meatball14 = '../assets/Products/swedish-meatball-14.jpeg';
const meatball15 = '../assets/Products/swedish-meatball-15.jpeg';
const meatball16 = '../assets/Products/swedish-meatball-16.jpeg';
const meatball17 = '../assets/Products/swedish-meatball-17.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { BREADCRUMBS, HEAVY_CREAM, UNSALTED_BUTTER, YELLOW_ONION, GROUND_BEEF, GROUND_PORK, EGGS, BROWN_SUGAR, SALT, BLACK_PEPPER, NUTMEG, ALLSPICE, GROUND_GINGER, CHICKEN_BROTH, ALL_PURPOSE_FLOUR, BEEF_BROTH, SOUR_CREAM } = require('./ingredients');

const PREP_OVEN = 'Prep Oven';
const BREADCRUMB_MIXTURE = 'Breadcrumb Mixture';
const SWEDISH_MEATBALLS = 'Swedish Meatballs';
const PAN_FRY_MEATBALLS = 'Pan Fry Meatballs';
const BAKING = 'Baking';
const GRAVY_SECTION = 'Gravy Section';

module.exports = {
    cardName: 'Swedish Meatballs',
    name: 'Swedish Meatballs (Kottbullar)',
    img: meatball17,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.MAIN_DISH],
    genre: [GENRES.SWEDISH],
    method: [METHODS.PAN_FRY, METHODS.BAKE],
    protein: [PROTEIN.BEEF, PROTEIN.PORK],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE, TYPES.SIDE_DISH],
    yields: '6 servings',
    prepTime: '25 m',
    cookTime: '1 h',
    websites: [
        { label: 'Swedish Meatballs', link: 'https://www.allrecipes.com/recipe/216564/swedish-meatballs-svenska-kottbullar/' }
    ],
    separated: true,
    ingredients: [
        { ...BREADCRUMBS, amount: '2/3 c', additionalDetails: '', section: BREADCRUMB_MIXTURE },
        { ...HEAVY_CREAM, amount: '1/2 c', additionalDetails: '', section: BREADCRUMB_MIXTURE },
        { ...UNSALTED_BUTTER, amount: '1 tsp', additionalDetails: '', section: SWEDISH_MEATBALLS },
        { ...YELLOW_ONION, amount: '1 small', additionalDetails: 'minced', section: SWEDISH_MEATBALLS },
        { ...GROUND_BEEF, amount: '2/3 lb', additionalDetails: '', section: SWEDISH_MEATBALLS },
        { ...GROUND_PORK, amount: '1/3 lb', additionalDetails: '', section: SWEDISH_MEATBALLS },
        { ...EGGS, amount: '1', additionalDetails: '', section: SWEDISH_MEATBALLS },
        { ...BROWN_SUGAR, amount: '1 Tbsp', additionalDetails: '', section: SWEDISH_MEATBALLS },
        { ...SALT, amount: '1 tsp', additionalDetails: '', section: SWEDISH_MEATBALLS },
        { ...BLACK_PEPPER, amount: '1/4 tsp', additionalDetails: '', section: SWEDISH_MEATBALLS },
        { ...NUTMEG, amount: '1/4 tsp', additionalDetails: '', section: SWEDISH_MEATBALLS },
        { ...ALLSPICE, amount: '1/4 tsp', additionalDetails: '', section: SWEDISH_MEATBALLS },
        { ...GROUND_GINGER, amount: '1/8 tsp', additionalDetails: '', section: SWEDISH_MEATBALLS },

        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: '', section: PAN_FRY_MEATBALLS },
        { ...CHICKEN_BROTH, amount: '1/4 c', additionalDetails: '', section: BAKING },
        { ...ALL_PURPOSE_FLOUR, amount: '3 Tbsp', additionalDetails: 'or as needed', section: '' },
        { ...BEEF_BROTH, amount: '2 c', additionalDetails: 'or as needed', section: '' },
        { ...SOUR_CREAM, amount: '8 oz', additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'small bowl' },
        { name: 'frying pan' },
        { name: 'mixing bowl' },
        { name: 'baking dish' },
        { name: 'aluminum foil' },
        { name: 'serving dish' },
        { name: 'saucepan' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: PREP_OVEN },
        { step: 'In a small bowl, combine bread crumbs and cream.', type: BREADCRUMB_MIXTURE, img: meatball1 },
        { step: 'Let sit for 10 minutes to absorb the cream.', type: BREADCRUMB_MIXTURE },
        { step: 'Over medium heat, melt butter in a pan.', type: SWEDISH_MEATBALLS },
        { step: 'Add onions and cook until light brown (about 10 minutes).', type: SWEDISH_MEATBALLS, img: meatball2 },
        { step: 'In the mixing bowl, add the remaining "Swedish Meatball" ingredients and combine.', type: SWEDISH_MEATBALLS, img: [meatball3, meatball4, meatball5, meatball6] },
        { step: 'Add onions to the mixing bowl.', type: SWEDISH_MEATBALLS, img: [meatball7, meatball8] },
        { step: 'Lightly stir the breadcrumb mixture into the meat mixture.', type: SWEDISH_MEATBALLS, img: [meatball9, meatball10] },
        { step: 'Form the meatballs into about 2 inch balls.', type: SWEDISH_MEATBALLS, img: meatball11 },
        { step: 'Over medium heat, melt butter in a pan.', type: PAN_FRY_MEATBALLS },
        { step: 'Add the meatballs to the pan.', type: PAN_FRY_MEATBALLS, img: meatball13 },
        { step: 'Cook while turning often until browned (about 5 minutes). The inside of the meatballs should still be pink.', type: PAN_FRY_MEATBALLS },
        { step: 'Transfer meatballs to a baking dish.', type: BAKING },
        { step: 'Add chicken broth and cover with aluminum foil.', type: BAKING, img: [meatball15, meatball14] },
        { step: 'Bake until meatballs are tender (about 40 minutes).', type: BAKING, img: meatball16 },
        { step: 'Transfer meatballs to a serving dish.', type: BAKING },
        { step: 'Pour drippings from the baking dish into a saucepan.', type: GRAVY_SECTION },
        { step: 'Over medium heat, whisk in flour.', type: GRAVY_SECTION },
        { step: 'Add beef broth and whisk. Add more beef broth until there is about 2 1/2 cups of gravy.', type: GRAVY_SECTION },
        { step: 'Let the gravy simmer while stirring constantly until it has thickened (about 5 minutes).', type: GRAVY_SECTION },
        { step: 'Right before serving, stir in sour cream, salt and pepper.', type: GRAVY_SECTION },
        { step: 'Serve the gravy sauce over the meatballs and enjoy!', type: SECTIONS.SERVE },
    ]
};