const lemonChicken = '../assets/Products/lemon-chicken.jpeg';

module.exports = {
    id: 'lemon-chicken',
    cardName: 'Lemon Chicken',
    name: 'Malaysian Lemon Chicken',
    img: lemonChicken,
    available: true,
    type: 'Lunch / Dinner',
    yields: '10 servings',
    prepTime: '10 m',
    cookTime: '10 m',
    ingredients: [
        { name: 'boneless chicken thigh', amount: '3 lbs', additionalDetails: 'cut into small pieces', optional: false },
        { name: 'soy sauce', amount: '2 1/2 Tbsp', additionalDetails: '', optional: false },
        { name: 'shaoxing wine', amount: '2 1/2 Tbsp', additionalDetails: '', optional: false },
        { name: 'cornstarch', amount: '5 Tbsp', additionalDetails: '', optional: false },

        { name: 'cornstarch', amount: '1 1/4 cups', additionalDetails: '', optional: false },
        { name: 'flour', amount: '1 1/4 cups', additionalDetails: '', optional: false },
        { name: 'vegetable oil', amount: '', additionalDetails: 'for deep-frying', optional: false },


        { name: 'lemon juice', amount: '15 Tbsp', additionalDetails: '', optional: false },
        { name: 'sugar', amount: '5 Tbsp', additionalDetails: '', optional: false },
        { name: 'water', amount: '25 Tbsp', additionalDetails: '', optional: false },
        { name: 'cornstarch', amount: '5 tsp', additionalDetails: '', optional: false },
        { name: 'salt', amount: '5 pinches', additionalDetails: 'to taste', optional: false },
        { name: 'white sesame', amount: '2 1/2 tsp', additionalDetails: 'to top', optional: false },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'deep pot' },
        { name: 'large bowl' },
        { name: 'sauce pan' },
        { name: 'medium bowl' },
        { name: 'baking sheet' },
        { name: 'cooling rack' },
        { name: 'paper towels' },
    ],
    directions: [
        'In a large bowl, marinate the chicken with the soy sauce, shaoxing wine, and cornstarch (5 Tbsp) for at least 30 minutes.',
        'Mix the sugar, cornstarch (5 tsp), salt, water,lemon juice, and white sesame in a sauce pan. Set aside. This is the sauce.',
        'In a medium bowl, mix the flour and cornstarch (1 1/4 cups) for the dredging station.',
        'Heat up a deep pot with vegetable oil over medium-high heat.',
        'Line a baking sheet with paper towels and place a cooling rack on top.',
        'Once the oil is hot, dredge the chicken in the flour mixture and shake off any excess. Then fry the chicken in the oil until golden brown (about 7 to 10 minutes).',
        'Remove the chicken from the oil and place on the cooling rack.',
        'Continue until all of the chicken is cooked.',
        'Heat the sauce over medium heat until it thickens. Serve over the chicken with rice.',
    ]
};