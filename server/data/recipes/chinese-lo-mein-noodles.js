const loMein = '../assets/Products/lo-mein-noodles.jpeg';

module.exports = {
    id: 'lo-mein-noodles',
    cardName: 'Lo Mein',
    name: 'Lo Mein Noodles',
    img: loMein,
    available: true,
    type: 'Lunch / Dinner',
    yields: '8 servings',
    prepTime: '1 m',
    cookTime: '10 m',
    ingredients: [
        { name: 'flank steak', amount: '1/2 pound', additionalDetails: 'sliced', optional: false },
        { name: 'salt', amount: '1/4 tsp', additionalDetails: '', optional: false },
        { name: 'sugar', amount: '1/4 tsp', additionalDetails: '', optional: false },
        { name: 'black pepper', amount: '1/8 tsp', additionalDetails: '', optional: false },
        { name: 'shaoxing wine', amount: '1/2 tsp', additionalDetails: '', optional: false },
        { name: 'light soy sauce', amount: '1/2 tsp', additionalDetails: '', optional: false },
        { name: 'cornstarch', amount: '1/2 tsp', additionalDetails: '', optional: false },

        { name: 'sesame oil', amount: '1 Tbsp', additionalDetails: '', optional: false },
        { name: 'light soy sauce', amount: '2 tsp', additionalDetails: '', optional: false },
        { name: 'dark soy sauce', amount: '2 tsp', additionalDetails: '', optional: false },
        { name: 'oyster sauce', amount: '2 tsp', additionalDetails: '', optional: false },
        { name: 'salt', amount: '1/4 tsp', additionalDetails: '', optional: false },
        { name: 'sugar', amount: '1/4 tsp', additionalDetails: '', optional: false },
        { name: 'shaoxing wine', amount: '1 tsp', additionalDetails: '', optional: false },
        { name: 'water', amount: '1 Tbsp', additionalDetails: '', optional: false },

        { name: 'lo mein noodles', amount: '1 pound', additionalDetails: '', optional: false },
        { name: 'vegetable oil', amount: '4 Tbsp', additionalDetails: '', optional: false },
        { name: 'broccoli', amount: '1/2 pound', additionalDetails: 'cut into florets', optional: false },
        { name: 'garlic', amount: '3 medium cloves', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'medium bowl' },
        { name: 'wok' },
        { name: 'large pot' },
        { name: 'stove' },
        { name: 'large bowl' },
    ],
    directions: [
        'Combine beef, salt, sugar, pepper, shaoxing wine (1/2 tsp), light soy sauce (1/2 tsp), and cornstarch in a medium bowl. Mix with hands until beef is well-coated. Let it marinate for at least 30 minutes.',
        'Combine sesame oil, light soy sauce (2 tsp), dark soy sauce, oyster sauce, salt, sugar, shaoxing wine (1 tsp), and water in a small bowl. Mix well and set aside. This is the sauce.',
        'Bring a large pot of water to a boil. Add the noodles and cook until al dente. Drain and set aside.',
        'Over high heat, heat 2 Tbsp of vegetable oil in a wok. Add the beef and cook until lightly browned (about 1 minute). Remove beef from wok and set aside.',
        'Add 2 Tbsp of vegetable oil to the wok. Add the broccoli and a couple of pinches of salt, and cook until lightly browned (about 30 seconds).',
        'Add water to the wok and continue cooking until it steams (about 2 minutes). Transfer broccoli to bowl with beef.',
        'Heat the last Tbsp of vegetable oil in the wok. Add the noodles and stir noodles until coated with oil (about 30 seconds).',
        'Add the sauce and stir until noodles are evenly coated (about 1 minute).',
        'Add the garlic, beef and broccoli and continue to cook until everything is combined (about 1 minutes).',
        'Serve and enjoy this delicious Chinese dish!'
    ]
};