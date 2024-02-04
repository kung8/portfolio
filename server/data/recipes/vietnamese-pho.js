const pho = '../assets/Products/pho.jpeg';

module.exports = {
    id: 'vietnamese-pho',
    cardName: 'Pho',
    name: 'Vietnamese Pho',
    img: pho,
    available: true,
    type: 'Lunch / Dinner',
    yields: '4 servings',
    prepTime: '8 - 10 m',
    cookTime: '40 - 50 m',
    ingredients: [
        { name: 'rice noodles', amount: '12 oz', additionalDetails: '', optional: false },
        { name: 'beef broth (alternative to Pho Seasoning)', amount: '10 c', additionalDetails: '', optional: false },
        { name: 'beef tenderloin', amount: '', additionalDetails: 'sliced', optional: false },
        { name: 'onion', amount: '1', additionalDetails: 'halved + sliced', optional: false },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'cilantro (optional topping)', amount: '', additionalDetails: '', optional: true },
        { name: 'green onion (optional topping)', amount: '', additionalDetails: '', optional: true },
        { name: 'bean sprout (optional topping)', amount: '', additionalDetails: '', optional: true },
        { name: 'mint (optional topping)', amount: '', additionalDetails: '', optional: true },
        { name: 'lime juice (optional topping)', amount: '', additionalDetails: '', optional: true },
        { name: 'soy sauce (optional topping)', amount: '', additionalDetails: '', optional: true },
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
        'Prep beef by cutting it into 1/4" thick slices then marinade it with salt and pepper.',
        'Add beef broth and the beef into a large pot and put over high heat and bring to a boil. Keep it covered.',
        'Cut the onion into slices and add to the pot of broth.',
        'While the beef and broth are cooking, prep the rest of the veggie toppings (if you decide to use them).',
        'Check occasionally, but the beef should turn a nice brown color (and bloodless), and the broth should be boiling. Note: do not check too often to prevent the steam from releasing.',
        'When the beef is getting close to being cooked, start boiling another medium pot of water with salt for the noodles. Note: the noodles will need to be completely submerged in the boiling water so make sure that the strainer will sink low enough in the water. You may need to add more water.',
        'When the beef is cooked, lower the heat to a warm heat.',
        'Once the water in the medium pot begins to boil, put the strainer in the pot with some of the noodle (best to cook the noodles in batches so it can cook thoroughly).',
        'Cook until the noodles are soft. This should be about 5 minutes. Be careful not to cook them too long or else they will fall apart.',
        'When everything is ready, place the noodle batches in each respective bowl to serve, and pour the hot broth over the noodles.',
        'Serve with any additional toppings and enjoy this simple delicious Vietnamese cuisine. Also this dish is pronounced \'fuh\'.'
    ]
};