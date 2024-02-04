const chickenNoodle = '../assets/Products/chicken-noodle-soup.jpeg';

module.exports = {
    cardName: 'Chicken Soup',
    name: 'Chicken Noodle Soup',
    img: chickenNoodle,
    available: true,
    type: 'Lunch / Dinner',
    yields: '5 - 6 servings',
    prepTime: '6 - 8 m',
    cookTime: '40 - 45 m',
    ingredients: [
        { name: 'chicken breast', amount: '1.5 lbs', additionalDetails: 'cubed', optional: false },
        { name: 'olive oil', amount: '1 Tbsp', additionalDetails: '', optional: false },
        { name: 'large onion', amount: '1', additionalDetails: 'sliced', optional: false },
        { name: 'large carrots', amount: '2', additionalDetails: 'sliced', optional: false },
        { name: 'celery', amount: '2 stalks', additionalDetails: 'sliced', optional: false },
        { name: 'chicken broth', amount: '6 cups', additionalDetails: '', optional: false },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'oregano', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'rosemary', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'thyme', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'egg noodles', amount: '16 oz', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'large pan' },
        { name: 'large pot' },
        { name: 'measuring cups' },
        { name: 'measuring spoons' },
        { name: 'cutting board(s) and knife(ves)' },
        { name: 'mixing bowl' },
        { name: 'small bowl' },
        { name: 'spoon' },
    ],
    directions: [
        'Prep all the vegetables and add them to the mixing bowl. Then prep the raw chicken. Or best to use separate cutting boards to avoid cross contamination.',
        'In a hot pan with oil over medium-high heat, add the chicken, salt, pepper, and oregano. Cook until chicken is browned on both sides. Set aside.',
        'In a large pot, add together the chicken broth, onion, carrots, celery, salt, pepper, oregano, rosemary, and thyme and cook for 8 - 10 minutes over medium-high heat.',
        'Add the noodles and bring to a roaring boil (about another 6 to 8 minutes).',
        'Add the chicken and let it simmer on a low-heat for about 10 minutes.',
        'Serve and enjoy - I typically make this when I or somebody I know is sick, so get better if you too are sick!'
    ]
};