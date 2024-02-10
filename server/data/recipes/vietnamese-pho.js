const pho = '../assets/Products/pho.jpeg';
const { CATEGORIES, SECTIONS } = require('./constants');

module.exports = {
    cardName: 'Pho',
    name: 'Vietnamese Pho',
    img: pho,
    available: true,
    type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    yields: '4 servings',
    prepTime: '8 - 10 m',
    cookTime: '40 - 50 m',
    separated: true,
    ingredients: [
        { name: 'rice noodles', amount: '12 oz', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'beef broth (alternative to Pho Seasoning)', amount: '10 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'beef tenderloin', amount: '', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'onion', amount: '1', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'black pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'cilantro', amount: '', additionalDetails: 'sliced', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'green onion', amount: '', additionalDetails: 'sliced', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'bean sprout', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'mint', amount: '', additionalDetails: 'plucked', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'lime juice', amount: '', additionalDetails: 'sliced', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'soy sauce', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'sriracha sauce', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'medium and large pot' },
        { name: 'cutting board and knife' },
        { name: 'small and medium bowls' },
        { name: 'spider strainer' },
        { name: 'liquid measuring cup' },
    ],
    directions: [
        { step: 'Over high heat, place beef, broth, salt and pepper in a large pot and bring to a boil. Cover with a lid.', type: SECTIONS.MAIN },
        { step: 'Add the onion to the pot.', type: SECTIONS.MAIN },
        { step: 'Check occasionally, but the beef should turn a nice brown color (and bloodless), and the broth should be boiling. Note: do not check too often to prevent the steam from releasing.', type: SECTIONS.MAIN },
        { step: 'When the beef is getting close to being cooked, start boiling another medium pot of water with salt for the noodles. Note: the noodles will need to be completely submerged in the boiling water so make sure that the strainer will sink low enough in the water. You may need to add more water.', type: SECTIONS.MAIN },
        { step: 'When the beef is cooked, lower the heat to a warm heat.', type: SECTIONS.MAIN },
        { step: 'Once the water in the medium pot begins to boil, put the strainer in the pot with some of the noodle (best to cook the noodles in batches so it can cook thoroughly).', type: SECTIONS.MAIN },
        { step: 'Cook until the noodles are soft. This should be about 5 minutes. Be careful not to cook them too long or else they will fall apart.', type: SECTIONS.MAIN },
        { step: 'When everything is ready, place the noodle batches in each respective bowl to serve, and pour the hot broth over the noodles.', type: SECTIONS.MAIN },
        { step: 'Serve with any additional toppings and enjoy this simple delicious Vietnamese cuisine. Also this dish is pronounced \'fuh\'.', type: SECTIONS.MAIN },
    ]
};