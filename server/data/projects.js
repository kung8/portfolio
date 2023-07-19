const deadstock = '../assets/Projects/Deadstock/DeadStock.png';
const community = '../assets/Projects/Deadstock/community.png';
const chatlist = '../assets/Projects/Deadstock/chatlist.png';
const favorites = '../assets/Projects/Deadstock/favorites.png';
const friends = '../assets/Projects/Deadstock/friends.png';
const profile = '../assets/Projects/Deadstock/profile.png';

const chatterbox = '../assets/Projects/Chatterbox/Chatterbox.png';
const sidebar = '../assets/Projects/Chatterbox/sidebar.png';
const alllist = '../assets/Projects/Chatterbox/alllist.png';
const editgroup = '../assets/Projects/Chatterbox/editgroup.png';
const editprofile = '../assets/Projects/Chatterbox/editprofile.png';
const indchat = '../assets/Projects/Chatterbox/indchat.png';
const loginchat = '../assets/Projects/Chatterbox/loginchat.png';
const otherprofile = '../assets/Projects/Chatterbox/otherprofile.png';
const searchuser = '../assets/Projects/Chatterbox/searchuser.png';
const groupchat = '../assets/Projects/Chatterbox/groupchat.png';
const startchat = '../assets/Projects/Chatterbox/startchat.png';

const blackjack = '../assets/Projects/MiniGames/BlackJack.png';
const cards = '../assets/Projects/MiniGames/Cards.png';
const I = '../assets/Projects/MiniGames/I.png';
const de = '../assets/Projects/MiniGames/De.png';
const clare = '../assets/Projects/MiniGames/Clare.png';
const victory = '../assets/Projects/MiniGames/Victory.png';
const ttt = '../assets/Projects/MiniGames/TicTacToe.png';
const war = '../assets/Projects/MiniGames/war.png';
const War = '../assets/Projects/MiniGames/War2.png';

const four04 = '../assets/Projects/YourMove/404.png';
const chat = '../assets/Projects/YourMove/chat.png';
const chord = '../assets/Projects/YourMove/chord-dash.png';
const codebreaker = '../assets/Projects/YourMove/codebreaker.png';
const guitarDesktop = '../assets/Projects/YourMove/guitar-desktop.png';
const guitarMobile = '../assets/Projects/YourMove/guitar-mobile.png';
const instructions = '../assets/Projects/YourMove/instructions.png';
const lobby = '../assets/Projects/YourMove/lobby.png';
const loginYM = '../assets/Projects/YourMove/login.png';
const mainDash = '../assets/Projects/YourMove/main-dashboard.png';
const navToggle = '../assets/Projects/YourMove/nav-toggle.png';
const recipe = '../assets/Projects/YourMove/recipe.png';
const registerYM = '../assets/Projects/YourMove/register.png';
const subjectDash = '../assets/Projects/YourMove/subject-dashboard.png';

const adminBottom = '../assets/Projects/FatBoyCatering/admin-page-bottom.png';
const adminMenu = '../assets/Projects/FatBoyCatering/admin-page-menu-item-edit.png';
const adminMenuNoSelection = '../assets/Projects/FatBoyCatering/admin-page-menu-item-edit-no-selection.png';
const cart = '../assets/Projects/FatBoyCatering/cart-page.png';
const editMenuItem = '../assets/Projects/FatBoyCatering/edit-menu-item-page.png';
const menuItem = '../assets/Projects/FatBoyCatering/menu-item-page.png';
const menuCollapsed = '../assets/Projects/FatBoyCatering/menu-page-collapsed.png';
const menuExpanded = '../assets/Projects/FatBoyCatering/menu-page-expanded.png';
const status = '../assets/Projects/FatBoyCatering/status-page.png';
const statusFiltered = '../assets/Projects/FatBoyCatering/status-page-filtered.png';
const statusNothingToDisplay = '../assets/Projects/FatBoyCatering/status-page-nothing-to-display.png';

const homePage = '../assets/Projects/BuddingAcorn/home.png';

const projects = [
    {
        organization: 'DeadStock',
        description: 'A shoe collection social media SPA',
        dateRange: ['Apr 2019', 'Apr 2019'],
        images: [deadstock, community, chatlist, favorites, friends, profile],
        bullets: [
            "This group project was an incredible experience. I was blessed to work with Joseph Hamblin, Matias Perez, and Samantha Jeet. I learned a ton about working with others especially having to interact with different ways of coding and how to adapt my way. There were differences in styling and coding methods but we learned to trust each other.This was my first team full-stack app. I used most of the same technologies = previous projects but had a chance to further dive into Amazon S3 and Sockets. I took ownership of the image uploads and the chat functionality. I enjoyed learning Chartjs which working with the data was a little tricky.",
        ],
        chips: [
            'React JS',
            'Sockets',
            'Material UI',
            'AWS S3',
            'Chartjs'
        ],
        url: null,
        domain: false,
        hosted: false,
        show: false,
    },
    {
        organization: 'Chatterbox',
        description: 'SPA chat app to connect individuals and groups to practice real-live updates',
        dateRange: ['May 2019', 'Jun 2019'],
        images: [groupchat, chatterbox, sidebar, alllist, editgroup, editprofile, indchat, loginchat, otherprofile, searchuser, startchat],
        bullets: [
            "Some valuable things that I learned = this project was Sockets cannot be invoked in multiple components and Styled-Components rock! There were issues with my chat functionality initially due to its unexpected behavior of establishing three separate socket instances so it was not sending the message to the proper connection.",
        ],
        chips: [
            'Sockets',
            'Styled Components',
        ],
        url: null,
        domain: false,
        hosted: false,
        show: false,
    },
    {
        organization: 'Mini Games',
        description: 'First React-Native app to build a mini game platform',
        dateRange: ['Jul 2019', 'Jul 2019'],
        images: [cards, I, de, clare, War, victory, war, blackjack, ttt],
        bullets: [
            "Learned differences in React-Native and built own logic for game play.",
        ],
        chips: [
            'React Native',
            'React Navigation',
            'Toast',
        ],
        url: null,
        domain: false,
        hosted: false,
        show: false,
    },
    {
        organization: 'Your Move',
        description: 'SPA to simplify learning and making it fun along the way.',
        dateRange: ['Mar 2020', 'Sep 2020'],
        images: [mainDash, subjectDash, recipe, four04, chord, guitarDesktop, guitarMobile, loginYM, registerYM, codebreaker, lobby, chat, instructions, navToggle],
        bullets: [
            "I've learned a lot about simple layouts and consistent designs. I've practiced good UX principles with this SPA such as making sure buttons are identifable, selecting contrasting colors, and keeping page layouts user-friendly. Implemented consistent page layouts with adaptable features and components. Used sockets to allow two-player game play. Independently styled pages and components to allow unique user experience and ensuring mobile responsiveness.",
        ],
        chips: [
            'React JS',
            'Sass',
            'Sockets',
            'Toast',
            'Express Session',
            'Bcryptjs',
            'Redux',
            'Redux Persist',
            'React Router Dom',
        ],
        url: 'https://yourmove.dev',
        domain: true,
        hosted: true,
        show: true,
    },
    {
        organization: 'Fat Boy Catering',
        description: 'SPA for client to manage menu options, allow his customers to place orders, and track and send messages in real time.',
        dateRange: ['Mar 2021', 'Jun 2021'],
        images: [adminBottom, adminMenu, adminMenuNoSelection, cart, editMenuItem, menuItem, menuCollapsed, menuExpanded, status, statusFiltered, statusNothingToDisplay],
        bullets: [
            "This app builds on basic socket connections, React components, personal sass styling and animations, and engineered with an increased focus on admin and non-admin UX/UI. I got to practice organizing data = the backend and formatted it to display correctly in the frontend. I managed state with React's useState and the browser's sessionStorage and cookies.",
        ],
        chips: [
            'React JS',
            'Sass',
            'Sockets',
            'Toast',
            'Bcryptjs',
            'React Router Dom',
            'Lodash',
            'Twilio',
        ],
        // url: 'https://aladonerecipes.com',
        domain: false,
        hosted: false,
        show: true,
    },
    {
        organization: 'Budding Acorn',
        description: 'SPA to showcase my products and provide a direct platform in which customers can interact with me.',
        dateRange: ['Nov 2022', 'Present'],
        images: [homePage],
        bullets: [
            "My personal passion project that I wanted to showcase my products and provide a direct platform in which customers can interact with me. I initially built this out to handle online purchase orders directly instead of going through another checkout platform like Shopify. However, since I am working full-time I decided I didn't want to manage inventory in multiple places and deal with shipping and packaging myself.",
        ],
        chips: [
            'React JS',
            'Sass',
            'React Query',
            'Dayjs',
            'Toast',
            'Express',
            'Nodemailer',
            'Lodash',
            'Massive',
            'dotenv',
            'Xlsx',
        ],
        url: 'https://buddingacorn.dev',
        domain: true,
        hosted: true,
        show: true,
    },
];

module.exports = projects;