const cilantroAvocadoDressing = '../assets/Products/cafe-rio-bowl-bowled-with-cilantro-avocado-dressing.jpeg';
const southwestDressing = '../assets/Products/cafe-rio-bowl-bowled-with-southwest-dressing.jpeg';
const bowled = '../assets/Products/cafe-rio-bowl-bowled.jpeg';
const cookedBeef = '../assets/Products/cafe-rio-bowl-cooked-beef.jpeg';
const cookedFajita = '../assets/Products/cafe-rio-bowl-cooked-fajitas.jpeg';
const cookingBeef = '../assets/Products/cafe-rio-bowl-cooking-beef.jpeg';
const fajitas = '../assets/Products/cafe-rio-bowl-fajitas.jpeg';
const grilled = '../assets/Products/cafe-rio-bowl-grilled-beef.jpeg';
const marinade = '../assets/Products/cafe-rio-bowl-marinade.jpeg';
const marinatedBeef = '../assets/Products/cafe-rio-bowl-marinated-beef.jpeg';
const tortilla = '../assets/Products/cafe-rio-bowl-tortilla-in-bowl.jpeg';
const warmingTortilla = '../assets/Products/cafe-rio-bowl-warming-tortilla.jpeg';
const blended = '../assets/Products/cafe-rio-bowl-cilantro-ranch-dressing-blended.jpeg';
const dressing = '../assets/Products/cafe-rio-bowl-cilantro-ranch-dressing-in-bowl.jpeg';
const minced = '../assets/Products/cafe-rio-bowl-cilantro-ranch-dressing-minced-veggies.jpeg';
const pre = '../assets/Products/cafe-rio-bowl-cilantro-ranch-dressing-pre-blended-ingredients.jpeg';
const veggies = '../assets/Products/cafe-rio-bowl-cilantro-ranch-dressing-veggies-in-blender.jpeg';
const cilantroRanchDressing = '../assets/Products/cafe-rio-bowl-bowled-with-cilantro-ranch-dressing.jpeg';
const cilantroRanchDressingZoomed = '../assets/Products/cafe-rio-bowl-bowled-with-cilantro-ranch-dressing-zoomed.jpeg';

const { CATEGORIES, GENRES, TYPES, METHODS, PROTEIN, SECTIONS } = require("./constants");
const {
    AVOCADO,
    BALSAMIC_VINEGAR,
    BLACK_BEANS,
    CHEDDAR_CHEESE,
    CHIPOTLE_SALAD_KITS,
    GARLIC_POWDER,
    GROUND_MUSTARD,
    HONEY,
    ITALIAN_SEASONING,
    BROWN_RICE,
    LIGHT_SOY_SAUCE,
    PARSLEY,
    SKIRT_STEAK,
    SOUR_CREAM,
    TORTILLA,
    VEGETABLE_OIL,
    WORCESTERSHIRE_SAUCE,
    RANCH_DIP_DRESSING,
    MAYONNAISE,
    CILANTRO,
    GARLIC,
    JALAPENO_PEPPERS,
    MILK,
    ROMA_TOMATO,
} = require('./ingredients');

const CILANTRO_RANCH_DRESSING = 'Cilantro Ranch Dressing';

module.exports = {
    cardName: 'Cafe Rio Bowl',
    name: 'Cafe Rio Bowl',
    img: cilantroRanchDressingZoomed,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN, GENRES.AMERICAN],
    method: [METHODS.MARINADE, METHODS.GRILL],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.SALAD, TYPES.PROTEIN],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '15 m',
    separated: true,
    websites: [
        { label: 'Cafe Rio Cilantro Ranch Dressing', link: "https://lilluna.com/cafe-rio-cilantro-ranch-dressing/" }
    ],
    ingredients: [
        { ...SKIRT_STEAK, amount: '4 8-oz', additionalDetails: 'strips', section: SECTIONS.MEAT },
        { ...BALSAMIC_VINEGAR, amount: '1/3 c', additionalDetails: '', section: SECTIONS.MEAT },
        { ...LIGHT_SOY_SAUCE, amount: '1/3 c', additionalDetails: '', section: SECTIONS.MEAT },
        { ...VEGETABLE_OIL, amount: '1/4 c', additionalDetails: '', section: SECTIONS.MEAT },
        { ...WORCESTERSHIRE_SAUCE, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MEAT },
        { ...HONEY, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MEAT },
        { ...ITALIAN_SEASONING, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MEAT },
        { ...GARLIC_POWDER, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MEAT },
        { ...GROUND_MUSTARD, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MEAT },
        { ...PARSLEY, amount: '', additionalDetails: 'to garnish', section: SECTIONS.MEAT },

        { ...RANCH_DIP_DRESSING, amount: '1 packet', additionalDetails: '', section: CILANTRO_RANCH_DRESSING },
        { ...MAYONNAISE, amount: '1 c', additionalDetails: '', section: CILANTRO_RANCH_DRESSING },
        { ...SOUR_CREAM, amount: '1 c', additionalDetails: '', section: CILANTRO_RANCH_DRESSING },
        { ...CILANTRO, amount: '1 bunch', additionalDetails: '', section: CILANTRO_RANCH_DRESSING },
        { ...GARLIC, amount: '1 clove', additionalDetails: 'minced', section: CILANTRO_RANCH_DRESSING },
        { ...JALAPENO_PEPPERS, amount: '1 - 3', additionalDetails: 'depending on spice tolerance', section: CILANTRO_RANCH_DRESSING },
        { ...MILK, amount: '1/3 - 1/2 c', additionalDetails: 'depending on preferred thickness', section: CILANTRO_RANCH_DRESSING },

        { ...TORTILLA, amount: '8', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHIPOTLE_SALAD_KITS, amount: '32 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BROWN_RICE, amount: '2 c', additionalDetails: 'cooked', section: SECTIONS.MAIN },
        { ...CHEDDAR_CHEESE, amount: '8 oz', additionalDetails: 'shredded', section: SECTIONS.MAIN },
        { ...BLACK_BEANS, amount: '15 oz can of', additionalDetails: 'drained', section: SECTIONS.MAIN },
        { ...SOUR_CREAM, amount: '8 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...AVOCADO, amount: '1', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: '1', additionalDetails: 'diced', section: SECTIONS.MAIN },
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
        { step: 'In a ziploc bag or mixing bowl, mix together all the marinade ingredients except the steak and parsley.', type: SECTIONS.MEAT, img: marinade },
        { step: 'Add the steak to the marinade.', type: SECTIONS.MEAT, img: marinatedBeef },
        { step: 'Marinate for 20 minutes.', type: SECTIONS.MEAT },
        { step: 'Preheat a grill (or griddle).', type: SECTIONS.MEAT },
        { step: 'Add steak to the grill using tongs and cook until the preferred doneness.', type: SECTIONS.MEAT, img: [cookingBeef, grilled, cookedBeef] },
        { step: 'Top the steak with parsley.', type: SECTIONS.MEAT },
        { step: 'Blend together the cilantro ranch dressing ingredients.', type: CILANTRO_RANCH_DRESSING, img: [minced, veggies, pre, blended, dressing] },
        { step: 'Serve and mix in your homemade Cafe Rio bowl.', type: CILANTRO_RANCH_DRESSING },
        { step: 'After the steak is cooked and remove from the grill, optionally cook the fajitas on the grill. Use any of the residual sauce leftover from the steak on the grill.', type: SECTIONS.MAIN, img: [fajitas, cookedFajita] },
        { step: 'Warm the beans in a saucepan.', type: SECTIONS.MAIN },
        { step: 'Warm the tortillas on the grill.', type: SECTIONS.MAIN, img: warmingTortilla },
        { step: 'Assemble the salad bowls with the warmed tortilla, cooked rice, warmed beans, cooked steak, salad kit, and all the other desired toppings.', type: SECTIONS.MAIN, img: [tortilla, bowled, cilantroRanchDressing, cilantroAvocadoDressing, southwestDressing] },
    ],
    notes: [
        { note: 'I sometimes forget items in fridge or pantry when I am ready to make the salad. I recommend making a list of items beforehand, so you can reference at the time of assembly and not miss your favorite ingredients.' }
    ]
};