// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { ALL_PURPOSE_FLOUR, GHEE, WARM_WATER, CAROM_SEEDS, SALT, GREEN_PEAS, GINGER, SERRANO_PEPPERS, CORIANDER, LEMON_JUICE, CUMIN, GARAM_MASALA, CHILI_POWDER, FENNEL_SEEDS, YUKON_GOLD_POTATOES } = require('./ingredients');

const DOUGH = 'Dough';
const POTATO_FILLING = 'Potato Filling';
const SPICES = 'Spices';

const PREP_POTATOES = 'Prep Potatoes';
const PREP_DOUGH = 'Prep Dough';
const MAKE_SAMOSA = 'Make Samosa';
const BAKE_SAMOSA = 'Bake Samosa';

module.exports = {
    wip: true,
    cardName: 'Samosa',
    name: 'Samosa',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.INDIAN],
    method: [METHODS.BAKE, METHODS.BOIL],
    type: [TYPES.VEGETABLE],
    yields: '10 servings',
    prepTime: '30 m',
    cookTime: '25 m',
    websites: [
        { label: 'Samosa', link: 'https://www.indianhealthyrecipes.com/samosa-recipe-make-samosa/' }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: '2 c', additionalDetails: '', section: DOUGH },
        { ...CAROM_SEEDS, amount: '3/4 tsp', additionalDetails: '', section: DOUGH },
        { ...SALT, amount: '3/4 tsp', additionalDetails: '', section: DOUGH },
        { ...GHEE, amount: '1/4 c', additionalDetails: 'melted', section: DOUGH },
        { ...WARM_WATER, amount: '6 Tbsp', additionalDetails: '', section: DOUGH },
        
        { ...YUKON_GOLD_POTATOES, amount: '4 medium', additionalDetails: 'peeled and halved', section: POTATO_FILLING },
        { ...GHEE, amount: '1 Tbsp', additionalDetails: '', section: POTATO_FILLING },
        { ...GINGER, amount: '1 Tbsp', additionalDetails: 'minced', section: POTATO_FILLING },
        { ...SERRANO_PEPPERS, amount: '1 - 2', additionalDetails: 'chopped', section: POTATO_FILLING },
        { ...GREEN_PEAS, amount: '1/2 c', additionalDetails: '', section: POTATO_FILLING },
        { ...SALT, amount: '1/2 tsp', additionalDetails: 'or to taste', section: POTATO_FILLING },
        { ...CORIANDER, amount: '4 Tbsp', additionalDetails: 'chopped', section: POTATO_FILLING },
        { ...LEMON_JUICE, amount: '1 tsp', additionalDetails: '', section: POTATO_FILLING },
        
        { ...CUMIN, amount: '', additionalDetails: '', section: SPICES },
        { ...GARAM_MASALA, amount: '', additionalDetails: '', section: SPICES },
        { ...CHILI_POWDER, amount: '', additionalDetails: '', section: SPICES },
        { ...CUMIN, amount: '', additionalDetails: '', section: SPICES },
        { ...FENNEL_SEEDS, amount: '', additionalDetails: '', section: SPICES },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'mixing bowl' },
        { name: 'pan' },
        { name: 'dough knife' },
        { name: 'baking pan' },
    ],
    directions: [
        { step: 'Over medium-high heat, boil a pot of water.', type: PREP_POTATOES },
        { step: 'Add potatoes and boil until it is tender but not mushy.', type: PREP_POTATOES },
        { step: 'Crumble the potatoes (not mash).', type: PREP_POTATOES },
        { step: 'Set aside.', type: PREP_POTATOES },

        { step: 'In a mixing bowl, combine all the "Dough" ingredients except the water.', type: PREP_DOUGH },
        { step: 'Squish the flour with your hands to incorporate the oil (for about 3 to 4 minutes). It should resemble breadcrumbs.', type: PREP_DOUGH },
        { step: 'Push your palm down on the flour and if it holds it is ready.', type: PREP_DOUGH },
        { step: 'Slowly mix in water. It should be slightly stiff but still adjustable.', type: PREP_DOUGH },
        { step: 'Cover and let it rise for 30 minutes.', type: PREP_DOUGH },

        { step: 'Over medium-high heat, heat ghee in a pan.', type: POTATO_FILLING },
        { step: 'Add cumin. Cook until it sizzles.', type: POTATO_FILLING },
        { step: 'Add ginger and chilies. Cook until fragrant (about 30 seconds to 1 minute).', type: POTATO_FILLING },
        { step: 'Add peas. Saute for 2 minutes.', type: POTATO_FILLING },
        { step: 'Add the "Spices" ingredients. Saute for 30 seconds.', type: POTATO_FILLING },
        { step: 'Add potatoes and salt. Saute for 2 to 3 minutes.', type: POTATO_FILLING },
        { step: 'Add coriander. Set aside.', type: POTATO_FILLING },
        { step: 'Taste and add more salt if desired.', type: POTATO_FILLING },
        { step: 'Add lemon juice.', type: POTATO_FILLING },
        { step: 'Divide into about 10 portions.', type: POTATO_FILLING },

        { step: 'Knead the dough a little to smooth it.', type: MAKE_SAMOSA },
        { step: 'Divide it into 5 parts. Roll each into balls.', type: MAKE_SAMOSA },
        { step: 'Cover the dough until ready to use.', type: MAKE_SAMOSA },
        { step: 'Add a little ghee/oil on a clean working surface.', type: MAKE_SAMOSA },
        { step: 'Place a dough ball on the oiled area. Flatten the dough and drizzle some oil on top.', type: MAKE_SAMOSA },
        { step: 'Roll to form discs (about 8.5 inches by 6.5 inches).', type: MAKE_SAMOSA },
        { step: 'Cut the dough in half to form two semicircles. Now you have two samosas.', type: MAKE_SAMOSA },
        { step: 'Apply water over the straight edge.', type: MAKE_SAMOSA },
        { step: 'Fold the straight edge in half to form a cone. From inside the cone, gently press that edge to seal the cone. If it is not sticking still, use a little water and flour to form a paste and apply to help make it stick.', type: MAKE_SAMOSA },
        { step: 'Fill the cone with the potato masala. Push the filling in with your fingers.', type: MAKE_SAMOSA },
        { step: 'Generously apply water to the two other edges.', type: MAKE_SAMOSA },
        { step: 'Push the two edges together and pinch to seal.', type: MAKE_SAMOSA },
        { step: 'Ensure the samosa is sealed and cover with a cloth.', type: MAKE_SAMOSA },

        { step: 'Preheat the oven to 360ºF.', type: BAKE_SAMOSA },
        { step: 'Place each samosa in a baking dish.', type: BAKE_SAMOSA },
        { step: 'Generously brush the samosa with oil all over.', type: BAKE_SAMOSA },
        { step: 'Bake for 35 to 40 minutes.', type: BAKE_SAMOSA },

        { step: 'Enjoy these delicious appetizers with your favorite chutney.', type: SECTIONS.SERVE },
    ]
};