const battleship = '../assets/Components/battleship.png';
const connect4 = '../assets/Components/connect-4.png';
const genericScoreSheet = '../assets/Components/generic-score-sheet.png';
const guitar = '../assets/Components/guitar.png';
const periodicTable = '../assets/Components/periodic-table.png';
const playingCard = '../assets/Components/8-of-hearts.png';
// const kronos = '../assets/Components/kronos.png';
const selector = '../assets/Components/selector.png';
const sinker = '../assets/Components/sinker.png';

const components = [
    {
        organization: 'Periodic Table',
        bullets: [
            'Boom. I created a periodic table with css. This is a simple display of the elements and some basic properties of each element.',
        ],
        chips: [
            'React JS',
            'Axios',
            'Sass',
        ],
        images: [periodicTable],
        url: 'https://buddingacorn.dev/#/resources/science/chemistry',
        hosted: true,
        show: true,
    },
    // {
    //     organization: 'Disney\'s Kronos Program',
    //     bullets: [
    //         'After watching The Incredibles, I decided it would be fun to code out the Kronos program that Mr. Incredible uses to learn Syndrome\'s secret.',
    //     ],
    //     chips: [
    //         'React JS',
    //         'Sass',
    //     ],
    //     images: [kronos],
    //     url: 'https://kevinung8.com/#/kronos',
    //     hosted: true,
    //     show: false,
    // },
    {
        organization: 'Guitar',
        bullets: [
            'Combining my love of music and coding, I designed a guitar with css and some selectors to help users learn basic chords and notes.',
        ],
        chips: [
            'React JS',
            'Sass',
            'Axios',
        ],
        images: [guitar],
        url: 'https://buddingacorn.dev/#/resources/guitar',
        hosted: true,
        show: true,
    },
    {
        organization: 'Playing Cards',
        bullets: [
            'Feeling lucky? Hit me! I designed the cards and created a little game of blackjack.',
        ],
        chips: [
            'React JS',
            'React Redux',
            'Sass',
        ],
        images: [playingCard],
        url: 'https://yourmove.dev/#/game/Black%20Jack',
        hosted: true,
        show: true,
    },
    {
        organization: 'List Selector',
        bullets: [
            'Have you ever had a hard time deciding what to eat or choosing the order of a group? This app was made to help make those decisions easier.',
        ],
        chips: [
            'React JS',
            'Sass',
            'CSS',
        ],
        images: [selector],
        url: 'https://kevinung8.com/#/selector',
        hosted: true,
        show: true,
        borderAdded: true,
    },
    {
        organization: 'Generic Score Sheet',
        bullets: [
            'After a long day or week full of responsibilities, the last thing we want to do is more math to keep track of scores.',
        ],
        chips: [
            'React JS',
            'Sass',
            'Lodash'
        ],
        images: [genericScoreSheet],
        url: 'https://buddingacorn.dev/#/resources/recreation/scoresheet',
        hosted: true,
        show: true,
    },
    {
        organization: 'Battleship',
        bullets: [
            'E-5. You sunk my battleship! The ships were designed with css and the user can orient their ships vertically or horizontally on the board. Play against your friends or your enemies. Sockets is configured for this game so you can play with your friends in real time.',
        ],
        chips: [
            'React JS',
            'Toast',
            'Sockets',
            'Sass',
            'Crypto JS'
        ],
        images: [battleship],
        url: 'https://buddingacorn.dev/#/products/games/14',
        hosted: true,
        show: true,
    },
    {
        organization: 'Sinker',
        bullets: [
            'The reusable keyboard component has been used in a few of my apps and it\'s been amazing seeing it evolve and still do all of the things that it does. The water filling is using a basic css keyframe and animation. Enjoy this mental exercise to guess the random word.',
        ],
        chips: [
            'React JS',
            'Toast',
            'Sass',
        ],
        images: [sinker],
        url: 'https://buddingacorn.dev/#/products/games/17',
        hosted: true,
        show: true,
    },
    {
        organization: 'Connect 4',
        bullets: [
            'This one was a fun one to build. I initially built some recursion logic for Tic Tac Toe, with Connect 4 in mind. It was really cool to drop in the Connect 4 component and alter a few things to make the basic game play work.',
        ],
        chips: [
            'React JS',
            'Toast',
            'Sockets',
            'Sass',
            'Crypto JS'
        ],
        images: [connect4],
        url: 'https://buddingacorn.dev/#/products/games/19',
        hosted: true,
        show: true,
    },
];

module.exports = components;

