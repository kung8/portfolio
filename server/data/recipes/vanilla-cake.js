const cake1 = '../assets/Products/vanilla-cake-1.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_POWDER, BAKING_SODA, CAKE_FLOUR, CAKE_PAN, CANOLA_OIL, DIGITAL_SCALE, EGG, EGG_WHITES, FOOD_COLORING, MILK, OVEN, POWDERED_SUGAR, SALT, SPRINKLES, STAND_MIXER, UNSALTED_BUTTER, VANILLA_EXTRACT, WHITE_SUGAR } = require('./ingredients');

const OIL_MIXTURE_SECTION = 'Oil Mixture';
const EGG_MIXTURE_SECTION = 'Egg Mixture';

const SUGAR_MIXTURE_SECTION = 'Sugar Mixture';
const VANILLA_MIXTURE_SECTION = 'Vanilla Mixture';
const BUTTERCREAM_FROSTING_SECTION = 'Buttercream Frosting';

const CHILL_CAKE = 'Chill Cake';
const MAKE_BUTTERCREAM_FROSTING_SECTION = 'Make Buttercream Frosting';

module.exports = {
    wip: true,
    cardName: 'Vanilla Cake',
    name: 'Vanilla Cake',
    img: cake1,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.CAKE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Moist Vanilla Cake Recipe With Easy Buttercream',
            link: 'https://sugargeekshow.com/vanilla-cake/#recipe',
            authors: ['Liz Marek'],
            finder: 'Suyao Liu',
        }
    ],
    ingredients: [
        // vanilla cake
        { ...MILK, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: OIL_MIXTURE_SECTION },
        { ...CANOLA_OIL, amount: 3, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: OIL_MIXTURE_SECTION },

        { ...MILK, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: EGG_MIXTURE_SECTION },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: EGG_MIXTURE_SECTION },
        { ...EGG, amount: 3, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'room temperature', section: EGG_MIXTURE_SECTION },

        { ...CAKE_FLOUR, amount: 13, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...WHITE_SUGAR, amount: 13, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...BAKING_POWDER, amount: 3, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...BAKING_SODA, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },

        { ...UNSALTED_BUTTER, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: SECTIONS.BUTTER },

        // buttercream frosting
        { ...POWDERED_SUGAR, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SUGAR_MIXTURE_SECTION },
        { ...EGG_WHITES, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SUGAR_MIXTURE_SECTION },
        
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VANILLA_MIXTURE_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VANILLA_MIXTURE_SECTION },
        
        { ...UNSALTED_BUTTER, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: BUTTERCREAM_FROSTING_SECTION },
        { ...FOOD_COLORING, amount: 3, unit: INGREDIENT_UNITS.DROP, additionalDetails: 'preferred color', section: BUTTERCREAM_FROSTING_SECTION },

        { ...SPRINKLES, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'preferred color', section: SECTIONS.DECORATION },
    ],
    appliances: [
        OVEN,
        STAND_MIXER,
    ],
    supplies: [
        DIGITAL_SCALE,
        { ...CAKE_PAN, amount: 3, additionalDetails: '8-inch diameter by 2 inches' },
    ],
    directions: [
        { step: `Preheat the oven to 335ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Lightly grease your cake pans.`, section: SECTIONS.PREP_PAN },

        { step: `In a measuring cup, combine the "${OIL_MIXTURE_SECTION}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: `In a mixing bowl, combine the "${EGG_MIXTURE_SECTION}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: `In a stand mixer, combine the "${SECTIONS.DRY_INGREDIENTS}" section ingredients. Mix on low.`, section: SECTIONS.PREP_BATTER },
        { step: `Add butter. Mix until it looks like coarse sand.`, section: SECTIONS.PREP_BATTER },
        { step: `Add the "${OIL_MIXTURE_SECTION}". Mix on medium for 2 minutes.`, section: SECTIONS.PREP_BATTER },
        { step: `Scrape the bowl.`, section: SECTIONS.PREP_BATTER },
        { step: `Add the "${EGG_MIXTURE_SECTION}". Mix on low. Scrape as needed. It should be thick.`, section: SECTIONS.PREP_BATTER },
        { step: `Pour batter into cake pans about 3/4 of the way.`, section: SECTIONS.PREP_BATTER },

        { step: `Bake until a toothpick comes out clean (about 20 to 30 minutes).`, section: SECTIONS.BAKE },

        { step: `Remove cake from the oven and carefully tap them on the counter to help release air and shrinking. Place on a cooling rack.`, section: CHILL_CAKE },
        { step: `Let cool for 10 minutes.`, section: CHILL_CAKE },
        { step: `Place the cooling rack on top of the cake and carefully flip and gently remove the cakes from the pans.`, section: CHILL_CAKE },
        { step: `Once completely cooled, wrap them in plastic wrap and place in the freezer for 30 minutes.`, section: CHILL_CAKE },

        { step: `In a stand mixer, combine the "${SUGAR_MIXTURE_SECTION}" section ingredients.`, section: MAKE_BUTTERCREAM_FROSTING_SECTION },
        { step: `Mix on low then on high for 5 minutes.`, section: MAKE_BUTTERCREAM_FROSTING_SECTION },
        { step: `Add the "${VANILLA_MIXTURE_SECTION}" section ingredients.`, section: MAKE_BUTTERCREAM_FROSTING_SECTION },
        { step: `Add the butter a little at a time. It will be separated and yellow but will come together and will be white.`, section: MAKE_BUTTERCREAM_FROSTING_SECTION },
        { step: `Optionally add any food coloring to adjust to your preferred color.`, section: MAKE_BUTTERCREAM_FROSTING_SECTION },
        { step: `Whip on high until it is white and light (about 8 to 10 minutes).`, section: MAKE_BUTTERCREAM_FROSTING_SECTION },
        { step: `Optionally mix on low for 15 to 20 minutes to make it even fluffier.`, section: MAKE_BUTTERCREAM_FROSTING_SECTION },

        { step: `Fill each layer of the cake with frosting and stack the cake.`, section: SECTIONS.ASSEMBLE },
        { step: `Frost the outside and top with your favorite toppings.`, section: SECTIONS.DECORATE },
        
        { step: `Enjoy this very moist cake recipe topped with your favorite toppings!`, section: SECTIONS.SERVE },
    ],
    notes: [],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};