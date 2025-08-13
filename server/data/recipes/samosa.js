const samosa1 = '../assets/Products/samosa-1.jpeg';
const samosa2 = '../assets/Products/samosa-2.jpeg';
const samosa3 = '../assets/Products/samosa-3.jpeg';
const samosa4 = '../assets/Products/samosa-4.jpeg';
const samosa5 = '../assets/Products/samosa-5.jpeg';
const samosa6 = '../assets/Products/samosa-6.jpeg';
const samosa7 = '../assets/Products/samosa-7.jpeg';
const samosa8 = '../assets/Products/samosa-8.jpeg';
const samosa9 = '../assets/Products/samosa-9.jpeg';
const samosa10 = '../assets/Products/samosa-10.jpeg';
const samosa11 = '../assets/Products/samosa-11.jpeg';
const samosa12 = '../assets/Products/samosa-12.jpeg';
const samosa13 = '../assets/Products/samosa-13.jpeg';
const samosa14 = '../assets/Products/samosa-14.jpeg';
const samosa15 = '../assets/Products/samosa-15.jpeg';
const samosa16 = '../assets/Products/samosa-16.jpeg';
const samosa17 = '../assets/Products/samosa-17.jpeg';
const samosa18 = '../assets/Products/samosa-18.jpeg';
const samosa19 = '../assets/Products/samosa-19.jpeg';
const samosa20 = '../assets/Products/samosa-20.jpeg';
const samosa21 = '../assets/Products/samosa-21.jpeg';
const samosa22 = '../assets/Products/samosa-22.jpeg';
const samosa23 = '../assets/Products/samosa-23.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { ALL_PURPOSE_FLOUR, GHEE, CAROM_SEEDS, SALT, GREEN_PEA, GINGER, SERRANO_PEPPER, CORIANDER, LEMON_JUICE, CUMIN, GARAM_MASALA, CHILI_POWDER, FENNEL_SEEDS, YUKON_GOLD_POTATO, AMCHUR_POWDER, WATER } = require('./ingredients');

const POTATO_FILLING = 'Potato Filling';
const SPICES = 'Spices';

const PREP_POTATOES = 'Prep Potatoes';
const MAKE_SAMOSA = 'Make Samosa';
const BAKE_SAMOSA = 'Bake Samosa';

module.exports = {
    cardName: 'Samosa',
    name: 'Samosa',
    img: samosa21,
    recipeAuthors: ['Swasthi'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.INDIAN],
    method: [METHODS.BAKE, METHODS.BOIL],
    type: [TYPES.VEGETABLE],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Samosa', link: 'https://www.indianhealthyrecipes.com/samosa-recipe-make-samosa/' }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...CAROM_SEEDS, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...GHEE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'melted', section: SECTIONS.DOUGH },
        { ...WATER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: SECTIONS.DOUGH },

        { ...YUKON_GOLD_POTATO, amount: 4, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'peeled and halved', section: POTATO_FILLING },
        { ...GHEE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: POTATO_FILLING },
        { ...CUMIN, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: POTATO_FILLING },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'minced', section: POTATO_FILLING },
        { ...SERRANO_PEPPER, amount: 2, unit: '', additionalDetails: 'chopped', section: POTATO_FILLING },
        { ...GREEN_PEA, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: POTATO_FILLING },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'or to taste', section: POTATO_FILLING },
        { ...CORIANDER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: POTATO_FILLING },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: POTATO_FILLING },

        { ...CHILI_POWDER, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES },
        { ...GARAM_MASALA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES },
        { ...AMCHUR_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES },
        { ...FENNEL_SEEDS, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES },
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
        { step: 'Over medium-high heat, boil a pot of water.', section: PREP_POTATOES },
        { step: 'Add potatoes and boil until it is tender but not mushy.', section: PREP_POTATOES, img: samosa5 },
        { step: 'Drain the potatoes and let them cool.', section: PREP_POTATOES },
        { step: 'Crumble the potatoes (not mash).', section: PREP_POTATOES, img: samosa7 },
        { step: 'Set aside.', section: PREP_POTATOES },

        { step: 'In a mixing bowl, combine all the "Dough" ingredients except the water.', section: SECTIONS.PREP_DOUGH, img: samosa1 },
        { step: 'Squish the flour with your hands to incorporate the oil (for about 3 to 4 minutes). It should resemble breadcrumbs.', section: SECTIONS.PREP_DOUGH, img: samosa2 },
        { step: 'Push your palm down on the flour and if it holds it is ready.', section: SECTIONS.PREP_DOUGH, img: samosa3 },
        { step: 'Slowly mix in water. It should be slightly stiff but still adjustable.', section: SECTIONS.PREP_DOUGH, img: samosa4 },
        { step: 'Cover and let it rise for 30 minutes.', section: SECTIONS.PREP_DOUGH },

        { step: 'Over medium-high heat, heat ghee in a pan.', section: POTATO_FILLING },
        { step: 'Add cumin. Cook until it sizzles.', section: POTATO_FILLING, img: samosa8 },
        { step: 'Add ginger and chilies. Cook until fragrant (about 30 seconds to 1 minute).', section: POTATO_FILLING, img: samosa9 },
        { step: 'Add peas. Saute for 2 minutes.', section: POTATO_FILLING, img: samosa10 },
        { step: 'Add the "Spices" ingredients. Saute for 30 seconds.', section: POTATO_FILLING, img: samosa6, img: samosa11 },
        { step: 'Add potatoes. Saute for 2 to 3 minutes.', section: POTATO_FILLING, img: samosa12 },
        { step: 'Add coriander. Set aside.', section: POTATO_FILLING, img: samosa13 },
        { step: 'Taste and add more salt if desired.', section: POTATO_FILLING },
        { step: 'Add lemon juice.', section: POTATO_FILLING },
        { step: 'Divide into about 10 portions.', section: POTATO_FILLING },

        { step: 'Knead the dough a little to smooth it.', section: MAKE_SAMOSA, img: samosa14 },
        { step: 'Divide it into 5 parts. Roll each into balls.', section: MAKE_SAMOSA, img: samosa15 },
        { step: 'Cover the dough until ready to use.', section: MAKE_SAMOSA },
        { step: 'Add a little ghee/oil on a clean working surface.', section: MAKE_SAMOSA, img: samosa16 },
        { step: 'Place a dough ball on the oiled area. Flatten the dough and drizzle some oil on top.', section: MAKE_SAMOSA },
        { step: 'Roll to form discs (about 8.5 inches by 6.5 inches).', section: MAKE_SAMOSA },
        { step: 'Cut the dough in half to form two semicircles. Now you have two samosas.', section: MAKE_SAMOSA, img: samosa17 },
        { step: 'Apply water over the straight edge.', section: MAKE_SAMOSA },
        { step: 'Fold the straight edge in half to form a cone. From inside the cone, gently press that edge to seal the cone. If it is not sticking still, use a little water and flour to form a paste and apply to help make it stick.', section: MAKE_SAMOSA, img: samosa19 },
        { step: 'Fill the cone with the potato masala. Push the filling in with your fingers.', section: MAKE_SAMOSA, img: samosa18 },
        { step: 'Generously apply water to the two other edges.', section: MAKE_SAMOSA },
        { step: 'Push the two edges together and pinch to seal.', section: MAKE_SAMOSA },
        { step: 'Ensure the samosa is sealed and cover with a cloth.', section: MAKE_SAMOSA },

        { step: 'Preheat the oven to 360ºF.', section: BAKE_SAMOSA },
        { step: 'Place each samosa in a baking dish.', section: BAKE_SAMOSA },
        { step: 'Generously brush the samosa with oil all over.', section: BAKE_SAMOSA, img: samosa20 },
        { step: 'Bake for 35 to 40 minutes.', section: BAKE_SAMOSA },

        { step: 'Enjoy these delicious appetizers with your favorite chutney.', section: SECTIONS.SERVE, img: [samosa22, samosa23] },
    ],
    notes: [
        { note: 'You can bake, deep fry or air fry the samosas. Traditionally they are deep fried.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 350ºF until golden brown (about 6 to 8 minutes). Check them about every 2 minutes.',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until warmed through and crispy (about 10 to 15 minutes).',
        },
    ],
    mealPrep: false,
};