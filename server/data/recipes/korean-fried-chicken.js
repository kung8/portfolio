// const bbq = '../assets/Products/bbq-pulled-pork.jpeg';
const { CATEGORIES, SECTIONS } = require("./constants");

const SWEET_AND_TANGY_SAUCE = 'Sweet and Tangy Sauce';
const SWEET_AND_SPICY_SAUCE = 'Sweet and Spicy Sauce';

module.exports = {
    cardName: 'Korean Fried Chicken',
    name: 'Korean Fried Chicken',
    // img: bbq,
    available: true,
    type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    yields: '5-6 servings',
    prepTime: '20 m',
    cookTime: '20 m',
    separated: true,
    ingredients: [
        { name: 'chicken wings', amount: '3 lbs', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'garlic', amount: '3 cloves', additionalDetails: 'minced', optional: false, section: SECTIONS.MARINADE },
        { name: 'ginger', amount: '1/2 t', additionalDetails: 'grated', optional: false, section: SECTIONS.MARINADE },
        { name: 'sea salt', amount: '2 t', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'mirin', amount: '1 T', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },

        { name: 'vegetable oil', amount: '', additionalDetails: 'for frying', optional: false, section: SECTIONS.MAIN },

        { name: 'flour/cornstarch/potato starch', amount: '2 c', additionalDetails: '', optional: false, section: SECTIONS.DRY_RUB },
        { name: 'baking powder', amount: '1 t', additionalDetails: '', optional: false, section: SECTIONS.DRY_RUB },

        { name: 'water', amount: '2 1/2 c', additionalDetails: '', optional: false, section: SECTIONS.WET_RUB },
        { name: 'cornstarch', amount: '1 1/4 c', additionalDetails: '', optional: false, section: SECTIONS.WET_RUB },
        { name: 'flour', amount: '1 1/4 c', additionalDetails: '', optional: false, section: SECTIONS.WET_RUB },
        { name: 'baking powder', amount: '1 t', additionalDetails: '', optional: false, section: SECTIONS.WET_RUB },
        { name: 'cornstarch', amount: '2 c', additionalDetails: '', optional: false, section: SECTIONS.WET_RUB },

        { name: 'honey', amount: '1/4 c', additionalDetails: '', optional: false, section: SWEET_AND_TANGY_SAUCE },
        { name: 'soy sauce', amount: '1/4 c', additionalDetails: '', optional: false, section: SWEET_AND_TANGY_SAUCE },
        { name: 'garlic', amount: '3 cloves', additionalDetails: 'minced', optional: false, section: SWEET_AND_TANGY_SAUCE },
        { name: 'ginger', amount: '1/2 t', additionalDetails: 'grated', optional: false, section: SWEET_AND_TANGY_SAUCE },
        { name: 'rice wine vinegar', amount: '3 T', additionalDetails: '', optional: false, section: SWEET_AND_TANGY_SAUCE },
        { name: 'hoisin sauce', amount: '2 T', additionalDetails: '', optional: false, section: SWEET_AND_TANGY_SAUCE },
        { name: 'sesame oil', amount: '1 T', additionalDetails: '', optional: false, section: SWEET_AND_TANGY_SAUCE },

        { name: 'gochujang', amount: '1/4 c', additionalDetails: '', optional: false, section: SWEET_AND_SPICY_SAUCE },
        { name: 'sugar', amount: '1/4 c', additionalDetails: '', optional: false, section: SWEET_AND_SPICY_SAUCE },
        { name: 'strawberry jam', amount: '3 T', additionalDetails: 'seedless', optional: false, section: SWEET_AND_SPICY_SAUCE },
        { name: 'soy sauce', amount: '2 1/2 T', additionalDetails: '', optional: false, section: SWEET_AND_SPICY_SAUCE },
        { name: 'rice wine vinegar', amount: '1 1/2 T', additionalDetails: '', optional: false, section: SWEET_AND_SPICY_SAUCE },
        { name: 'honey', amount: '1 T', additionalDetails: '', optional: false, section: SWEET_AND_SPICY_SAUCE },
        { name: 'ketchup', amount: '1 T', additionalDetails: '', optional: false, section: SWEET_AND_SPICY_SAUCE },
        { name: 'water', amount: '6 T', additionalDetails: '', optional: false, section: SWEET_AND_SPICY_SAUCE },
        { name: 'garlic', amount: '2 cloves', additionalDetails: 'minced', optional: false, section: SWEET_AND_SPICY_SAUCE },
        { name: 'ginger', amount: '1/2 t', additionalDetails: 'grated', optional: false, section: SWEET_AND_SPICY_SAUCE },
        { name: 'salt', amount: '1/2 t', additionalDetails: '', optional: false, section: SWEET_AND_SPICY_SAUCE },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'large bowl' },
        { name: 'medium bowl' },
        { name: 'large bowl for wet rub' },
        { name: 'pot' },
        { name: 'baking sheet' },
        { name: 'cooling rack' },
        { name: 'paper towels' },
    ],
    directions: [
        { step: 'In a large bowl, combine the chicken wings with the garlic, ginger, sea salt, and mirin.', type: SECTIONS.MARINADE },
        { step: 'Let it marinate for at least 1 hour.', type: SECTIONS.MARINADE },

        { step: 'In a medium bowl, mix the dry rub ingredients together then coat each chicken wing.', type: SECTIONS.DRY_RUB },

        { step: 'In a large bowl, mix water, the 1 1/4 cup cornstarch, flour and baking powder.', type: SECTIONS.WET_RUB },
        { step: 'Fill a medium bowl with the 2 cups of cornstarch.', type: SECTIONS.WET_RUB },
        { step: 'Before you dip the wings into the wet batter get the frying oil ready.', type: SECTIONS.WET_RUB },
        { step: 'Dip the wings into the wet batter to coat, then fry.', type: SECTIONS.WET_RUB },

        { step: 'Place 2 layers of paper towels on top of a baking sheet and then place the cooling rack on top of the paper towels. Note the stacking order matters because placing the paper towels on top of the cooling rack creates steam beneath the fried chicken making it soggy and not crispy.', type: SECTIONS.MAIN },
        { step: 'Over medium heat, heat a pot of about 2 inches of oil.', type: SECTIONS.MAIN },
        { step: 'Once the oil is hot, about 345ºF, add the wings into the oil and fry for 5 - 7 minutes. Cook in batches and avoid crowding the pot.', type: SECTIONS.MAIN },
        { step: 'Place the fried wings on the cooling rack.', type: SECTIONS.MAIN },
        { step: 'Continue cooking the rest of the chicken in batches.', type: SECTIONS.MAIN },
        { step: 'Increase the heat to medium-high, about 375ºF, and repeat the second fry. Wings should be golden brown and crunchy.', type: SECTIONS.MAIN },
        { step: 'Enjoy by itself or coat with the hot sauce.', type: SECTIONS.MAIN },

        { step: 'In a sauce pan over medium-high heat, add all the ingredients for the respective sauce and bring to a boil.', type: SECTIONS.SAUCE },
        { step: 'Once it boils, reduce the heat and cook for another 2 - 3 minutes.', type: SECTIONS.SAUCE },
        { step: 'If the sauce is too thick, add a teaspoon of water at a time to thin it out.', type: SECTIONS.SAUCE },
        { step: 'While sauce is hot, drizzle it onto the wings and toss until all the wings are coated.', type: SECTIONS.SAUCE },
    ]
};