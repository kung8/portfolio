// Add image imports here if available

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { OVEN, BOWL, FRYING_PAN } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Cinnamon Crunch Apple Pie Cathead Biscuits',
    name: 'Cinnamon Crunch Apple Pie Cathead Biscuits',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.Dessert],
    genre: [GENRES.Greek],
    method: [METHODS.Bake],
    protein: [PROTEIN.Bean],
    type: [TYPES.Pie],
    allergies: [],
    diet: [],
    yields: { amount: 7, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Kiley Heard', link: '', authors: ['Kiley Heard'], finder: 'Web Scraper' }
    ],
    ingredients: [
        { name: '(256g) cake flour (see homemade version in the notes section below)', amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(130g) all-purpose flour', amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(30g) granulated sugar', amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(12g) baking powder', amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(3g) baking soda', amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(2g) cinnamon', amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(3g) salt', amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(171g) salted butter', amount: 12, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cold and grated', section: SECTIONS.MAIN },
        { name: '(120ml) buttermilk (or 1/2 tbsp apple cider vinegar or lemon juice mixed with 1/2 cup milk of choice)', amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(240g) Greek yogurt (substitution: sour cream)', amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(4g) vanilla bean paste or extract', amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(28g) salted butter', amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'apples or 1 large apple of choice', amount: 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'diced small (and peeled if desired; I used Granny Smith)', section: SECTIONS.MAIN },
        { name: '(60g) light brown sugar', amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(40g) maple syrup', amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(2g) cinnamon', amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(1g) apple pie spice', amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'Pinch of salt', amount: '', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(6g) cornstarch + 1 tbsp (15ml) water', amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'for slurry', section: SECTIONS.MAIN },
        { name: '(4g) vanilla bean paste or extract', amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(45ml) buttermilk or heavy cream', amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'for brushing', section: SECTIONS.MAIN },
        { name: '(60g) brown sugar', amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { name: '(2g) cinnamon', amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN }
    ],
    appliances: [
        OVEN
    ],
    supplies: [
        BOWL,
        FRYING_PAN,
    ],
    directions: [
        { step: `Start by preparing the apple pie filling first so it has enough time to cool. In a medium saucepan over medium-high heat, add the butter, diced apples, brown sugar, maple syrup, cinnamon, apple pie spice, and salt. Cook until the sugar melts and the apples start to soften, stirring occasionally (~10 minutes). It can help to steam the apples by covering the pan with a lid for a few minutes.`, section: SECTIONS.MAIN },
        { step: `Mix together the cornstarch and water in a small bowl to create a slurry. Pour the slurry into the apple mixture, stir, and cook until the mixture thickens (1-2 more minutes).`, section: SECTIONS.MAIN },
        { step: `Remove from the heat and stir in the vanilla. Set aside to cool completely. You can transfer it to a bowl, covered, and place in the refrigerator or freezer to speed up the cooling process!`, section: SECTIONS.MAIN },
        { step: `Preheat the oven to 425F. Grease a 12” cast iron skillet or large round baking pan with butter. Set aside.`, section: SECTIONS.MAIN },
        { step: `In a medium bowl, whisk together the buttermilk, Greek yogurt, and vanilla until well combined. Set aside.`, section: SECTIONS.MAIN },
        { step: `In a separate large bowl, whisk together the cake flour, all-purpose flour, sugar, baking powder, baking soda, cinnamon, and salt.`, section: SECTIONS.MAIN },
        { step: `Add in the grated butter, and use a wooden spoon to toss until butter is coated in flour and the mixture resembles a ‘crumbly’ texture.`, section: SECTIONS.MAIN },
        { step: `Make a well in the center of the dry mixture, and pour in the wet mixture. Mix with a wooden spoon until just combined, being careful not to over-mix. If needed, you can use your hands to mix and knead slightly until just combined.`, section: SECTIONS.MAIN },
        { step: `Make a large dimple in the center of your dough, and place the apple pie filling inside the dimple. Use your hands to gently fold 3-4 times, until the apple pie filling is just evenly dispersed. You want to be careful not the mix the apple pie filling into the dough to make sure the butter stays intact and the dough doesn’t get too wet. You are just looking for ‘ribbons’ of the apple pie filling throughout the dough. It will be sticky, but should be soft enough to scoop!`, section: SECTIONS.MAIN },
        { step: `Use a large cookie scoop or a ½ cup measuring cup to scoop the dough for each biscuit (if using a large cookie scoop, purposely overfill the scoop), and place in the prepared skillet or pan. At this point, if the dough seems like it’s gotten too warm and the butter isn’t in chunks anymore, cover the pan and place into the refrigerator to chill for 30 minutes.`, section: SECTIONS.MAIN },
        { step: `Mix together the brown sugar and cinnamon in a small bowl for the cinnamon sugar topping.`, section: SECTIONS.MAIN },
        { step: `Once ready, brush the tops of the biscuits with buttermilk or heavy cream. Then, sprinkle the tops with the cinnamon sugar mixture.`, section: SECTIONS.MAIN },
        { step: `Bake for 20-25 minutes, or until fluffy and golden brown.`, section: SECTIONS.MAIN },
        { step: `Remove the biscuits from the oven and let rest for at least 5-10 minutes. Then, serve them warm with butter, apple butter, flaky sea salt, and a hot cup of coffee, if desired.`, section: SECTIONS.MAIN },
        { step: `Enjoy!`, section: SECTIONS.MAIN }
    ],
    notes: [
        // Add any additional notes here
    ],
    store: [
        // Add storage instructions here if needed
    ],
    reheat: [
        // Add reheating instructions here if needed
    ],
    mealPrep: true,
};