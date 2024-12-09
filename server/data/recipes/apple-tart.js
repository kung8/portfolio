const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { UNSALTED_BUTTER, WHITE_SUGAR, EGG_YOLKS, VANILLA_EXTRACT, ALL_PURPOSE_FLOUR, ALMOND_FLOUR, REFRIGERATED_PUFF_PASTRY, PINK_LADY_APPLES, APRICOT_JELLY } = require('./ingredients');

const FRANGIPANE = 'Frangipane';
const BRUSH = 'Brush';

module.exports = {
    cardName: 'Apple Tart',
    name: 'Apple Tart',
    img: '',
    recipeCredit: 'Sam Giraud-Carrier',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE],
    type: [TYPES.TART],
    yields: '6 servings',
    prepTime: '25 m',
    cookTime: '45 m',
    websites: [
        { label: 'Apple Tart', link: 'https://www.thespruceeats.com/french-apple-tarte-aux-pommes-recipe-1375048' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '1 1/2 Tbsp', additionalDetails: '', section: FRANGIPANE },
        { ...WHITE_SUGAR, amount: '2 Tbsp', additionalDetails: '', section: FRANGIPANE },
        { ...ALMOND_FLOUR, amount: '1/4 c', additionalDetails: '', section: FRANGIPANE },
        { ...EGG_YOLKS, amount: '1', additionalDetails: '', section: FRANGIPANE },
        { ...VANILLA_EXTRACT, amount: '1/2 tsp', additionalDetails: '', section: FRANGIPANE },
        { ...ALL_PURPOSE_FLOUR, amount: '2 tsp', additionalDetails: '', section: FRANGIPANE },
       
        { ...REFRIGERATED_PUFF_PASTRY, amount: '', additionalDetails: 'chilled until ready to use', section: SECTIONS.ASSEMBLY },
        { ...PINK_LADY_APPLES, amount: '2 to 4', additionalDetails: 'cored, peeled and thinly sliced', section: SECTIONS.ASSEMBLY },
        { ...APRICOT_JELLY, amount: '1/4 c', additionalDetails: 'heated until partially melted', section: SECTIONS.ASSEMBLY },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'brush' },
    ],
    directions: [
        { step: 'In a stand mixer, cream together butter and sugar.', type: FRANGIPANE },
        { step: 'Mix in almond flour.', type: FRANGIPANE },
        { step: 'Gently mix in the egg yolks and vanilla.', type: FRANGIPANE },
        { step: 'Mix in all-purpose flour.', type: FRANGIPANE },
        { step: 'Refrigerate until ready to use.', type: FRANGIPANE },
        
        { step: 'Preheat the oven to 400ºF.', type: SECTIONS.ASSEMBLY },
        { step: 'Place the chilled puff pastry on a baking sheet.', type: SECTIONS.ASSEMBLY },
        { step: 'Spread the frangipane evenly on the puff pastry.', type: SECTIONS.ASSEMBLY },
        { step: 'Arrange the apple slices in overlapping rows.', type: SECTIONS.ASSEMBLY },

        { step: 'Bake until crust begins to become golden brown (about 12 to 15 minutes).', type: SECTIONS.BAKE },
        { step: 'Reduce heat to 350ºF.', type: SECTIONS.BAKE },
        { step: 'Cook until the apples are tender but not soft and the frangipane is cooked through and is not sticky (about 20 to 30 minutes).', type: SECTIONS.BAKE },
        { step: 'Remove the tart from the oven and let cool for 10 minutes.', type: SECTIONS.BAKE },
        
        { step: 'Brush melted jelly over the warm tart.', type: BRUSH },

        { step: 'Let the tart cool to room temperature and enjoy this light dessert!', type: SECTIONS.SERVE },
    ]
};