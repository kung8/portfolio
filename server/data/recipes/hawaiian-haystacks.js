const hawaiian = '../assets/Products/hawaiian-haystacks-aerial.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');

module.exports = {
    cardName: 'Hawaiian Haystacks',
    name: 'Slow-Cooked Hawaiian Haystacks',
    img: hawaiian,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.SLOW_COOK],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '10 - 12 servings',
    prepTime: '10 m',
    cookTime: '4.5 h',
    separated: true,
    ingredients: [
        { name: 'large chicken breast', amount: '5 - 6', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'chicken broth', amount: '4 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'cream of chicken', amount: '2 - 10.5 oz can of', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'cream cheese', amount: '1/4 c', additionalDetails: 'cubed', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'pepper', amount: '', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'basil', amount: '', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'oregano', amount: '', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'rice', amount: '', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'green peppers', amount: '2', additionalDetails: 'diced', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'large onion', amount: '1/2', additionalDetails: 'diced', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'green onion', amount: 'bunch', additionalDetails: 'diced', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'roma tomato', amount: '2', additionalDetails: 'diced', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'pineapple tidbit', amount: '12 oz can', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'sliced almonds', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'shredded coconut', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'sour cream', amount: '8 oz', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'chow mein noodles', amount: '2 c', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'slow cooker' },
    ],
    supplies: [
        { name: 'slow cooker liner' },
        { name: 'rubber spatula' },
        { name: 'cutting board and knife' },
        { name: 'small bowls' },
        { name: 'measuring cups' },
        { name: 'measuring spoons' },
        { name: 'spoons' },
        { name: 'tongs' },
    ],
    directions: [
        { step: 'Line the slow cooker with the slow cooker liner. This will save you a lot of time when you need to clean up afterwards.', type: SECTIONS.MAIN },
        { step: 'Place the chicken in the slow cooker.', type: SECTIONS.MAIN },
        { step: 'Pour the chicken broth and cream of chicken over the chicken. Be sure to submerge the chicken.', type: SECTIONS.MAIN },
        { step: 'Add salt, pepper, oregano, and basil as desired.', type: SECTIONS.MAIN },
        { step: 'Cook the chicken on high for 4 hours.', type: SECTIONS.MAIN },
        { step: 'While the chicken cooks, you can prep the toppings storing them in small bowls until ready to serve.', type: SECTIONS.MAIN },
        { step: 'About 20 minutes before the chicken finishes, you can prep the rice.', type: SECTIONS.MAIN },
        { step: 'After the 4 hours, take out the chicken of the slow cooker using tongs and place on a cutting board. While removing the chicken be careful not to rip the liner. Shred the chicken or dice the chicken into 1/2 inch cubes.', type: SECTIONS.MAIN },
        { step: 'Before returning the chicken back into the slow cooker, place the cream cheese in the slow cooker.', type: SECTIONS.MAIN },
        { step: 'Carefully return the diced/shredded chicken into the slow cooker.', type: SECTIONS.MAIN },
        { step: 'Continue to cook for another 30 minutes on medium, so the cream cheese melts and stir every so often.', type: SECTIONS.MAIN },
        { step: 'Serve over rice and top with your favorite toppings--mine is Chow Mein Noodles.', type: SECTIONS.MAIN },
    ]
};