import React, { useState, useEffect } from 'react';
import Bako from '../Assets/bako.jpg';


import deadstock from '../Assets/Deadstock/DeadStock.png';
import community from '../Assets/Deadstock/community.png';
import chatlist from '../Assets/Deadstock/chatlist.png';
import favorites from '../Assets/Deadstock/favorites.png';
import friends from '../Assets/Deadstock/friends.png';
import profile from '../Assets/Deadstock/profile.png';

import chatterbox from '../Assets/Chatterbox/Chatterbox.png';
import sidebar from '../Assets/Chatterbox/sidebar.png';
import alllist from '../Assets/Chatterbox/alllist.png';
import editgroup from '../Assets/Chatterbox/editgroup.png';
import editprofile from '../Assets/Chatterbox/editprofile.png';
import indchat from '../Assets/Chatterbox/indchat.png';
import loginchat from '../Assets/Chatterbox/loginchat.png';
import otherprofile from '../Assets/Chatterbox/otherprofile.png';
import searchuser from '../Assets/Chatterbox/searchuser.png';
import groupchat from '../Assets/Chatterbox/groupchat.png';
import startchat from '../Assets/Chatterbox/startchat.png';

import blackjack from '../Assets/MiniGames/BlackJack.png';
import cards from '../Assets/MiniGames/Cards.png';
import I from '../Assets/MiniGames/I.png';
import de from '../Assets/MiniGames/De.png';
import clare from '../Assets/MiniGames/Clare.png';
import victory from '../Assets/MiniGames/Victory.png';
import ttt from '../Assets/MiniGames/TicTacToe.png';
import war from '../Assets/MiniGames/war.png';
import War from '../Assets/MiniGames/War2.png';

import four04 from '../Assets/YourMove/404.png';
import chat from '../Assets/YourMove/chat.png';
import chord from '../Assets/YourMove/chord-dash.png';
import codebreaker from '../Assets/YourMove/codebreaker.png';
import guitarDesktop from '../Assets/YourMove/guitar-desktop.png';
import guitarMobile from '../Assets/YourMove/guitar-mobile.png';
import instructions from '../Assets/YourMove/instructions.png';
import lobby from '../Assets/YourMove/lobby.png';
import loginYM from '../Assets/YourMove/login.png';
import mainDash from '../Assets/YourMove/main-dashboard.png';
import navToggle from '../Assets/YourMove/nav-toggle.png';
import recipe from '../Assets/YourMove/recipe.png';
import registerYM from '../Assets/YourMove/register.png';
import subjectDash from '../Assets/YourMove/subject-dashboard.png';

import adminBottom from '../Assets/FatBoyCatering/admin-page-bottom.png';
import adminMenu from '../Assets/FatBoyCatering/admin-page-menu-item-edit.png';
import adminMenuNoSelection from '../Assets/FatBoyCatering/admin-page-menu-item-edit-no-selection.png';
import cart from '../Assets/FatBoyCatering/cart-page.png';
import editMenuItem from '../Assets/FatBoyCatering/edit-menu-item-page.png';
import menuItem from '../Assets/FatBoyCatering/menu-item-page.png';
import menuCollapsed from '../Assets/FatBoyCatering/menu-page-collapsed.png';
import menuExpanded from '../Assets/FatBoyCatering/menu-page-expanded.png';
import status from '../Assets/FatBoyCatering/status-page.png';
import statusFiltered from '../Assets/FatBoyCatering/status-page-filtered.png';
import statusNothingToDisplay from '../Assets/FatBoyCatering/status-page-nothing-to-display.png';

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
    tech: ['Sass', 'Sockets', 'Toast', 'Bcryptjs', 'React-Router-Dom', 'Lodash', 'Twilio'],
    images: [adminBottom, adminMenu, adminMenuNoSelection, cart, editMenuItem, menuItem, menuCollapsed, menuExpanded, status, statusFiltered, statusNothingToDisplay],
    desc: 'SPA for client to manage menu options, allow his customers to place orders, and track and send messages in real time.',
    domain: true,
    date: 'May 2021',
    hosted: true,
    lessons: "This app builds on basic socket connections, React components, personal sass styling and animations, and engineered with an increased focus on admin and non-admin UX/UI. I got to practice organizing data from the backend and formatted it to display correctly in the frontend. This app does not utilize Redux because I didn't think it needed a global state management, but ended up accessing sessionStorage and cookies (which is what redux is doing under the hood)."
}


const projects = [FatBoyCatering, YourMove, MiniGames, Chatterbox, DeadStock];

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

    const displayTech = (tech) => {
        let last = tech.length - 1;
        let str = '';
        tech.forEach((item, index) => {
            if (index === last) str += item;
            else str += item + ', ';
        });
        return str;
    }

    const updateModal = (project) => {
        const modal = document.querySelector('.modal-message');

        let techStr = displayTech(project.tech);
        const message = `<h1 style="margin-bottom: 16px;">${project.name}</h1><p><strong>Date:</strong> ${project.date}</p><br/><p><strong>Description:</strong> ${project.desc}</p><br/><p><strong>Lesson:</strong> ${project.lessons}</p><br/><p><strong>Tech:</strong> ${techStr}</p>`;
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