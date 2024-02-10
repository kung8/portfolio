const americanOmelette = require("./recipes/american-omelette");
const chineseBao = require("./recipes/chinese-bao");
const bbqPulledPorkAndFixins = require("./recipes/bbq-pulled-pork-and-fixins");
const beefStroganoff = require("./recipes/beef-stroganoff");
const buttermilkSyrup = require("./recipes/buttermilk-syrup");
const cafeRioSalad = require("./recipes/cafe-rio-salad");
const cheeseBalls = require("./recipes/cheese-balls");
const chickenNoodleSoup = require("./recipes/chicken-noodle-soup");
const chickenPotPie = require("./recipes/chicken-pot-pie");
const chili = require("./recipes/chili");
const chineseBokChoyChicken = require("./recipes/chinese-bok-choy-chicken");
const chineseGreenBeanBeef = require("./recipes/chinese-green-bean-beef");
const chineseGingerChicken = require("./recipes/chinese-ginger-chicken");
const chineseLoMeinNoodles = require("./recipes/chinese-lo-mein-noodles");
const chineseSourChickenSoup = require("./recipes/chinese-sour-chicken-soup");
const chocolateChipCookies = require("./recipes/chocolate-chip-cookies");
const cilantroLimeRice = require("./recipes/cilantro-lime-rice");
const eggCasserole = require("./recipes/egg-casserole");
const fancyLunchables = require("./recipes/fancy-lunchables");
const frenchCrepe = require("./recipes/french-crepe");
const frenchToast = require("./recipes/french-toast");
const garlicBread = require("./recipes/garlic-bread");
const graveyardDessert = require("./recipes/graveyard-dessert");
const hamburger = require("./recipes/hamburger");
const hawaiianHaystacks = require("./recipes/hawaiian-haystacks");
const hospitalityChicken = require("./recipes/hospitality-chicken");
const indianButterChicken = require("./recipes/indian-butter-chicken");
const indianChickenTikkaMasala = require("./recipes/indian-chicken-tikka-masala");
const italianTurkeyMeatballSpinachTortelliniSoup = require("./recipes/italian-turkey-meatball-spinach-tortellini-soup");
const italianLasagna = require("./recipes/italian-lasagna");
const japaneseChickenKatsu = require("./recipes/japanese-chicken-katsu");
const japaneseKatsudon = require("./recipes/japanese-katsudon");
const koreanBeefBulgogi = require("./recipes/korean-beef-bulgogi");
const macaroniSalad = require("./recipes/macaroni-salad");
const malaysianBlackPepperChicken = require("./recipes/malaysian-black-pepper-chicken");
const malaysianKebabs = require("./recipes/malaysian-kebabs");
const malaysianLemonChicken = require("./recipes/malaysian-lemon-chicken");
const padThai = require("./recipes/pad-thai");
const peruvianAjiDeGallina = require("./recipes/peruvian-aji-de-gallina");
const phillyCheesesteak = require("./recipes/philly-cheesesteak");
const pigsInABlanket = require("./recipes/pigs-in-a-blanket");
const pizza = require("./recipes/pizza");
const potRoast = require("./recipes/pot-roast");
const riceCrispyBall = require("./recipes/rice-crispy-ball");
const roastedTurkey = require("./recipes/roasted-turkey");
const scrambledEggs = require("./recipes/scrambled-eggs");
const smoothie = require("./recipes/smoothie");
const smores = require("./recipes/smores");
const soupBowl = require("./recipes/soup-bowl");
const sushi = require("./recipes/sushi");
const tacoInABag = require("./recipes/taco-in-a-bag");
const vietnameseBanhMiSandwich = require("./recipes/vietnamese-banh-mi-sandwich");
const vietnameseBanhTieu = require("./recipes/vietnamese-banh-tieu");
const vietnamesePho = require("./recipes/vietnamese-pho");
const wrap = require("./recipes/wrap");
const caramelizedOnion = require("./recipes/caramelized-onion");
const caramelizedMushroom = require("./recipes/caramelized-mushroom");

// const alfredo = '../assets/Products/dutch-apple-pie.jpeg';
// const dutchApplePie = '../assets/Products/dutch-apple-pie.jpeg';
// const pancakes = '../assets/Products/pancakes.jpeg';
// const salad = '../assets/Products/chicken-salad.jpeg';
// const spaghetti = '../assets/Products/spaghetti.jpeg';

// TODO: Add the new recipes
// TODO: Add the separate direction steps for each recipe
// TODO: Add categories to the recipes
// TODO: Add figures to the recipes to show additional pictures of the recipe (link them in the instructions?)
// TODO: Add a way to search the recipes by name, CATEGORIES, type, origin, etc.
// TODO: Add a way to add ingredients to a shopping list and save in local storage
// TODO: Add a way to add recipes to a favorites list and save in local storage
// TODO: Add credits to the recipes (if applicable) and websites where to find them?
// TODO: Add facts to the recipes = nutritional facts, calories, interesting facts about the recipe, origins, etc.

// MEAL TYPES: Breakfast, Lunch, Dinner, Snack, Dessert, Drink
// CATEGORIES: American, Chinese, Italian, Mexican, Japanese, Indian, Thai, Vietnamese, Korean, French, German, Greek, Mediterranean, Middle Eastern, African
// ORIGINS: American, Chinese, Italian, Mexican, Japanese, Indian, Thai, Vietnamese, Korean, French, German, Greek, Mediterranean, Middle Eastern, African
// DIETARY RESTRICTIONS: Vegetarian, Vegan, Gluten-Free, Dairy-Free, Nut-Free, Soy-Free, Egg-Free, Sugar-Free, Low-Carb, Low-Fat, Low-Sodium, Low-Sugar, High-Protein, High-Fiber, Keto, Paleo, Whole30, Mediterranean, DASH, Atkins, Zone, South Beach, Weight Watchers, Raw, FODMAP, Flexitarian, Pescatarian, Lacto-Vegetarian, Ovo-Vegetarian, Lacto-Ovo-Vegetarian, Pollotarian, Vegan, Vegetarian, Paleo, Pescatarian, Flexitarian, Raw, FODMAP, Low-Carb, Low-Fat, Low-Sodium, Low-Sugar, High-Protein, High-Fiber, Keto, Paleo, Whole30, Mediterranean, DASH, Atkins, Zone, South Beach, Weight Watchers, Raw, FODMAP, Flexitarian, Pescatarian, Lacto-Vegetarian, Ovo-Vegetarian, Lacto-Ovo-Vegetarian, Pollotarian, Vegan, Vegetarian, Paleo, Pescatarian, Flexitarian, Raw, FODMAP, Low-Carb, Low-Fat, Low-Sodium, Low-Sugar, High-Protein, High-Fiber, Keto, Paleo, Whole30, Mediterranean, DASH, Atkins, Zone, South Beach, Weight Watchers, Raw, FODMAP, Flexitarian, Pescatarian, Lacto-Vegetarian, Ovo-Vegetarian, Lacto-Ovo-Vegetarian, Pollotarian, Vegan, Vegetarian, Paleo, Pescatarian, Flexitarian, Raw, FODMAP, Low-Carb, Low-Fat, Low-Sodium, Low-Sugar, High-Protein, High-Fiber, Keto, Paleo, Whole30, Mediterranean, DASH, Atkins, Zone, South Beach, Weight Watchers, Raw, FODMAP, Flexitarian, Pescatarian, Lacto-Vegetarian, Ovo-Vegetarian, Lacto-Ovo-Vegetarian, Pollotarian, Vegan, Vegetarian, Paleo, Pescatarian, Flexitarian, Raw, FODMAP, Low-Carb, Low-Fat, Low-Sodium, Low-Sugar, High-Protein, High-Fiber, Keto,

const recipes = [
    padThai,
    vietnamesePho,
    indianButterChicken,
    sushi,
    japaneseChickenKatsu,
    japaneseKatsudon,
    koreanBeefBulgogi,
    vietnameseBanhMiSandwich,
    malaysianLemonChicken,
    chineseBokChoyChicken,
    chineseGingerChicken,
    chineseSourChickenSoup,
    chineseLoMeinNoodles,
    hospitalityChicken,
    peruvianAjiDeGallina,
    chineseBao,
    vietnameseBanhTieu,
    italianLasagna,
    indianChickenTikkaMasala,
    chineseGreenBeanBeef,
    roastedTurkey,
    malaysianBlackPepperChicken,
    malaysianKebabs,
    pizza,
    italianTurkeyMeatballSpinachTortelliniSoup,
    cilantroLimeRice,
    tacoInABag,
    cafeRioSalad,
    beefStroganoff,
    phillyCheesesteak,
    hawaiianHaystacks,
    bbqPulledPorkAndFixins,
    potRoast,
    chickenPotPie,
    chickenNoodleSoup,
    chili,
    pigsInABlanket,
    macaroniSalad,
    frenchCrepe,
    frenchToast,
    soupBowl,
    cheeseBalls,
    garlicBread,
    scrambledEggs,
    americanOmelette,
    eggCasserole,
    buttermilkSyrup,
    hamburger,
    caramelizedMushroom,
    caramelizedOnion,
    fancyLunchables,
    wrap,
    smoothie,
    chocolateChipCookies,
    riceCrispyBall,
    graveyardDessert,
    smores,
]

module.exports = recipes;

// {
//     id: 'pizza',
//     cardName: 'Pizza',
//     name: 'Pizza',
//     img: pizza,
//     available: true,
//     type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
//     yields: '1 serving',
//     prepTime: '5 m',
//     cookTime: '10 m',
//     ingredients: [
//         { name: 'pita bread', amount: '1', additionalDetails: '', optional: false },
//         { name: 'shredded cheese', amount: '1/3 cup', additionalDetails: '', optional: false },
//         { name: 'tomato sauce', amount: '1/2 cup', additionalDetails: '', optional: false },
//         { name: 'green pepper', amount: '1/4', additionalDetails: 'diced', optional: false },
//         { name: 'small onion', amount: '1/4 cup', additionalDetails: 'diced/sliced', optional: false },
//         { name: 'roma tomato', amount: '1/4', additionalDetails: 'diced/sliced', optional: false },
//         { name: 'pepperoni slices', amount: '5 - 8', additionalDetails: '', optional: false },
//         { name: 'mushroom', amount: '3 - 5', additionalDetails: 'sliced', optional: false },
//         { name: 'pineapple tidbits', amount: '3 - 5', additionalDetails: '', optional: false },
//     ],
//     supplies: [
//         { name: 'oven' },
//         { name: 'baking sheets' },
//         { name: 'aluminum foil' },
//         { name: 'measuring cups' },
//         { name: 'measuring spoons' },
//         { name: 'spoon' },
//     ],
//     directions: [
//         'Preheat oven to 425 degrees F and lay aluminum foil on baking sheet.',
//         'Measure out ingredients you wish to use as toppings on your personal pizza.',
//         'Place pita bread on a baking sheet. Pita bread can be replaced with tortilla but be careful with how much sauce to place on it. You can even find premade pizza dough which may yield more than 1 serving depending on the size.',
//         'Top with tomato sauce and spread so it covers the top of the pita bread.',
//         'Sprinkle cheese to make a nice layer over the sauce',
//         'Add all of the ingredients above or substitute with whatever ingredients your heart desires. Note: if using any poultry or meat make sure it is not raw prior to placing on pizza.',
//         'Bake for 10 - 12 minutes.'
//     ]
// },
// {
//     id: 'pancakes',
//     cardName: 'Pancakes',
//     name: 'Pancakes (Kodiak Cake\'s Mix)',
//     img: pancakes,
//     available: true,
//     type: [CATEGORIES.BREAKFAST],
//     yields: '2 servings',
//     prepTime: '3 m',
//     cookTime: '8 - 12 m',
//     ingredients: [
//         { name: 'Kodiak Cake\'s pancake mix', amount: '1 c', additionalDetails: '', optional: false },
//         { name: 'water (or milk)', amount: '1 c', additionalDetails: '', optional: false },
//         { name: 'egg', amount: '1', additionalDetails: '', optional: false },
//         { name: 'vanilla', amount: '1 tsp', additionalDetails: '', optional: false },
//         { name: 'butter', amount: '1 Tbsp', additionalDetails: '', optional: false },
//         { name: 'syrup (optional topping)', amount: '', additionalDetails: '', optional: false },
//         { name: 'banana (optional topping)', amount: '', additionalDetails: '', optional: false },
//         { name: 'strawberry (optional topping)', amount: '', additionalDetails: '', optional: false },
//         { name: 'peanut butter (optional topping)', amount: '', additionalDetails: '', optional: false },
//         { name: 'whipped cream (optional topping)', amount: '', additionalDetails: '', optional: false },
//         { name: 'blueberries (optional topping)', amount: '', additionalDetails: '', optional: false },
//     ],
//     supplies: [
//         { name: 'stove or griddle' },
//         { name: 'frying pan or griddle' },
//         { name: 'spatula' },
//         { name: 'small mixing bowl' },
//         { name: 'measuring spoon' },
//         { name: 'measuring cup' },
//         { name: 'fork' },
//     ],
//     directions: [
//         'Add pancake mix, water (or milk), vanilla, and an egg to a small mixing bowl.',
//         'Mix with a fork until it is smooth and no lumps.',
//         'Heat the pan on a medium-high heat then add a quarter of the butter amount. Try to spread the butter across the pan by angling the pan.',
//         'Once the pan is hot and the butter is spread, ladle in pancake batter into the pan using a 1/3-cup measuring cup.',
//         'Keep an eye on the edges of the pancake as it will start to bubble when it is ready to flip. I like to feel out the edge by sliding my spatula beneath it to see if it is ready.',
//         'Flip it when it\'s ready and let the other side cook. I like to flip the pancake again to lightly brown the original side again.',
//         'Serve with your favorite toppings. I like syrup, bananas and strawberries, or peanut butter with bananas.'
//     ]
// },
// {
//     id: 'chicken-salad',
//     cardName: 'Chicken Salad',
//     name: 'Small Chicken Salad',
//     img: salad,
//     available: true,
//     type: [APPETIZER],
//     yields: '2 serving',
//     prepTime: '7 - 10 m',
//     cookTime: '7 - 10 m',
//     ingredients: [
//         { name: 'chicken breast', amount: '1', additionalDetails: 'strips', optional: false },
//         { name: 'spinach/lettuce', amount: 'large handfuls', additionalDetails: 'sliced', optional: false },
//         { name: 'green bell pepper', amount: '1/2', additionalDetails: 'sliced', optional: false },
//         { name: 'baby carrots', amount: '6 - 8', additionalDetails: 'sliced', optional: false },
//         { name: 'roma tomato', amount: '1/2', additionalDetails: 'diced', optional: false },
//         { name: 'cucumber', amount: '1/2', additionalDetails: 'sliced + halved', optional: false },
//         { name: 'lemon juice (for dressing)', amount: '', additionalDetails: '', optional: false },
//         { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false },
//         { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false },
//     ],
//     supplies: [
//         { name: 'stove' },
//         { name: 'pot' },
//         { name: 'medium bowl' },
//         { name: 'cutting board + knife' },
//     ],
//     directions: [
//         'Boil a pot of water on medium-high heat with salt.',
//         'Once the water is boiling, add the raw chicken breast whole inside the pot and cook until cooked all the way through.',
//         'While the chicken is boiling, cut up the rest of the vegetables and put in a bowl. Note: if you are prepping this for future meals, it is best to store the individual wet ingredients such as the tomatoes and cucumber separately. Then mix them together when you are about to eat them. This should keep for about a day or two at most.',
//         'When the chicken is finished cooking, cut the chicken into strips on the cutting board. If the chicken\'s center is still pink, cook a little longer in the pot.',
//         'Again if you are planning on eating the salad another day, wait for the chicken to cool down a little before adding to the salad or else it will cause some of the vegetables to shrivel or cook.',
//         'Add the chicken and the salad mix when ready to eat.',
//         'Enjoy this simple, healthy meal. I like to add a little bit of salt, pepper, and lemon juice to give it a bit of flavor.'
//     ]
// },
// {
//     id: 'dutch-apple-pie',
//     cardName: 'Dutch Apple Pie',
//     name: 'Dutch Apple Pie Ala Mode',
//     img: dutchApplePie,
//     available: true,
//     type: [DESSERT],
//     yields: '8 servings',
//     prepTime: '1 m',
//     cookTime: '10 m',
//     ingredients: [
//         { name: 'dutch apple pie', amount: '1', additionalDetails: '', optional: false },
//         { name: 'vanilla ice cream', amount: '1 tub of', additionalDetails: '', optional: false },
//     ],
//     supplies: [
//         { name: 'oven' },
//         { name: 'knife' },
//         { name: 'baking sheet' },
//     ],
//     directions: [
//         'Preheat oven to 400ºF.',
//         'Set apple pie on the baking sheet and "warm" for 10 min.',
//         'Serve with ice cream. Enjoy my favorite dessert! :)'
//     ]
// },
// {
//     id: 1,
//     title: 'Pumpkin Pie',
//     ingredients: [
//         '1 (8 ounce) package cream cheese, softened',
//         '1/4 cup white sugar',
//         '1/2 teaspoon vanilla extract',
//         '1 egg',
//         '1 (9 inch) prepared graham cracker crust',
//         '1/2 cup pumpkin puree',
//         '1/2 teaspoon ground cinnamon',
//         '1 pinch ground cloves',
//         '1 pinch ground nutmeg',
//         '1/2 cup frozen whipped topping, thawed'
//     ],
//     directions: [
//         'Preheat oven to 325 degrees F (165 degrees C).',
//         'In a large bowl, combine cream cheese, sugar and vanilla. Beat until smooth. Blend in eggs one at a time. Remove 1 cup of batter and spread into bottom of crust; set aside.',
//         'Add pumpkin, cinnamon, cloves and nutmeg to the remaining batter and stir gently until well blended. Carefully spread over the batter in the crust.',
//         'Bake in preheated oven for 35 to 40 minutes, or until center is almost set. Allow to cool, then refrigerate for 3 hours or overnight. Cover with whipped topping before serving.'
//     ]
// },
// {
//     id: 2,
//     title: 'Spaghetti',
//     ingredients: [
//         '1 pound ground beef',
//         '1 onion, chopped',
//         '1 green bell pepper, chopped',
//         '1 (4.5 ounce) can mushrooms, drained',
//         '1 (28 ounce) jar meatless spaghetti sauce',
//         '1 (16 ounce) package spaghetti',
//         '2 cups shredded Cheddar cheese'
//     ],
//     directions: [
//         'In a large skillet, cook and stir ground beef until brown. Add onions, green pepper and mushrooms; saute until vegetables are soft.',
//         'Stir in spaghetti sauce, and heat through.',
//         'Meanwhile, cook pasta according to package directions. Drain.',
//         'Toss hot pasta with sauce, and serve immediately.'
//     ]
// },
// {
//     id: 3,
//     title: 'Peanut Butter Cookies',
//     ingredients: [
//         '1 cup butter',
//         '1 cup white sugar',
//         '1 cup packed brown sugar',
//         '2 eggs',
//         '2 teaspoons vanilla extract',
//         '1 cup peanut butter',
//         '3 cups all-purpose flour',
//         '1 teaspoon baking soda',
//         '1/2 teaspoon salt',
//         '1 cup chopped peanuts'
//     ],
//     directions: [
//         'Preheat oven to 350 degrees F (175 degrees C).',
//         'In a large bowl, cream together butter, white sugar, and brown sugar until smooth. Beat in the eggs and vanilla. Stir in the peanut butter. Sift together flour, baking soda, and salt; stir into the peanut butter mixture. Finally, stir in the peanuts. Roll dough into 1 inch balls, and place on ungreased cookie sheets.',
//         'Bake for 10 to 15 minutes in the preheated oven, or until golden brown.'
//     ]
// },
// {
//     id: 'ginger-chicken',
//     cardName: 'Ginger Chicken',
//     name: 'Ginger Chicken',
//     img: gingerChicken,
//     available: true,
//     type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
//     yields: '8 servings',
//     prepTime: '40 m',
//     cookTime: '20 m',
//     ingredients: [
//         { name: 'chicken', amount: '8', additionalDetails: '', optional: false },
//         { name: 'brown sugar', amount: '1/4 c', additionalDetails: '', optional: false },
//         { name: 'soy sauce', amount: '3 Tbsp', additionalDetails: '', optional: false },
//         { name: 'garlic', amount: '2 cloves', additionalDetails: 'minced', optional: false },
//         { name: 'ginger', amount: '1 Tbsp', additionalDetails: 'minced', optional: false },
//         { name: 'onion', amount: '2/3', additionalDetails: 'sliced', optional: false },
//         { name: 'green bell pepper', amount: '1', additionalDetails: 'sliced', optional: false },
//         { name: 'carrots', amount: '1', additionalDetails: 'sliced', optional: false },
//         { name: 'red pepper flakes', amount: '', additionalDetails: 'to taste', optional: false },
//         { name: 'olive oil', amount: '1 1/2 Tbsp', additionalDetails: '', optional: false },
//         { name: 'green onion (optional)', amount: '', additionalDetails: 'sliced', optional: false },
//         { name: 'sesame seeds (optional)', amount: '', additionalDetails: '', optional: false },
//     ],
//     supplies: [
//         { name: 'stove' },
//         { name: '2 large frying pan' },
//         { name: 'cutting board and knife' },
//         { name: '2 large mixing bowl' },
//         { name: 'spatula' },
//     ],
//     directions: [
//         'Mince the garlic and ginger then mix together with the brown sugar, soy sauce, red pepper flakes, and 1 Tbsp of olive oil inside the mixing bowl for the chicken marinade.',
//         'Cut the chicken into about 2-inch wide pieces (about a quarter of a breast) and place in the marinade. Let marinade for at least 30 minutes.',
//         'While the marinade is doing its thing, prep the other veggies (onions, peppers, carrots and whatever veggies you want) and cook the rice.',
//         'Once the chicken is finished marinating, heat a pan over medium heat then add the remaining oil when it is hot.',
//         'Cook the chicken in batches. Brown the chicken and be sure they cook all the way through. The cooked chicken can be placed inside the other mixing bowl.',
//         'Continue with the chicken, but you can start another pan for sauteing the veggies. Put it over a medium-high heat. Then add a drizzle of oil. And saute the veggies until browned.',
//         'Once the veggies are finished cooking combine them with the cooked chicken.',
//         'When all the chicken has finished cooking, pour the remaining marinade in the pan and let it come to a boil (this will dissolve any of the browned pieces and become a glaze).',
//         'Turn off the heat and add the chicken and veggies back into pan to soak in the glazey sauce.',
//         'Serve this with rice and garnish with green onions and sesame seed and enjoy the fiery-kick of the Chinese.'
//     ]
// },
// {
//     id: 'chicken-alfredo',
//     cardName: 'Chicken Alfredo',
//     name: 'Chicken Alfredo',
//     img: alfredo,
//     available: false,
//     type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
//     yields: '4 servings',
//     prepTime: '8 - 10 m',
//     cookTime: '30 - 40 m',
//     ingredients: [
//         { name: 'fettuccine noodles', amount: '12 oz', additionalDetails: '', optional: false },
//         { name: 'olive oil (for tossing and sauteing)', amount: '', additionalDetails: '', optional: false },
//         { name: 'green bell pepper', amount: '2/3', additionalDetails: '', optional: false },
//         { name: 'onion', amount: '1/2', additionalDetails: '', optional: false },
//         { name: 'chicken breast', amount: '2', additionalDetails: 'sliced', optional: false },
//         { name: 'heavy cream', amount: '2 c', additionalDetails: '', optional: false },
//         { name: 'butter', amount: '4 Tbsp', additionalDetails: '', optional: false },
//         { name: 'nutmeg', amount: '2 pinches', additionalDetails: '', optional: false },
//         { name: 'shredded parmesan', amount: '1 1/2 c', additionalDetails: '', optional: false },
//         { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false },
//         { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false },
//     ],
//     supplies: [
//         { name: 'stove' },
//         { name: 'large pot' },
//         { name: 'large pan' },
//         { name: 'cutting board and knife' },
//         { name: 'mixing bowl' },
//         { name: 'small and medium bowls' },
//         { name: 'colander/strainer' },
//     ],
//     directions: [
//         'Prep the vegetables and set in a small bowl. Then cut the chicken into 1/4" slices and season with salt and pepper.',
//         'In a large pot, bring water and salt to a boil.',
//         'Add pasta to pot and cook until al dente (tender but center is still a little firm).',
//         'Drain in a colander/strainer and save some of the starchy water for later.',
//         'In a large mixing bowl, add the pasta and toss with a little oil.',
//         'In a pan over medium heat, melt 1 Tbsp of butter.',
//         'Once butter melts, brown chicken in a pan over medium-high heat, 2 to 3 minutes per side. Make sure that it\'s cooked through, cook chicken in batches if necessary.',
//         'Once chicken is cooked, place in a medium bowl.',
//         'Saute the vegetables with a little bit of butter in the same pan that the chicken was cooked in. Add the vegetables in with the chicken.',
//         'In the same pan over medium heat, melt the remaining butter.',
//         'Mix together heavy cream and nutmeg before pouring into the pan and cook until it simmers, then for another 2 minutes.',
//         'Set to a low heat and slowly mix in the parmesan, chicken, veggies, pasta, a little starchy noodle water, salt and pepper.',
//         'Serve and enjoy the nostalgic creamy, delicious chicken alfredo!',
//     ]
// },
// {
//     id: 'beef-spaghetti',
//     cardName: 'Beef Spaghetti',
//     name: 'Beef Spaghetti',
//     img: spaghetti,
//     available: true,
//     type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
//     yields: '6 servings',
//     prepTime: '5 m',
//     cookTime: '10 - 15 m',
//     ingredients: [
//         { name: 'ground beef', amount: '1 lb', additionalDetails: '', optional: false },
//         { name: 'spaghetti noodles', amount: '16 oz', additionalDetails: '', optional: false },
//         { name: 'onion', amount: '1', additionalDetails: 'diced', optional: false },
//         { name: 'olive oil (to toss)', amount: '', additionalDetails: '', optional: false },
//         { name: 'tomato sauce', amount: '24 oz', additionalDetails: '', optional: false },
//     ],
//     supplies: [
//         { name: 'stove' },
//         { name: 'large pot' },
//         { name: 'large pan' },
//         { name: 'spatula' },
//         { name: 'colander/strainer' },
//         { name: 'cutting board and knife' },
//     ],
//     directions: [
//         'NOTE: You can cook pasta and beef sauce at the same time.',
//         'In a large pot, bring water and salt to a boil. Add pasta to pot and cook until al dente (tender but center is still a little firm).',
//         'Drain pasta in a colander/strainer and save some of the starchy water for later. Return pasta back into the pot and toss with a little oil.',
//         'While the pasta is cooking, heat a pan over medium-high heat and add the ground beef. Cook until browned and break into smaller chunks with the spatula.',
//         'While the beef is cooking, dice the onions and add the onions with the beef. After the beef is browned, pour tomato sauce into the pan. And heat for another 3 to 5 minutes.',
//         'Combine the beefy sauce and the pasta and mix over medium heat. Add the starchy water to the help thicken the sauce.',
//         'Serve with a side salad and garlic bread. Enjoy this simple Italian pasta dish.'
//     ]
// },
// {
//     id: 'chicken-spaghetti',
//     cardName: 'Chicken Spaghetti',
//     name: 'Chicken Spaghetti',
//     img: spaghetti,
//     available: true,
//     type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
//     yields: '3 servings',
//     prepTime: '5 - 7 m',
//     cookTime: '15 - 20 m',
//     ingredients: [
//         { name: 'chicken breast (or preferred protein)', amount: '1', additionalDetails: 'sliced', optional: false },
//         { name: 'any preferred noodle', amount: '3 c', additionalDetails: '', optional: false },
//         { name: 'onion', amount: '1/3', additionalDetails: 'diced', optional: false },
//         { name: 'green bell pepper', amount: '2/3', additionalDetails: 'diced', optional: false },
//         { name: 'butter', amount: '1 Tbsp', additionalDetails: '', optional: false },
//         { name: 'olive oil (to toss)', amount: '', additionalDetails: '', optional: false },
//         { name: 'sugar', amount: '2 tsp', additionalDetails: '', optional: false },
//         { name: 'tomato sauce', amount: '12 oz', additionalDetails: '', optional: false },
//         { name: 'rosemary', amount: '', additionalDetails: 'to taste', optional: false },
//         { name: 'thyme', amount: '', additionalDetails: 'to taste', optional: false },
//         { name: 'basil', amount: '', additionalDetails: 'to taste', optional: false },
//         { name: 'oregano', amount: '', additionalDetails: 'to taste', optional: false },
//         { name: 'garlic powder', amount: '', additionalDetails: 'to taste', optional: false },
//         { name: 'parsley flakes', amount: '', additionalDetails: 'to taste', optional: false },
//     ],
//     supplies: [
//         { name: 'stove' },
//         { name: 'large pot' },
//         { name: 'large pan' },
//         { name: 'spatula' },
//         { name: 'large mixing bowl' },
//         { name: 'small bowl' },
//         { name: 'colander/strainer' },
//         { name: 'cutting board and knife' },
//     ],
//     directions: [
//         'Prep the vegetables and set in a small bowl. Then slice chicken and season generously with salt, pepper, oregano, thyme, rosemary, basil and garlic powder (you will be adding some more later optionally).',
//         'In a large pot, bring water and salt to a boil.',
//         'Add pasta to pot and cook until al dente (tender but center is still a little firm).',
//         'Drain in a colander/strainer and save some of the starchy water for later.',
//         'In a large mixing bowl, add the pasta and toss with a little oil.',
//         'While the pasta is cooking you could cook the chicken and veggies, in a pan over medium heat, melt 1 Tbsp of butter.',
//         'Once butter melts, brown chicken in a pan over medium-high heat, 2 to 3 minutes per side. Make sure that it\'s cooked through, cook chicken in batches if necessary.',
//         'Once chicken is cooked, place in a medium bowl.',
//         'Saute the vegetables with a little bit of butter in the same pan that the chicken was cooked in. Add the vegetables in with the chicken.',
//         'Once everything is cooked pour in the tomato sauce and add any more of the seasonings as desired.',
//         'Let sauce warm up a little before adding pasta directly in a pan. When you do add the pasta in, also add a little of the starchy pasta water.',
//         'Mix until all of the ingredients are completely mixed and warm.',
//         'I like to add the parsley afterwards because the flavor gets lost during the cooking process.',
//         'Enjoy this simple Italian pasta dish.'
//     ]
// },