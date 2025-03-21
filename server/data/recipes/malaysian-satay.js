const satay = '../assets/Products/malaysian-satay.jpeg';
const { CATEGORIES, GENRES, SECTIONS, METHODS, PROTEIN, UNITS } = require('./constants');
const {
    CHICKEN_THIGH,
    WHITE_SUGAR,
    SALT,
    LEMONGRASS,
    GARLIC,
    YELLOW_ONION,
    TURMERIC,
    CHILI_POWDER,
    CORIANDER,
    VEGETABLE_OIL,
    CUCUMBER,
} = require('./ingredients');

module.exports = {
    cardName: 'Malaysian Satay',
    name: 'Malaysian Satay',
    img: satay,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.MALAYSIAN, GENRES.ASIAN],
    method: [METHODS.MARINADE, METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    yields: '6 servings',
    prepTime: '12 m',
    cookTime: '25 m',
    separated: true,
    websites: [
        { label: 'Chicken Satay', link: 'https://rasamalaysia.com/recipe-chicken-satay/' }
    ],
    ingredients: [
        { ...CHICKEN_THIGH, amount: 2, unit: UNITS.POUND, additionalDetails: 'chunks', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SALT, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LEMONGRASS, amount: 2, unit: UNITS.STALK, additionalDetails: 'diced', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 2, unit: UNITS.CLOVE, additionalDetails: 'diced', section: SECTIONS.MARINADE },
        { ...YELLOW_ONION, amount: 6, unit: UNITS.SMALL, additionalDetails: 'diced', section: SECTIONS.MARINADE },
        { ...TURMERIC, amount: 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CHILI_POWDER, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CORIANDER, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...VEGETABLE_OIL, amount: 3, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CUCUMBER, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.SERVE },
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
        { note: 'lemongrass can be found in the frozen section of Asian grocery stores' },
        { note: 'lemongrass adds a fresh, sweet, lemony aroma.' },
        { note: 'shallows add sweetness.' },
        { note: 'turmeric powder adds a nice yellow color to the chicken.' },
        { note: 'coriander powder\'s citrusy and peppery flavor complements the lemongrass' },
        { note: 'chili powder adds a little heat to the chicken.' },
        { note: 'salt and sugar enhances the other flavors.' },
        { note: 'garlic adds a savory flavor.' },
    ]
};