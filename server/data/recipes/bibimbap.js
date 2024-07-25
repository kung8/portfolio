const bowl = '../assets/Products/bibimbap-bowl.jpeg';
const carrots = '../assets/Products/bibimbap-carrot-matchsticks.jpeg';
const cookedMatchsticks = '../assets/Products/bibimbap-cooked-carrot-matchsticks.jpeg';
const cookingChicken = '../assets/Products/bibimbap-cooking-chicken.jpeg';
const eggs = '../assets/Products/bibimbap-eggs.jpeg';
const marinating = '../assets/Products/bibimbap-marinating-chicken.jpeg';
// const spinach = '../assets/Products/bibimbap-spinach.jpeg';
const sauce = '../assets/Products/bibimbap-with-sauce.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

const BEEF = 'Beef';
const VEGETABLES = 'Vegetables';
const EGGS = 'Eggs';
const BIBIMBAP_SAUCE = 'Bibimbap Sauce';

module.exports = {
    cardName: 'Bibimbap',
    name: 'Korean Bibimbap',
    img: bowl,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.KOREAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    protein: [PROTEIN.EGG, PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '20 m',
    websites: [
        "https://mykoreankitchen.com/bibimbap-korean-mixed-rice-with-meat-and-assorted-vegetables/"
    ],
    separated: true,
    ingredients: [
        { name: 'ground beef', amount: '1 lb', additionalDetails: '', section: BEEF },
        { name: 'soy sauce', amount: '1 Tbsp', additionalDetails: '', section: BEEF },
        { name: 'sesame oil', amount: '1 Tbsp', additionalDetails: '', section: BEEF },
        { name: 'brown sugar', amount: '1 tsp', additionalDetails: '', section: BEEF },
        { name: 'garlic', amount: '1/4 tsp', additionalDetails: 'minced', section: BEEF },
        { name: 'carrot', amount: '4 oz', additionalDetails: 'matchsticks', section: VEGETABLES },
        { name: 'spinach', amount: '8 oz', additionalDetails: '', section: VEGETABLES },
        { name: 'corn', amount: '', additionalDetails: '', section: VEGETABLES },
        { name: 'eggs', amount: '3', additionalDetails: '', section: EGGS },
        { name: 'gochujang sauce', amount: '2 Tbsp', additionalDetails: '', section: BIBIMBAP_SAUCE },
        { name: 'sesame oil', amount: '1 Tbsp', additionalDetails: '', section: BIBIMBAP_SAUCE },
        { name: 'sugar', amount: '1 Tbsp', additionalDetails: '', section: BIBIMBAP_SAUCE },
        { name: 'water', amount: '1 Tbsp', additionalDetails: '', section: BIBIMBAP_SAUCE },
        { name: 'sesame seeds', amount: '1 Tbsp', additionalDetails: '', section: BIBIMBAP_SAUCE },
        { name: 'vinegar', amount: '1 tsp', additionalDetails: '', section: BIBIMBAP_SAUCE },
        { name: 'garlic', amount: '1 tsp', additionalDetails: 'minced', section: BIBIMBAP_SAUCE },
        { name: 'rice', amount: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'pan' },
        { name: 'medium bowl' },
        { name: 'serving bowl' },
    ],
    directions: [
        { step: 'Mix the marinade ingredients.', type: BEEF },
        { step: 'Marinate the beef for at least 30 minutes. You can replace this with pork, chicken, or any other protein alternative.', type: BEEF, img: marinating },
        { step: 'Over medium-high heat, cook the beef until browned then remove.', type: BEEF, img: cookingChicken },
        { step: 'To prepare the vegetable toppings, boil each of the vegetables separately until they soften/wilt.', type: VEGETABLES, img: cookedMatchsticks },
        { step: 'Set the vegetables aside until ready to top.', type: VEGETABLES, img: carrots },
        { step: 'Over medium-high heat, add oil.', type: EGGS },
        { step: 'Fry the eggs over-easy, or as preferred.', type: EGGS, img: eggs },
        { step: 'Mix the sauce ingredients together in a medium bowl.', type: BIBIMBAP_SAUCE },
        { step: 'In a serving bowl, scoop some rice and top the rice with the beef, veggies, and eggs.', type: SECTIONS.SERVE, img: bowl },
        { step: 'Top with the sauce.', type: SECTIONS.SERVE, img: sauce },
        { step: 'Mix the toppings in the bowl when you ready to eat.', type: SECTIONS.SERVE },
    ]
};