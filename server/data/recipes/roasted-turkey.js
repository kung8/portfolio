const turkey = '../assets/Products/dutch-apple-pie.jpeg';
// const turkeyCookingTable = '../assets/Products/cooking-turkey-estimates.png';
// const turkeyThawingTable = '../assets/Products/thawing-turkey-estimates.png';

module.exports = {
    cardName: 'Roast Turkey',
    name: 'Garlic Herb Butter Roast Turkey',
    img: turkey,
    available: false,
    type: 'Lunch / Dinner',
    yields: '10 servings (recipe based on 14 lb)',
    prepTime: '20 m',
    cookTime: '2 h 15 m - 4 h 20 m',
    ingredients: [
        { name: 'turkey', amount: '', additionalDetails: 'desired size', optional: false },
        { name: 'lemons', amount: '2', additionalDetails: 'sliced', optional: false },
        { name: 'garlic', amount: '3.5 heads', additionalDetails: '3 heads halved, 1/2 head minced', optional: false },
        { name: 'olive oil', amount: '2 c', additionalDetails: '3 heads halved, 1/2 head minced', optional: false },
        { name: 'unsalted butter', amount: '4 oz', additionalDetails: '', optional: false },
        { name: 'thyme', amount: '1 tsp + more as desired', additionalDetails: '', optional: false },
        { name: 'rosemary', amount: '1 tsp + more as desired', additionalDetails: '', optional: false },
        { name: 'salt', amount: '', additionalDetails: 'minced', optional: false },
        { name: 'pepper', amount: '', additionalDetails: 'minced', optional: false },
    ],
    supplies: [
        { name: 'oven' },
        { name: 'roasting pan' },
        { name: '2 tongs' },
        { name: 'medium bowl' },
        { name: 'basting brush' },
        { name: 'internal thermometer' },
    ],
    directions: [
        'Note: Typically you need to cook a turkey for about 13 - 15 min per pound. Small = 13 lb or less; large = 14 lb or more. Refer to additional resources to plan for thawing and cooking estimates (figures 1 and 2, respectively).',
        'Preheat oven to 425ºF and set oven rack to the lowest level.',
        'Bring turkey to room temperature, clean, and pat dry.',
        'Stuff garlic halves, lemon slices, and the additional amount of rosemary and thyme into the cavity of the turkey (note reserve at least the 1 tsp of each for the rub)',
        'In a medium bowl, combine melted butter, thyme, rosemary, 1/2 head of minced garlic as the rub.',
        'Rub half the mixture on the turkey, especially underneath the skin, and generously season with salt and pepper. Reserve half of the rub for later.',
        'Place turkey breast-side down and drizzle with oil.',
        'Roast uncovered for 30 min for small turkey or 45 min for large turkey.',
        'Turn turkey over and baste with pan juice.',
        'Use a brush to spread some more herb rub on the turkey. Save some for one more slathering.',
        'Turn oven to 325ºF and roast uncovered for another hour.',
        'Use a brush to spread the remaining herb rub and roast for an additional 30 min for small turkey or 1 hr for large turkey.',
        'Note: for large turkey you may need to cook for an additional 30 min to an hour, check the internal temperature - it should have a temperature of 165ºF.',
        'Tent the turkey with some foil (leaving some space between foil and turkey for it to breathe) and let it rest for 20 - 30 min before you carve and serve.',
        'Enjoy the moist turkey slices with many other holiday favorites!'
    ],
    supplemental: [
        { title: 'Thawing Estimate', content: 'Estimations for thawing turkey.' },
        { title: 'Cooking Estimate', content: 'Estimations for cooking turkey.' }
    ]
};