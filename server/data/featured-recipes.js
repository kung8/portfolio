const antsOnALog = require("./recipes/ants-on-a-log");
const bakedMacaroniAndCheese = require("./recipes/baked-macaroni-and-cheese");
const bbqPulledPorkAndFixins = require("./recipes/bbq-pulled-pork-and-fixins");
const beefStroganoff = require("./recipes/beef-stroganoff");
const bigMac = require("./recipes/big-mac");
const biscoffCookiePie = require("./recipes/biscoff-cookie-pie");
const biscuitsAndGravy = require("./recipes/biscuits-and-gravy");
const butteredCorn = require("./recipes/buttered-corn");
const buttermilkSyrup = require("./recipes/buttermilk-syrup");
const cafeRioBowl = require("./recipes/cafe-rio-bowl");
const caramelizedMushroom = require("./recipes/caramelized-mushroom");
const chickenAlfredo = require("./recipes/chicken-alfredo");
const chickenKebab = require("./recipes/chicken-kebabs");
const chineseBao = require("./recipes/chinese-bao");
const chineseCashewChicken = require("./recipes/chinese-cashew-chicken");
const churros = require("./recipes/churros");
const crescentRolls = require("./recipes/crescent-rolls");
const englishScones = require("./recipes/english-scones");
const frenchCrepe = require("./recipes/french-crepe");
const germanSchnitzel = require("./recipes/german-schnitzel");
const greekGyros = require("./recipes/greek-gyros");
const guacamole = require("./recipes/guacamole");
const hawaiianGlazedHam = require("./recipes/hawaiian-glazed-ham");
const indianButterChicken = require("./recipes/indian-butter-chicken");
const jambalaya = require("./recipes/jambalaya");
const japaneseChickenKatsu = require("./recipes/japanese-chicken-katsu");
const koreanFriedChicken = require("./recipes/korean-fried-chicken");
const lemonChickenRamen = require("./recipes/lemon-chicken-ramen");
const malaysianSatay = require("./recipes/malaysian-satay");
const padThai = require("./recipes/pad-thai");
const paoDeQueijo = require("./recipes/pao-de-queijo");
const peruvianAjiDeGallina = require("./recipes/peruvian-aji-de-gallina");
const peruvianChicken = require("./recipes/peruvian-chicken");
const piriPiriChickenBowl = require("./recipes/piri-piri-chicken-bowl");
const pizza = require("./recipes/pizza");
const roastedPorkBelly = require("./recipes/roasted-pork-belly");
const rosemaryLemonade = require("./recipes/rosemary-lemonade");
const singaporeanChickenRice = require("./recipes/singaporean-chicken-rice");
const swedishMeatballs = require("./recipes/swedish-meatballs");
const cherryAndCreamCheeseKolaches = require("./recipes/cherry-and-cream-cheese-kolaches");
const vietnameseFreshSpringRolls = require("./recipes/vietnamese-fresh-spring-rolls");
const vietnameseStuffedTomatoes = require("./recipes/vietnamese-stuffed-tomatoes");
const waffles = require("./recipes/waffles");

const recipeCategories = require('./recipes/constants');
const categories = recipeCategories.CATEGORIES;
const genres = recipeCategories.GENRES;
const recipes = require('./recipes');
const ingredients = recipes
    .filter(recipe => recipe.available)
    .flatMap(recipe => recipe.ingredients)
    .filter((ingredient, index, arr) =>
        arr.findIndex(i => i.name === ingredient.name) === index)
    .sort((a, b) => a?.name?.localeCompare(b?.name))
    .reduce((acc, ingredient) => {
        acc[ingredient.name] = ingredient;
        return acc;
    }, {});

const featured = {
    CATEGORIES: {
        [categories.BREAKFAST]: waffles,
        [categories.LUNCH]: japaneseChickenKatsu,
        [categories.DINNER]: chickenAlfredo,
        [categories.APPETIZER]: chineseBao,
        [categories.SIDE_DISH]: butteredCorn,
        [categories.SNACK]: antsOnALog,
        [categories.DESSERT]: biscoffCookiePie,
        [categories.DRINK]: rosemaryLemonade,
        [categories.SAUCE]: buttermilkSyrup,
        [categories.TOPPING]: caramelizedMushroom,
        [categories.DRESSING]: undefined,
        [categories.DIP]: guacamole,
    },
    GENRES: {
        [genres.AFRICAN]: piriPiriChickenBowl,
        [genres.AMERICAN]: bakedMacaroniAndCheese,
        [genres.ASIAN]: chineseCashewChicken,
        [genres.AUSTRIAN]: crescentRolls,
        [genres.BBQ]: bbqPulledPorkAndFixins,
        [genres.BRAZILIAN]: paoDeQueijo,
        [genres.BRITISH]: englishScones, // TODO: use fishAndChips once that's ready
        [genres.CAJUN]: jambalaya,
        [genres.CAMBODIAN]: vietnameseStuffedTomatoes,
        [genres.CHINESE]: roastedPorkBelly,
        [genres.CREOLE]: undefined,
        [genres.CZECH]: cherryAndCreamCheeseKolaches,
        [genres.EGYPTIAN]: undefined,
        [genres.EUROPEAN]: undefined,
        [genres.FILIPINO]: undefined,
        [genres.FRENCH]: frenchCrepe, // TODO: use croissants once that's ready
        [genres.GERMAN]: germanSchnitzel,
        [genres.GREEK]: greekGyros,
        [genres.HAWAIIAN]: hawaiianGlazedHam,
        [genres.INDIAN]: indianButterChicken,
        [genres.INDONESIAN]: undefined,
        [genres.ITALIAN]: pizza,
        [genres.JAPANESE]: lemonChickenRamen,
        [genres.KOREAN]: koreanFriedChicken,
        [genres.LATIN]: peruvianAjiDeGallina,
        [genres.MALAYSIAN]: malaysianSatay,
        [genres.MEXICAN]: cafeRioBowl,
        [genres.MIDDLE_EASTERN]: chickenKebab,
        [genres.MONGOLIAN]: undefined,
        [genres.MOROCCAN]: undefined,
        [genres.PERUVIAN]: peruvianChicken,
        [genres.POLYNESIAN]: undefined, // TODO: use kalua pork once that's ready
        [genres.PORTUGUESE]: undefined, // TODO: use pastel de nata once that's ready
        [genres.RUSSIAN]: beefStroganoff,
        [genres.SINGAPOREAN]: singaporeanChickenRice,
        [genres.SOUTHERN]: biscuitsAndGravy,
        [genres.SPANISH]: churros, // TODO: use paella once that's ready
        [genres.SWEDISH]: swedishMeatballs,
        [genres.TAIWANESE]: undefined,
        [genres.THAI]: padThai,
        [genres.TURKISH]: undefined,
        [genres.VIETNAMESE]: vietnameseFreshSpringRolls,
        [genres.WESTERN]: bigMac,
    },
    INGREDIENTS: ingredients,
};

module.exports = featured;
