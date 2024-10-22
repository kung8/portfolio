const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { HEAVY_CREAM, VANILLA_BEAN, EGG_YOLKS, HOT_WATER, WHITE_SUGAR } = require('./ingredients');

module.exports = {
    cardName: 'Creme Brulee',
    name: 'Creme Brulee',
    img: '',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [],
    method: [],
    protein: [],
    type: [],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    websites: [
        { label: 'Creme Brulee', link: 'https://www.foodnetwork.com/recipes/alton-brown/creme-brulee-recipe-1916827' },
        { label: 'Vanilla Sugar', link: 'https://sallysbakingaddiction.com/homemade-vanilla-sugar/' }
    ],
    separated: false,
    ingredients: [
        { ...HEAVY_CREAM, amount: '1 qt', additionalDetails: '', section: '' },
        { ...VANILLA_BEAN, amount: '1', additionalDetails: 'split and scraped', section: '' },
        { ...WHITE_SUGAR, amount: '2 c', additionalDetails: '', section: '' },
        { ...VANILLA_BEAN, amount: '1', additionalDetails: '', section: '' },
        { ...EGG_YOLKS, amount: '6', additionalDetails: '', section: '' },
        { ...HOT_WATER, amount: '2 qt', additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: '' },
    ],
    supplies: [
        { name: '' },
    ],
    directions: [
        { step: '', type: '' },
    ]
};

// VANILLA SUGAR
// Place sugar in your food processor or blender. Any small chopper or even a coffee bean grinder works. (Process in batches if needed.) You can skip the food processor/blender and just mix the sugar and vanilla bean seeds in a bowl with a whisk, but you’ll get better flavor if you pulse the two together.

// Cut the vanilla bean pod in half lengthwise. Use a knife to scrape out the seeds. Place the seeds on top of the sugar. (Save the empty beans/pods.) Use a spoon or another knife to scrape the seeds off the knife—they’re sticky and clumpy.

// Pulse/blend/whisk until all the seeds are broken up and blended, about 10-12 pulses. If you notice extra large clumps, feel free to keep pulsing/whisking or sift them out. Pour vanilla sugar into your jar or container.

// Submerge the empty bean/pod into the sugar. Cut it as needed to fit. This is actually optional, but the empty bean adds more flavor as the weeks go on. You could also use the empty beans to make vanilla extract. See written details above this recipe.

// Use sugar immediately or wait at least 2 weeks for optimal flavor.

// Store vanilla sugar at room temperature. Give it a shake every few weeks because it can clump up. If stored in a cool, dry place, vanilla sugar has a long shelf life, 2+ years at least. (I guarantee you’ll use it up before then!)




// CREME BRULEE
// Preheat the oven to 325 degrees F. 

// Place the cream, vanilla bean and its pulp into a medium saucepan set over medium-high heat and bring to a boil. Remove from the heat, cover and allow to sit for 15 minutes. Remove the vanilla bean and reserve for another use.

// In a medium bowl, whisk together 1/2 cup sugar and the egg yolks until well blended and it just starts to lighten in color. Add the cream a little at a time, stirring continually. Pour the liquid into 6 (7 to 8-ounce) ramekins. Place the ramekins into a large cake pan or roasting pan. Pour enough hot water into the pan to come halfway up the sides of the ramekins. Bake just until the creme brulee is set, but still trembling in the center, approximately 40 to 45 minutes.

// Remove the ramekins from the roasting pan and refrigerate for at least 2 hours and up to 3 days. Remove the creme brulee from the refrigerator for at least 30 minutes prior to browning the sugar on top. Divide the remaining 1/2 cup vanilla sugar equally among the 6 dishes and spread evenly on top. Using a torch, melt the sugar and form a crispy top. Allow the creme brulee to sit for at least 5 minutes before serving.