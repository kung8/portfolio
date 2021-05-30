import React, { useState, useEffect } from 'react';
import Bako from '../assets/bako.jpg';

import houser from '../assets/Houser/Houser.png';
import wizard1 from '../assets/Houser/Wizard1.png';
import wizard2 from '../assets/Houser/Wizard2.png';
import wizard3 from '../assets/Houser/Wizard3.png';

import helo from '../assets/Helo/Helo.png';
import login from '../assets/Helo/login.png';
import list from '../assets/Helo/list.png';
import searchother from '../assets/Helo/searchOther.png';
import searchown from '../assets/Helo/searchOwn.png';
import createpost from '../assets/Helo/createpost.png';

import marketin from '../assets/Marketin/MarketIn.png';
import chats from '../assets/Marketin/chats.png';
import contacts from '../assets/Marketin/contacts.png';
import search from '../assets/Marketin/search.png';
import services from '../assets/Marketin/services.png';

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
// import statusNothingToDisplay from '../assets/FatBoyCatering/status-page-nothing-to-display.png';

const Houser = {
    id: 1,
    name: 'Houser',
    url: null,
    tech: ['React-Router-Dom', 'Redux'],
    images: [houser, wizard1, wizard2, wizard3],
    desc: 'Housing display app to practice redux and wizard forms',
    domain: false,
    date: 'Feb 2019',
    hosted: false,
    lessons: "Some valuable things that I learned from this project was understanding the management of state and props using Redux as I had to reconfigure my components from just passing props between each other. I have gotten a better grasp of state and props and Redux. I had the chance to learn about wizards (no not about J.K. Rowling's magical world) but the set up for a form to be filled out using routing.Through vanilla CSS, I replicated the style-design of this project."
}
const Helo = {
    id: 2,
    name: 'Helo',
    url: null,
    tech: ['React-Router-Dom', 'Bcryptjs', 'Express-Session', 'Redux', 'Redux-Persist'],
    images: [helo, login, list, searchother, searchown, createpost],
    desc: 'Blog posting app practicing authentication, redux, session & routing',
    domain: false,
    date: 'Feb 2019',
    hosted: false,
    lessons: "I learn about linear-gradients and other basic styling techniques can help embellish the application. This was another project that I had replicated the styling based off another site.I incorporated additional technologies including bcryptjs for authentication, express-session for keeping a user on session, redux and redux-persist to pass state/props between components without having to worry about refreshing the page."
}
const MarketIn = {
    id: 3,
    name: 'MarketIn',
    url: null,
    tech: ['Sockets', 'Stripe', '3rd Party API', 'Amazon S3', 'Dropzone', 'Express-Session', 'Bcryptjs', 'Redux', 'Redux-Persist', 'React-Router-Dom'],
    images: [marketin, chats, contacts, search, services],
    desc: 'Professional portfolio SPA combined with an ecommerce twist',
    domain: false,
    date: 'Mar 2019',
    hosted: false,
    lessons: "I really enjoyed applying all these different technologies. My favorite parts were taking a desired goal such as the Chat component and figuring out how to display the different colors with the date and time formatted how I wanted it and learning how to use this.props.match and this.props.history. After the project, I learned that I unnecessarily used Redux in places that I didn't need to use it.This app was my first full-stack app which could definitely be improved upon but it was where I solidified my understanding of some foundational concepts. The main takeaways from this project would probably be understanding the flow of data and learning how to console log correctly."
}
const DeadStock = {
    id: 4,
    name: 'DeadStock',
    url: null,
    tech: ['Sockets', 'Material-UI', 'AWS S3'],
    images: [deadstock, community, chatlist, favorites, friends, profile],
    desc: 'A shoe collection social media SPA',
    domain: false,
    date: 'Apr 2019',
    hosted: false,
    lessons: "This group project was an incredible experience. I was blessed to work with Joseph Hamblin, Matias Perez, and Samantha Jeet. I learned a ton about working with others especially having to interact with different ways of coding and how to adapt my way. There were differences in styling and coding methods but we learned to trust each other.This was my first team full-stack app. I used most of the same technologies from previous projects but had a chance to further dive into Amazon S3 and Sockets. I took ownership of the image uploads and the chat functionality. I enjoyed learning Chartjs which working with the data was a little tricky."
}
const Chatterbox = {
    id: 5,
    name: 'Chatterbox',
    url: null,
    tech: ['Sockets', 'Styled-Components'],
    images: [groupchat, chatterbox, sidebar, alllist, editgroup, editprofile, indchat, loginchat, otherprofile, searchuser, startchat],
    desc: 'SPA chat app to connect individuals and groups to practice real-live updates',
    domain: false,
    date: 'Jun 2019',
    hosted: false,
    lessons: "Some valuable things that I learned from this project was Sockets cannot be invoked in multiple components and Styled-Components rock! There were issues with my chat functionality initially due to its unexpected behavior of establishing three separate socket instances so it was not sending the message to the proper connection."
}
const MiniGames = {
    id: 6,
    name: 'Mini Games',
    url: null,
    tech: ['React-Native', 'React-Navigation', 'Toast'],
    images: [cards, I, de, clare, War, victory, war, blackjack, ttt],
    desc: 'First React-Native app to build a mini game platform',
    domain: false,
    date: 'July 2019',
    hosted: false,
    lessons: "Learned differences in React-Native and built own logic for game play."
}
const YourMove = {
    id: 7,
    name: 'Your Move',
    url: 'https://yourmove.dev',
    tech: ['Sass', 'Sockets', 'Toast', 'Express-Session', 'Bcryptjs', 'Redux', 'Redux-Persist', 'React-Router-Dom'],
    images: [mainDash, subjectDash, recipe, four04, chord, guitarDesktop, guitarMobile, loginYM, registerYM, codebreaker, lobby, chat, instructions, navToggle],
    desc: 'SPA to simplify learning and making it fun along the way.',
    domain: false,
    date: 'Sep 2020',
    hosted: false,
    lessons: "I've learned a lot about simple layouts and consistent designs. I've practiced good UX principles with this SPA such as making sure buttons are identifable, selecting contrasting colors, and keeping page layouts user-friendly. Implemented consistent page layouts with adaptable features and components. Used sockets to allow two-player game play. Independently styled pages and components to allow unique user experience and ensuring mobile responsiveness."
}
const FatBoyCatering = {
    id: 8,
    name: 'Fat Boy Catering',
    url: 'https://aladonerecipes.com',
    tech: ['Sass', 'Sockets', 'Toast', 'Bcryptjs', 'React-Router-Dom', 'Lodash'],
    images: [adminBottom, adminMenu, adminMenuNoSelection, cart, editMenuItem, menuItem, menuCollapsed, menuExpanded, status, statusFiltered, 
        // statusNothingToDisplay
    ],
    desc: 'SPA for client to manage menu options, allow his customers to place orders, and track and send messages in real time.',
    domain: true,
    date: 'May 2021',
    hosted: true,
    lessons: "This app builds on basic socket connections, React components, personal sass styling and animations, and engineered with an increased focus on admin and non-admin UX/UI. I got to practice organizing data from the backend and formatted it to display correctly in the frontend. This app does not utilize Redux because I didn't think it needed a global state management, but ended up accessing sessionStorage and cookies (which is what redux is doing under the hood)."
}


const projects = [FatBoyCatering, YourMove, MiniGames, Chatterbox, DeadStock, MarketIn, Helo, Houser];

export default function () {
    const [posArr, updatePosArr] = useState([]);
    const [showModal, updateShow] = useState(false);

    useEffect(() => {
        determineArr();
        // eslint-disable-next-line
    }, []);

    const determineArr = () => {
        let copy = [...posArr]
        projects.forEach(project => {
            let length = project.images.length;
            copy.push({ length, position: 0 });
            updatePosArr(copy);
        })
    }

    const handleLeft = (projectNum, position) => {
        let copy = [...posArr];
        if (position > 0) {
            copy[projectNum].position = position - 1;
            updatePosArr(copy);
        } else {
            copy[projectNum].position = copy[projectNum].length - 1;
            updatePosArr(copy);
        }
    }

    const handleRight = (projectNum, position) => {
        let copy = [...posArr];
        if (copy[projectNum].length > position + 1) {
            copy[projectNum].position = position + 1;
            updatePosArr(copy);
        } else {
            copy[projectNum].position = 0;
            updatePosArr(copy);
        }
    }

    const handleDotSelected = (projectNum, position) => {
        let copy = [...posArr];
        copy[projectNum].position = position;
        updatePosArr(copy);
    }

    const updateModal = (project) => {
        const modal = document.querySelector('.modal-message');
        let techStr = '';
        project.tech.forEach(tech => techStr += `${tech}, `);
        const message = `<h1>${project.name}</h1><p><strong>Date:</strong> ${project.date}</p><br/><p><strong>Description:</strong> ${project.desc}</p><br/><p><strong>Lesson:</strong> ${project.lessons}</p><br/><p><strong>Tech:</strong> ${techStr}</p>`;
        modal.innerHTML = message;
        let top = document.querySelector('.general-projects-container').getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        console.log(top - (screenHeight * 0.5));
        window.scrollBy({
            top: top - (screenHeight * 0.16),
            left: 0,
            behavior: 'smooth'
        });
        updateShow(true);

        document.querySelector('header').style.display = 'none';
    }

    const closeModal = () => {
        document.querySelector('header').style.display = 'flex';
        updateShow(false)
    }

    return (
        <div className="projects-page flex" style={{ backgroundImage: `url(${Bako})` }}>
            <div className="projects-inner-container set-top p-rel" style={{ display: showModal && 'none' }}>
                <h1>Projects:</h1>
                <div className="general-projects-container">
                    {projects.map((project, index) => {
                        let position = posArr[index]?.position || 0;
                        return (
                            <div key={project.id} className="individual-project">
                                <h4>{project.name}</h4>
                                <div className="img-container">
                                    <img className="project-img" src={project.images[position]} alt={project.name + index} />
                                    <div className="scroll-dots-container">
                                        {project.images.map((img, i) => {
                                            return (
                                                <div onClick={() => handleDotSelected(index, i)} key={project.name + '-img-' + i} className={`selected-ring ${position === i && 'selected'} pointer`}>
                                                    <div className='scroll-dot'></div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="left-arrow fas fa-chevron-right pointer" onClick={() => handleLeft(index, position)}></div>
                                    <div className="right-arrow fas fa-chevron-right pointer" onClick={() => handleRight(index, position)}></div>
                                    <div className="open-btn" onClick={() => updateModal(project)}>Open</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {showModal &&
                <div className="modal-wrapper"></div>
            }
            <div className={`project-modal ${!showModal && 'none'}`}>
                <div className="close-btn p-abs" onClick={() => closeModal()}>x</div>
                <div className="modal-message"></div>
            </div>
        </div>
    )
}