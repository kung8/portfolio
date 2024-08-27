const blended = '../assets/Products/aji-de-gallina-blended.jpeg';
const blender = '../assets/Products/aji-de-gallina-blender.jpeg';
const boiling = '../assets/Products/aji-de-gallina-boiling-chicken.jpeg';
const breadInBlender = '../assets/Products/aji-de-gallina-bread-in-blender.jpeg';
const bread = '../assets/Products/aji-de-gallina-bread.jpeg';
const reAdded = '../assets/Products/aji-de-gallina-chicken-re-added.jpeg';
const cooked = '../assets/Products/aji-de-gallina-cooked.jpeg';
const zoomed = '../assets/Products/aji-de-gallina-cooked-zoomed.jpeg';
const garlic = '../assets/Products/aji-de-gallina-garlic.jpeg';
const onion = '../assets/Products/aji-de-gallina-onion.jpeg';
const plated = '../assets/Products/aji-de-gallina-plated.jpeg';
const rawOnions = '../assets/Products/aji-de-gallina-raw-onions.jpeg';
const shredded = '../assets/Products/aji-de-gallina-shredded-chicken.jpeg';
const aji = '../assets/Products/aji-de-gallina.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');
const {
    CHICKEN_BREAST,
    LARGE_YELLOW_ONION,
    VEGETABLE_OIL,
    GARLIC,
    YELLOW_BELL_PEPPERS,
    BREAD,
    MILK,
    SALT,
    BLACK_PEPPER,
    OREGANO,    
    NUTMEG,
    JASMINE_RICE,
} = require('./ingredients');

module.exports = {
    cardName: 'Aji de Gallina',
    name: 'Peruvian Aji de Gallina',
    recipeCredit: 'Gaby Ward',
    img: cooked,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.LATIN, GENRES.PERUVIAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '3 - 4 servings',
    prepTime: '5 m',
    cookTime: '25 - 40 m',
    websites: [
        'https://www.carolinescooking.com/aji-de-gallina-peruvian-chicken-stew/'
    ],
    ingredients: [
        { ...CHICKEN_BREAST, amount: '2', additionalDetails: '', optional: false },
        { ...LARGE_YELLOW_ONION, amount: '1', additionalDetails: 'diced', optional: false },
        { ...VEGETABLE_OIL, amount: '1 Tbsp', additionalDetails: '', optional: false },
        { ...GARLIC, amount: '1 tsp', additionalDetails: 'minced', optional: false },
        { ...YELLOW_BELL_PEPPERS, amount: '1 1/2', additionalDetails: '', optional: false },
        { ...BREAD, amount: '4', additionalDetails: '', optional: false },
        { ...MILK, amount: '2 c', additionalDetails: '', optional: false },
        { ...SALT, amount: '1 tsp', additionalDetails: 'to taste', optional: false },
        { ...BLACK_PEPPER, amount: '1/4 tsp', additionalDetails: 'to taste', optional: false },
        { ...OREGANO, amount: '1/4 tsp', additionalDetails: 'to taste', optional: false },
        { ...NUTMEG, amount: '1 pinch of', additionalDetails: '', optional: true },
        { ...JASMINE_RICE, amount: '', additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'blender' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pan' },
        { name: 'large pot' },
        { name: 'measuring cups' },
        { name: 'measuring spoons' },
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'mixing bowl' },
        { name: 'small bowl' },
        { name: 'spoon' },
    ],
    directions: [
        { step: 'Cut the onion and measure out the seasonings. You can keep them in the same bowl.', type: SECTIONS.MAIN, img: rawOnions },
        { step: 'Boil the chicken breasts in a pot of water.', type: SECTIONS.MAIN, img: boiling },
        { step: 'Once the chicken is cooked, shred the chicken on a cutting board. Place the shredded chicken in a large mixing bowl. Keep some of the chicken broth in the pot.', type: SECTIONS.MAIN, img: shredded },
        { step: 'Blend together the bread, milk, and the yellow peppers in a blender.', type: SECTIONS.MAIN, img: [bread, blender, breadInBlender, blended] },
        { step: 'In a hot pan with oil on medium high heat, brown the garlic.', type: SECTIONS.MAIN, img: garlic },
        { step: 'Add the onion, oregano, salt, pepper, and nutmeg to the pan and cook until the onions are browned.', type: SECTIONS.MAIN, img: onion },
        { step: 'Add the blended mix and chicken to the pan.', type: SECTIONS.MAIN, img: reAdded },
        { step: 'Continue to mix this mixture and let cook a few more minutes until well blended. At this point if you want to thin the sauce you can add a little chicken broth or milk, depending on your preference.', type: SECTIONS.MAIN, img: zoomed },
        { step: 'Serve with rice and enjoy the taste of my favorite Peruvian dish!', type: SECTIONS.MAIN, img: [plated, aji] },
    ]
};