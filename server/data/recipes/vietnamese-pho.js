const pho = '../assets/Products/pho.jpeg';
const { DINNER, LUNCH, MAIN, TOPPINGS } = require('./constants');

module.exports = {
    cardName: 'Pho',
    name: 'Vietnamese Pho',
    img: pho,
    available: true,
    type: [LUNCH, DINNER],
    yields: '4 servings',
    prepTime: '8 - 10 m',
    cookTime: '40 - 50 m',
    separated: true,
    ingredients: [
        { name: 'rice noodles', amount: '12 oz', additionalDetails: '', optional: false, section: MAIN },
        { name: 'beef broth (alternative to Pho Seasoning)', amount: '10 c', additionalDetails: '', optional: false, section: MAIN },
        { name: 'beef tenderloin', amount: '', additionalDetails: 'sliced', optional: false, section: MAIN },
        { name: 'onion', amount: '1', additionalDetails: 'halved + sliced', optional: false, section: MAIN },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: MAIN },
        { name: 'cilantro', amount: '', additionalDetails: '', optional: true, section: TOPPINGS },
        { name: 'green onion', amount: '', additionalDetails: '', optional: true, section: TOPPINGS },
        { name: 'bean sprout', amount: '', additionalDetails: '', optional: true, section: TOPPINGS },
        { name: 'mint', amount: '', additionalDetails: '', optional: true, section: TOPPINGS },
        { name: 'lime juice', amount: '', additionalDetails: '', optional: true, section: TOPPINGS },
        { name: 'soy sauce', amount: '', additionalDetails: '', optional: true, section: TOPPINGS },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'medium and large pot' },
        { name: 'cutting board and knife' },
        { name: 'small and medium bowls' },
        { name: 'strainer' },
        { name: 'liquid measuring cup' },
    ],
    directions: [
        { step: 'Prep beef by cutting it into 1/4" thick slices then marinade it with salt and pepper.', type: MAIN },
        { step: 'Add beef broth and the beef into a large pot and put over high heat and bring to a boil. Keep it covered.', type: MAIN },
        { step: 'Cut the onion into slices and add to the pot of broth.', type: MAIN },
        { step: 'While the beef and broth are cooking, prep the rest of the veggie toppings (if you decide to use them).', type: MAIN },
        { step: 'Check occasionally, but the beef should turn a nice brown color (and bloodless), and the broth should be boiling. Note: do not check too often to prevent the steam from releasing.', type: MAIN },
        { step: 'When the beef is getting close to being cooked, start boiling another medium pot of water with salt for the noodles. Note: the noodles will need to be completely submerged in the boiling water so make sure that the strainer will sink low enough in the water. You may need to add more water.', type: MAIN },
        { step: 'When the beef is cooked, lower the heat to a warm heat.', type: MAIN },
        { step: 'Once the water in the medium pot begins to boil, put the strainer in the pot with some of the noodle (best to cook the noodles in batches so it can cook thoroughly).', type: MAIN },
        { step: 'Cook until the noodles are soft. This should be about 5 minutes. Be careful not to cook them too long or else they will fall apart.', type: MAIN },
        { step: 'When everything is ready, place the noodle batches in each respective bowl to serve, and pour the hot broth over the noodles.', type: MAIN },
        { step: 'Serve with any additional toppings and enjoy this simple delicious Vietnamese cuisine. Also this dish is pronounced \'fuh\'.', type: MAIN },
    ]
};