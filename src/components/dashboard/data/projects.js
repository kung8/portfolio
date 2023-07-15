import deadstock from '../assets/Deadstock/DeadStock.png';
import community from '../assets/Deadstock/community.png';
import chatlist from '../assets/Deadstock/chatlist.png';
import favorites from '../assets/Deadstock/favorites.png';
import friends from '../assets/Deadstock/friends.png';
import profile from '../assets/Deadstock/profile.png';

import chatterbox from '../assets/Chatterbox/Chatterbox.png';
import sidebar from '../assets/Chatterbox/sidebar.png';
import alllist from '../assets/Chatterbox/alllist.png';
import editgroup from '../assets/Chatterbox/editgroup.png';
import editprofile from '../assets/Chatterbox/editprofile.png';
import indchat from '../assets/Chatterbox/indchat.png';
import loginchat from '../assets/Chatterbox/loginchat.png';
import otherprofile from '../assets/Chatterbox/otherprofile.png';
import searchuser from '../assets/Chatterbox/searchuser.png';
import groupchat from '../assets/Chatterbox/groupchat.png';
import startchat from '../assets/Chatterbox/startchat.png';

import blackjack from '../assets/MiniGames/BlackJack.png';
import cards from '../assets/MiniGames/Cards.png';
import I from '../assets/MiniGames/I.png';
import de from '../assets/MiniGames/De.png';
import clare from '../assets/MiniGames/Clare.png';
import victory from '../assets/MiniGames/Victory.png';
import ttt from '../assets/MiniGames/TicTacToe.png';
import war from '../assets/MiniGames/war.png';
import War from '../assets/MiniGames/War2.png';

import four04 from '../assets/YourMove/404.png';
import chat from '../assets/YourMove/chat.png';
import chord from '../assets/YourMove/chord-dash.png';
import codebreaker from '../assets/YourMove/codebreaker.png';
import guitarDesktop from '../assets/YourMove/guitar-desktop.png';
import guitarMobile from '../assets/YourMove/guitar-mobile.png';
import instructions from '../assets/YourMove/instructions.png';
import lobby from '../assets/YourMove/lobby.png';
import loginYM from '../assets/YourMove/login.png';
import mainDash from '../assets/YourMove/main-dashboard.png';
import navToggle from '../assets/YourMove/nav-toggle.png';
import recipe from '../assets/YourMove/recipe.png';
import registerYM from '../assets/YourMove/register.png';
import subjectDash from '../assets/YourMove/subject-dashboard.png';

import adminBottom from '../assets/FatBoyCatering/admin-page-bottom.png';
import adminMenu from '../assets/FatBoyCatering/admin-page-menu-item-edit.png';
import adminMenuNoSelection from '../assets/FatBoyCatering/admin-page-menu-item-edit-no-selection.png';
import cart from '../assets/FatBoyCatering/cart-page.png';
import editMenuItem from '../assets/FatBoyCatering/edit-menu-item-page.png';
import menuItem from '../assets/FatBoyCatering/menu-item-page.png';
import menuCollapsed from '../assets/FatBoyCatering/menu-page-collapsed.png';
import menuExpanded from '../assets/FatBoyCatering/menu-page-expanded.png';
import status from '../assets/FatBoyCatering/status-page.png';
import statusFiltered from '../assets/FatBoyCatering/status-page-filtered.png';
import statusNothingToDisplay from '../assets/FatBoyCatering/status-page-nothing-to-display.png';

import homePage from '../assets/BuddingAcorn/home.png';

export const projects = [
    {
        organization: 'DeadStock',
        description: 'A shoe collection social media SPA',
        dateRange: ['Apr 2019', 'Apr 2019'],
        images: [deadstock, community, chatlist, favorites, friends, profile],
        bullets: [
            "This group project was an incredible experience. I was blessed to work with Joseph Hamblin, Matias Perez, and Samantha Jeet. I learned a ton about working with others especially having to interact with different ways of coding and how to adapt my way. There were differences in styling and coding methods but we learned to trust each other.This was my first team full-stack app. I used most of the same technologies from previous projects but had a chance to further dive into Amazon S3 and Sockets. I took ownership of the image uploads and the chat functionality. I enjoyed learning Chartjs which working with the data was a little tricky.",
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
            "Some valuable things that I learned from this project was Sockets cannot be invoked in multiple components and Styled-Components rock! There were issues with my chat functionality initially due to its unexpected behavior of establishing three separate socket instances so it was not sending the message to the proper connection.",
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
            "This app builds on basic socket connections, React components, personal sass styling and animations, and engineered with an increased focus on admin and non-admin UX/UI. I got to practice organizing data from the backend and formatted it to display correctly in the frontend. This app does not utilize Redux because I didn't think it needed a global state management, but ended up accessing sessionStorage and cookies (which is what redux is doing under the hood).",
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