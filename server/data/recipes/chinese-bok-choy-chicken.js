const butter = '../assets/Products/chicken-ramen-butter.jpeg';
const cookingChicken = '../assets/Products/chicken-ramen-cooking-chicken.jpeg';
const rawChicken = '../assets/Products/chicken-ramen-raw-chicken.jpeg';

const chicken = '../assets/Products/bok-choy-chicken.jpeg';
const blanched = '../assets/Products/bok-choy-blanched.jpeg';
const chopped = '../assets/Products/bok-choy-chopped-chicken.jpeg';
// const colander = '../assets/Products/bok-choy-colander.jpeg';
// const cooked = '../assets/Products/bok-choy-cooked.jpeg';
const cut = '../assets/Products/bok-choy-cut.jpeg';
const plated = '../assets/Products/bok-choy-plated.jpeg';
const sauce = '../assets/Products/bok-choy-sauce.jpeg';
const zoomed = '../assets/Products/bok-choy-zoomed.jpeg';

const { CATEGORIES, GENRES, TYPES, PROTEIN, SECTIONS, METHODS } = require("./constants");

const CHICKEN = 'Chicken';

module.exports = {
    cardName: 'Bok Choy Chicken',
    name: 'Bok Choy Chicken',
    img: zoomed,
    available: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.BLANCH, METHODS.ROAST, METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.VEGETABLE],
    yields: '2 servings',
    prepTime: '5 m',
    cookTime: '40 m',
    separated: true,
    ingredients: [
        { name: 'chicken breast', amount: '2', additionalDetails: '', optional: false, section: CHICKEN },
        { name: 'unsalted butter', amount: '1 Tbsp', additionalDetails: '', optional: false, section: CHICKEN },
        { name: 'baby bok choy', amount: '1 lb', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'soy sauce', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'olive oil', amount: '', additionalDetails: 'for wok', optional: false, section: SECTIONS.MAIN },
        { name: 'sesame seeds', amount: '', additionalDetails: 'to taste', optional: true, section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'wok' },
        { name: 'oven-safe pot/pan' },
        { name: 'colander' },
    ],
    directions: [
        { step: 'Preheat the oven to 375ºF.', type: CHICKEN },
        { step: 'Generously season the chicken breast with salt and pepper.', type: CHICKEN, img: rawChicken },
        { step: 'Over medium heat, melt butter in an oven-safe pan or pot.', type: CHICKEN, img: butter },
        { step: 'Add the chicken and cook until each side is golden brown (about 4 to 6 minutes each side)', type: CHICKEN, img: cookingChicken },
        { step: 'Place the pot with chicken in the oven and roast until the chicken is cooked all the way through (about 15 to 25 minutes, depending on the chicken thickness and the oven).', type: CHICKEN },
        { step: 'Remove from the oven and transfer the chicken to a cutting board. Cut the chicken into slices and cover with tin-foil to keep warm.', type: CHICKEN },
        { step: 'Cut the ends of the baby bok choy so that each leaf is free and wash carefully to clean each leaf.', type: SECTIONS.MAIN, img: cut },
        { step: 'While the chicken is roasting in the oven for the last couple of minutes, boil a pot of water over medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Blanch your bok choy by placing it the boiling water for 3 to 4 minutes. This should only soften the vegetables.', type: SECTIONS.MAIN, img: blanched },
        { step: 'Once your chicken is out of the oven and cooled a little, slice up the chicken into 1/2 inch cubes.', type: SECTIONS.MAIN, img: chopped },
        { step: 'Over medium-high heat, add a little oil to the wok and get it ready to transfer the drained bok choy.', type: SECTIONS.MAIN },
        { step: 'Turn off the heat for the pot. Remove the bok choy from the water and add it to the wok.', type: SECTIONS.MAIN },
        { step: 'Add salt and pepper and let the bok choy wilt a little (about 2 minutes). Stir or toss to prevent burning or sticking and help cover the leaves with a little oil.', type: SECTIONS.MAIN },
        { step: 'Add the chopped up chicken and combine.', type: SECTIONS.MAIN, img: chicken },
        { step: 'Add soy sauce and stir for a minute. Turn off the heat for the wok.', type: SECTIONS.MAIN, img: sauce },
        { step: 'Serve this with some sesame seeds and rice.', type: SECTIONS.MAIN, img: plated },
    ]
};