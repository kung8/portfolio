const americanOmelette = require("./recipes/american-omelette");
const bakedChicken = require("./recipes/baked-chicken");
const bananaBread = require("./recipes/banana-bread");
const bbqChickenWings = require("./recipes/bbq-chicken-wings");
const bbqPulledPorkAndFixins = require("./recipes/bbq-pulled-pork-and-fixins");
const beefStroganoff = require("./recipes/beef-stroganoff");
const biscuitsAndGravy = require("./recipes/biscuits-and-gravy");
const brownies = require("./recipes/brownies");
const buttermilkSyrup = require("./recipes/buttermilk-syrup");
const cafeRioSalad = require("./recipes/cafe-rio-salad");
const caramelizedOnion = require("./recipes/caramelized-onion");
const caramelizedMushroom = require("./recipes/caramelized-mushroom");
const cheeseballs = require("./recipes/cheeseballs");
const cheesecake = require("./recipes/cheesecake-factory-cheesecake");
const chickenAlfredo = require("./recipes/chicken-alfredo");
const chickenNoodleSoup = require("./recipes/chicken-noodle-soup");
const chickenPotPie = require("./recipes/chicken-pot-pie");
const chili = require("./recipes/chili");
const chineseBao = require("./recipes/chinese-bao");
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
const garlicBreadsticks = require("./recipes/garlic-breadsticks");
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
const koreanFriedChicken = require("./recipes/korean-fried-chicken");
const lemonChickenOnLettuce = require("./recipes/lemon-chicken-on-lettuce");
const macaroniSalad = require("./recipes/macaroni-salad");
const malaysianBlackPepperChicken = require("./recipes/malaysian-black-pepper-chicken");
const malaysianKebabs = require("./recipes/malaysian-kebabs");
const malaysianLemonChicken = require("./recipes/malaysian-lemon-chicken");
const noBakeCookie = require("./recipes/no-bake-cookie");
const padThai = require("./recipes/pad-thai");
const parfait = require("./recipes/parfait");
const pepperSteak = require("./recipes/pepper-steak");
const peruvianAjiDeGallina = require("./recipes/peruvian-aji-de-gallina");
const phillyCheesesteak = require("./recipes/philly-cheesesteak");
const pigsInABlanket = require("./recipes/pigs-in-a-blanket");
const pizza = require("./recipes/pizza");
const potRoast = require("./recipes/pot-roast");
const pretzel = require("./recipes/pretzel");
const riceCrispyBall = require("./recipes/rice-crispy-ball");
const roastedTurkey = require("./recipes/roasted-turkey");
const scrambledEggs = require("./recipes/scrambled-eggs");
const smoothie = require("./recipes/smoothie");
const smores = require("./recipes/smores");
const soupBowl = require("./recipes/soup-bowl");
const sushi = require("./recipes/sushi");
const tacoInABag = require("./recipes/taco-in-a-bag");
const tedLassoBiscuits = require("./recipes/ted-lasso-biscuits");
const vietnameseBanhMiSandwich = require("./recipes/vietnamese-banh-mi-sandwich");
const vietnameseBanhTieu = require("./recipes/vietnamese-banh-tieu");
const vietnamesePho = require("./recipes/vietnamese-pho");
const wrap = require("./recipes/wrap");

// TODO: Add the new recipes
// TODO: Add a way to add ingredients to a shopping list and save in local storage
// TODO: Add a way to add recipes to a favorites list and save in local storage
// TODO: Add websites where to find them?
// TODO: Add facts to the recipes = nutritional facts, calories, interesting facts about the recipe, origins, etc.

const recipes = [
    padThai,
    vietnamesePho,
    indianButterChicken,
    sushi,
    japaneseChickenKatsu,
    japaneseKatsudon,
    koreanBeefBulgogi,
    koreanFriedChicken,
    vietnameseBanhMiSandwich,
    malaysianLemonChicken,
    chineseBokChoyChicken, // TODO: add
    chineseGingerChicken,
    chineseSourChickenSoup,
    chineseLoMeinNoodles,
    peruvianAjiDeGallina,
    lemonChickenOnLettuce,
    pepperSteak,
    hospitalityChicken,
    bakedChicken,
    chineseBao, // TODO: add
    vietnameseBanhTieu,
    italianLasagna,
    indianChickenTikkaMasala,
    chineseGreenBeanBeef,
    roastedTurkey,
    malaysianBlackPepperChicken,
    malaysianKebabs,
    pizza,
    italianTurkeyMeatballSpinachTortelliniSoup,
    cilantroLimeRice, // TODO: add
    tacoInABag,
    cafeRioSalad, // TODO: add
    beefStroganoff,
    chickenAlfredo,
    phillyCheesesteak,
    hawaiianHaystacks,
    bbqPulledPorkAndFixins,
    bbqChickenWings,
    potRoast,
    chickenPotPie,
    chickenNoodleSoup,
    chili,
    pigsInABlanket,
    macaroniSalad,
    frenchCrepe,
    frenchToast,
    soupBowl, // TODO: add
    cheeseballs,
    garlicBreadsticks,
    biscuitsAndGravy,
    scrambledEggs,
    americanOmelette,
    eggCasserole,
    buttermilkSyrup,
    hamburger,
    caramelizedMushroom,
    caramelizedOnion,
    fancyLunchables,
    wrap,
    parfait,
    smoothie,
    bananaBread,
    pretzel,
    cheesecake,
    chocolateChipCookies,
    tedLassoBiscuits,
    brownies,
    noBakeCookie,
    riceCrispyBall, // TODO: add
    graveyardDessert,
    smores,
]

module.exports = recipes;