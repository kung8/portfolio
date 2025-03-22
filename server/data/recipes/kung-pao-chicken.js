// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, CORNSTARCH, LIGHT_SOY_SAUCE, SHAOXING_WINE, VEGETABLE_OIL, DARK_SOY_SAUCE, CHICKEN_BROTH, BALSAMIC_VINEGAR, HOISIN_SAUCE, WHITE_SUGAR, CHILI_PEPPERS, GREEN_BELL_PEPPERS, RED_BELL_PEPPERS, GINGER, GARLIC, GREEN_ONIONS, UNSALTED_PEANUTS, SESAME_SEEDS } = require('./ingredients');

const CHICKEN_MARINADE = 'Chicken Marinade';
const KUNG_PAO_SAUCE = 'Kung Pao Sauce';
const STIR_FRY = 'Stir Fry';

module.exports = {
    wip: true,
    cardName: 'Kung Pao Chicken',
    name: 'Kung Pao Chicken',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SIDE_DISH, TYPES.MAIN_COURSE],
    yields: '6 servings',
    prepTime: '15 m',
    cookTime: '15 m',
    websites: [
        { label: 'Kung Pao Chicken', link: 'https://natashaskitchen.com/kung-pao-chicken/' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: '1 1/2 lbs', unit: '', additionalDetails: 'cut into 1-inch pieces', section: CHICKEN_MARINADE },
        { ...CORNSTARCH, amount: '2 Tbsp', unit: '', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...LIGHT_SOY_SAUCE, amount: '4 Tbsp', unit: '', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...SHAOXING_WINE, amount: '2 Tbsp', unit: '', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...VEGETABLE_OIL, amount: '2 tsp', unit: '', additionalDetails: '', section: CHICKEN_MARINADE },
        
        { ...LIGHT_SOY_SAUCE, amount: '1/4 c', unit: '', additionalDetails: '', section: KUNG_PAO_SAUCE },
        { ...DARK_SOY_SAUCE, amount: '2 tsp', unit: '', additionalDetails: '', section: KUNG_PAO_SAUCE },
        { ...CHICKEN_BROTH, amount: '1/2 c', unit: '', additionalDetails: '', section: KUNG_PAO_SAUCE },
        { ...BALSAMIC_VINEGAR, amount: '2 Tbsp', unit: '', additionalDetails: '', section: KUNG_PAO_SAUCE },
        { ...SHAOXING_WINE, amount: '2 Tbsp', unit: '', additionalDetails: '', section: KUNG_PAO_SAUCE },
        { ...HOISIN_SAUCE, amount: '2 tsp', unit: '', additionalDetails: '', section: KUNG_PAO_SAUCE },
        { ...WHITE_SUGAR, amount: '1 Tbsp', unit: '', additionalDetails: '', section: KUNG_PAO_SAUCE },
        { ...CORNSTARCH, amount: '1 tsp', unit: '', additionalDetails: '', section: KUNG_PAO_SAUCE },
        
        { ...VEGETABLE_OIL, amount: '4 Tbsp', unit: '', additionalDetails: 'for frying', section: STIR_FRY },
        { ...CHILI_PEPPERS, amount: '6', unit: '', additionalDetails: 'roughly chopped', section: STIR_FRY },
        { ...GREEN_BELL_PEPPERS, amount: '1/2', unit: '', additionalDetails: 'chopped', section: STIR_FRY },
        { ...RED_BELL_PEPPERS, amount: '1/2', unit: '', additionalDetails: 'chopped', section: STIR_FRY },
        { ...GINGER, amount: '1 Tbsp', unit: '', additionalDetails: 'minced', section: STIR_FRY },
        { ...GARLIC, amount: '4 cloves', unit: '', additionalDetails: 'minced', section: STIR_FRY },
        
        { ...GREEN_ONIONS, amount: '6', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...UNSALTED_PEANUTS, amount: '', unit: '', additionalDetails: 'roasted', section: SECTIONS.TOPPINGS },
        { ...SESAME_SEEDS, amount: '1 tsp', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'medium bowl' },
        { name: 'wok' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Chicken Marinade" ingredients.', type: CHICKEN_MARINADE },
        { step: 'Let it marinade for at least 10 minutes.', type: CHICKEN_MARINADE },
        
        { step: 'In a medium bowl, combine the "Kung Pao Sauce" ingredients.', type: KUNG_PAO_SAUCE },
        { step: 'Mix until the cornstarch has dissolved and the sauce is smooth. Set aside.', type: KUNG_PAO_SAUCE },
        
        { step: 'Over medium-high heat, heat 2 tablespoons of oil in a wok.', type: STIR_FRY },
        { step: 'Add the chicken and cook until golden brown (about 80% cooked).', type: STIR_FRY },
        { step: 'Remove the chicken and set aside.', type: STIR_FRY },
        { step: 'Add the remaining oil to the wok.', type: STIR_FRY },
        { step: 'Add the "Stir Fry" ingredients (i.e. not the chicken, sauce, or the toppings). Stir fry the veggies (for about 4 minutes).', type: STIR_FRY },
        { step: 'Add the sauce to the wok and stir.', type: STIR_FRY },
        { step: 'Once the sauce thickens, add the chicken back in and stir until everything is coated well.', type: STIR_FRY },
        { step: 'Top this dish with your favorite toppings and serve with jasmine rice. Enjoy!', type: SECTIONS.SERVE },
    ]
};