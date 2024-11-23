const completely = '../assets/Products/rice-krispy-treat-completely-melted-marshmallows.jpeg';
const corner = '../assets/Products/rice-krispy-treat-in-pan-corner.jpeg';
const pan = '../assets/Products/rice-krispy-treat-in-pan.jpeg';
const marshmallowsZoomed = '../assets/Products/rice-krispy-treat-marshmallows-zoomed.jpeg';
const marshmallows = '../assets/Products/rice-krispy-treat-marshmallows.jpeg';
const melted = '../assets/Products/rice-krispy-treat-melted-marshmallows.jpeg';
const melting = '../assets/Products/rice-krispy-treat-melting-marshmallows.jpeg';
const riceKrispy = '../assets/Products/rice-krispy-treat-rice-krispy.jpeg';
const vanilla = '../assets/Products/rice-krispy-treat-vanilla.jpeg';
const zoomed1 = '../assets/Products/rice-krispy-treat-zoomed-center-1.jpeg';
const zoomed2 = '../assets/Products/rice-krispy-treat-zoomed-center-2.jpeg';
const zoomed3 = '../assets/Products/rice-krispy-treat-zoomed-center-3.jpeg';
const lengthwise = '../assets/Products/rice-krispy-treat-zoomed-lengthwise.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS } = require("./constants");
const { MINI_MARSHMALLOWS, UNSALTED_BUTTER, VANILLA_EXTRACT, RICE_KRISPIES_CEREAL } = require('./ingredients');

module.exports = {
    cardName: 'Rice Krispy Treats',
    name: 'Rice Krispy Treats',
    img: zoomed3,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    yields: '12 servings',
    prepTime: '1 m',
    cookTime: '20 m',
    websites: [
        { label: 'Rice Krispie Treats', link: "https://www.spendwithpennies.com/extra-chewy-rice-krispie-treats/" }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...MINI_MARSHMALLOWS, amount: '6 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...RICE_KRISPIES_CEREAL, amount: '6 c', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'serving plate or bowl' },
    ],
    directions: [
        { step: 'Over low heat, melt butter and marshmallows in a saucepan. Stir to prevent it from burning and help it be consistent. My suggestion is to mix until the marshmallows are coated with the butter.', type: SECTIONS.MAIN, img: [marshmallows, marshmallowsZoomed, melting, melted, completely] },
        { step: 'If you want to make one of the variations with chocolate, melt chocolate chip after marshmallows are melted and stir.', type: SECTIONS.MAIN },
        { step: 'Remove the saucepan from heat and mix in vanilla (optional depending on how sweet the chocolate chips is).', type: SECTIONS.MAIN, img: vanilla },
        { step: 'Stir while adding in the Rice Krispies cereal. Mix until the cereal is evenly coated.', type: SECTIONS.MAIN, img: riceKrispy },
        { step: 'Press into a greased 9x13 pan. But do not press them too hard if you want the treats to be a little softer.', type: SECTIONS.MAIN, img: [pan, corner, zoomed1, zoomed2, lengthwise] },
        { step: 'Let cool and enjoy.', type: SECTIONS.MAIN },
    ],
    notes: [
        { note: "Be generous on marshmallows. The more marshmallows, the chewier the treats will be. Make sure it is completely melted to adhere well and are soft." },
        { note: "Do not use stale or old marshmallows. They will not melt well and will make the treats hard." },
        { note: "Do not overcook the marshmallows or the sugar will become hard." },
        { note: "If you want a thicker treat, use a smaller baking pan." },
        { note: "Use real butter and some vanilla for the best flavor." },
        { note: "Variations of this recipe include (1) Lemon, (2) Turtle (chocolate, caramel, and pecans), (3) Peanut Butter (chocolate and peanut butter), (4) Pineapple Coconut (pineapple and coconut), (5) Chocolate Oreo (crushed Oreo), and (6) Dulce de Leche (milk and white chocolate)." },
    ]
};