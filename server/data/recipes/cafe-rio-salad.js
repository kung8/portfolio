const cafeRioSalad = '../assets/Products/cafe-rio-salad.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS, PROTEIN, SECTIONS } = require("./constants");

module.exports = {
    cardName: 'Cafe Rio Salad',
    name: 'Cafe Rio Salad',
    img: cafeRioSalad,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.MEXICAN],
    method: [METHODS.MARINADE, METHODS.GRILL],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.SALAD, TYPES.PROTEIN],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '15 m',
    separated: true,
    ingredients: [
        { name: 'skirt steak', amount: '4 8-oz', additionalDetails: 'strips', section: SECTIONS.MEAT },
        { name: 'balsamic vinegar', amount: '1/3 c', additionalDetails: '', section: SECTIONS.MEAT },
        { name: 'soy sauce', amount: '1/3 c', additionalDetails: '', section: SECTIONS.MEAT },
        { name: 'oil', amount: '1/4 c', additionalDetails: '', section: SECTIONS.MEAT },
        { name: 'worcestershire sauce', amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MEAT },
        { name: 'honey', amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MEAT },
        { name: 'italian seasoning', amount: '1 tsp', additionalDetails: '', section: SECTIONS.MEAT },
        { name: 'garlic powder', amount: '1 tsp', additionalDetails: '', section: SECTIONS.MEAT },
        { name: 'dried mustard', amount: '1 tsp', additionalDetails: '', section: SECTIONS.MEAT },
        { name: 'parsley', amount: '', additionalDetails: 'to garnish', section: SECTIONS.MEAT },
        { name: 'tortillas', amount: '8', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'chipotle or southwest salad kit', amount: '32 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'rice', amount: '2 c', additionalDetails: 'cooked', section: SECTIONS.MAIN },
        { name: 'cheese', amount: '8 oz', additionalDetails: 'shredded', section: SECTIONS.MAIN },
        { name: 'black bean', amount: '15 oz can of', additionalDetails: 'drained', section: SECTIONS.MAIN },
        { name: 'sour cream', amount: '8 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'avocado', amount: '1', additionalDetails: 'sliced', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'grill (or griddle)' },
        { name: 'saucepan' },
    ],
    supplies: [
        { name: 'ziploc bag' },
        { name: 'tongs' },
        { name: 'saucepan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'In a ziploc bag, mix together all the marinade ingredients except the steak and parsley.', type: SECTIONS.MEAT },
        { step: 'Add the steak to the ziploc bag.', type: SECTIONS.MEAT },
        { step: 'Marinate for 20 minutes.', type: SECTIONS.MEAT },
        { step: 'Preheat a grill (or griddle).', type: SECTIONS.MEAT },
        { step: 'Add steak to the grill using tongs and cook until the preferred doneness.', type: SECTIONS.MEAT },
        { step: 'Top the steak with parsley.', type: SECTIONS.MEAT },
        { step: 'Warm the beans in a saucepan.', type: SECTIONS.MAIN },
        { step: 'Warm the tortillas on the grill.', type: SECTIONS.MAIN },
        { step: 'Assemble the salad bowls with the warmed tortilla, cooked rice, warmed beans, cooked steak, salad kit, and all the other desired toppings.', type: SECTIONS.MAIN },
    ],
    notes: [
        'I sometimes forget items in fridge or pantry when I am ready to make the salad. I recommend making a list of items beforehand, so you can reference at the time of assembly and not miss your favorite ingredients.'
    ]
};