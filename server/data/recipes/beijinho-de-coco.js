// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, REHEAT_METHODS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TYPES } = require('./constants');
const {  } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Beijinjo De Coco',
    name: 'Beijinjo De Coco',
    img: '',
    available: false,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.BRAZILIAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.FINGER_FOOD,TYPES.DESSERT],
    yields: { amount: '', unit: '' },
    prepTime: { amount: '', unit: '' },
    cookTime: { amount: '', unit: '' },
    waitTime: { amount: '', unit: '' },
    websites: [
        { 
            label: 'Beijinjo De Coco', 
            link: 'https://braziliankitchenabroad.com/beijinho-de-coco-brazilian-coconut-balls-recipe-with-condensed-milk/',
            authors: ['Aline Shaw'],
            finder: 'Sarah Miller', 
        }
    ],
    ingredients: [
        { ...GENRES, amount: '', unit: '', additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: '' },
    ],
    supplies: [
        { name: '' },
    ],
    directions: [
        { step: ``, section: '' },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};