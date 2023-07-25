const playingCard = '../assets/Components/8-of-hearts.png';
const guitar = '../assets/Components/guitar.png';
const battleship = '../assets/Components/battleship.png';
const periodicTable = '../assets/Components/periodic-table.png';
// const kronos = '../assets/Components/kronos.png';
const selector = '../assets/Components/selector.png';
const genericScoreSheet = '../assets/Components/generic-score-sheet.png';

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
        url: 'https://yourmove.dev/#/science/chemistry',
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
        organization: 'Battleship',
        bullets: [
            'E-5. You sunk my battleship! The ships were designed with css and the user can orient their ships vertically or horizontally on the board. Once the user is ready they can start playing the game against another player. Sockets is configured for this game but I still need to revise the rooms so it can tracked without needing users to create an account.',
        ],
        chips: [
            'React JS',
            'Toast',
            'Sockets',
            'Redux',
            'Sass',
        ],
        images: [battleship],
        url: 'https://yourmove.dev/#/game/Battleship',
        hosted: true,
        show: true,
    },
    {
        organization: 'Guitar',
        bullets: [
            'Combining my love of music and coding, I designed a guitar with css and some selectors to help users learn basic chords and notes.',
        ],
        chips: [
            'React JS',
            'Sass',
        ],
        images: [guitar],
        url: 'https://yourmove.dev/#/music/instruments/guitar',
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
        show: false,
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
        url: 'https://buddingacorn.dev/#/resources/1',
        hosted: true,
        show: true,
    },
];

module.exports = components;

