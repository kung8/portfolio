const satay = '../assets/Products/malaysian-satay.jpeg';
const { CATEGORIES, GENRES, SECTIONS, METHODS, PROTEIN } = require('./constants');

module.exports = {
    cardName: 'Malaysian Satay',
    name: 'Malaysian Satay',
    img: satay,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.ASIAN, GENRES.MALAYSIAN],
    method: [METHODS.MARINADE, METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    yields: '6 servings',
    prepTime: '12 m',
    cookTime: '25 m',
    separated: true,
    websites: [
        'https://rasamalaysia.com/recipe-chicken-satay/'
    ],
    ingredients: [
        { name: 'chicken thigh', amount: '2 lb', additionalDetails: 'chunks', optional: false, section: SECTIONS.MAIN },
        { name: 'sugar', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'salt', amount: '1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'lemongrass', amount: '2 stalks', additionalDetails: 'diced', optional: false, section: SECTIONS.MARINADE },
        { name: 'garlic', amount: '2 cloves', additionalDetails: 'diced', optional: false, section: SECTIONS.MARINADE },
        { name: 'small onion', amount: '6', additionalDetails: 'diced', optional: false, section: SECTIONS.MARINADE },
        { name: 'turmeric powder', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'chili powder', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'coriander powder', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'cooking oil', amount: '3 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'cucumber', amount: '1', additionalDetails: 'sliced', optional: false, section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'blender' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'ziploc bag' },
        { name: 'bamboo skewer' },
        { name: 'baking sheet' },
    ],
    directions: [
        { step: 'Cut the chicken into 1-inch pieces and place in a ziploc bag.', type: SECTIONS.MARINADE },
        { step: 'Combine the marinade ingredients in a blender. Add some water as needed.', type: SECTIONS.MARINADE },
        { step: 'Add the marinade ingredients into the ziploc bag.', type: SECTIONS.MARINADE },
        { step: 'Marinate for at least 6 hours in the fridge, or overnight.', type: SECTIONS.MARINADE },
        { step: 'Preheat the oven to 450°F.', type: SECTIONS.MAIN },
        { step: 'Thread 5 to 6 chicken pieces on the skewer, leaving gaps between chicken.', type: SECTIONS.MAIN },
        { step: 'Bake for 15 to 25 minutes (cooking time will vary depending on the size of meat).', type: SECTIONS.MAIN },
        { step: 'Serve with cucumbers.', type: SECTIONS.SERVE },
    ], 
    notes: [
        'lemongrass can be found in the frozen section of Asian grocery stores',
        'lemongrass adds a fresh, sweet, lemony aroma.',
        'shallows add sweetness.',
        'turmeric powder adds a nice yellow color to the chicken.',
        'coriander powder\'s citrusy and peppery flavor complements the lemongrass',
        'chili powder adds a little heat to the chicken.',
        'salt and sugar enhances the other flavors.',
        'garlic adds a savory flavor.'
    ]
};