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

const Houser = {
    id: 1,
    name: 'Houser',
    url: null,
    tech: ['React-Router-Dom', 'Redux'],
    images: [
        { img: houser, left: false, right: true },
        { img: wizard1, left: false, right: true },
        { img: wizard2, left: false, right: true },
        { img: wizard3, left: false, right: true }
    ],
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
    images: [
        { img: helo, left: true, right: true },
        { img: login, left: true, right: true },
        { img: list, left: true, right: true },
        { img: searchother, left: true, right: true },
        { img: searchown, left: true, right: true },
        { img: createpost, left: true, right: true }
    ],
    desc: 'Blog posting app practicing authentication, redux, session & routing',
    domain: false,
    date: 'Feb 2019',
    hosted: false,
    lessons: "I learn about linear-gradients and other basic styling techniques can help embellish the application. This was another project that I had replicated the styling based off another site.I incorporated additional technologies including bcryptjs for authentication, express-session for keeping a user on session, redux and redux-persist to pass state/props between components without having to worry about refreshing the page."
}
const MarketIn = {
    id: 3,
    name: 'MarketIn',
    url: 'marketin.dev',
    tech: ['Sockets', 'Stripe', '3rd Party API', 'Amazon S3', 'Dropzone', 'Express-Session', 'Bcryptjs', 'Redux', 'Redux-Persist', 'React-Router-Dom'],
    images: [
        { img: marketin, left: false, right: true },
        { img: chats, left: false, right: true },
        { img: contacts, left: true, right: true },
        { img: search, left: true, right: true },
        { img: services, left: true, right: true }
    ],
    desc: 'Professional portfolio SPA combined with an ecommerce twist',
    domain: true,
    date: 'Mar 2019',
    hosted: true,
    lessons: "I really enjoyed applying all these different technologies. My favorite parts were taking a desired goal such as the Chat component and figuring out how to display the different colors with the date and time formatted how I wanted it and learning how to use this.props.match and this.props.history. After the project, I learned that I unnecessarily used Redux in places that I didn't need to use it.This app was my first full-stack app which could definitely be improved upon but it was where I solidified my understanding of some foundational concepts. The main takeaways from this project would probably be understanding the flow of data and learning how to console log correctly."
}
const DeadStock = {
    id: 4,
    name: 'DeadStock',
    url: '159.65.98.93:8080',
    tech: ['Sockets', 'Material-UI', 'AWS S3'],
    images: [
        { img: deadstock, left: false, right: true },
        { img: community, left: false, right: true },
        { img: chatlist, left: true, right: true },
        { img: favorites, left: true, right: true },
        { img: friends, left: true, right: true },
        { img: profile, left: true, right: true }
    ],
    desc: 'A shoe collection social media SPA',
    domain: false,
    date: 'Apr 2019',
    hosted: true,
    lessons: "This group project was an incredible experience. I was blessed to work with Joseph Hamblin, Matias Perez, and Samantha Jeet. I learned a ton about working with others especially having to interact with different ways of coding and how to adapt my way. There were differences in styling and coding methods but we learned to trust each other.This was my first team full-stack app. I used most of the same technologies from previous projects but had a chance to further dive into Amazon S3 and Sockets. I took ownership of the image uploads and the chat functionality. I enjoyed learning Chartjs which working with the data was a little tricky."
}
const Chatterbox = {
    id: 5,
    name: 'Chatterbox',
    url: 'thechatterbox.fun',
    tech: ['Sockets', 'Styled-Components'],
    images: [
        { img: groupchat, left: true, right: true },
        { img: chatterbox, left: false, right: true },
        { img: sidebar, left: false, right: true },
        { img: alllist, left: true, right: true },
        { img: editgroup, left: true, right: true },
        { img: editprofile, left: true, right: true },
        { img: indchat, left: true, right: true },
        { img: loginchat, left: true, right: true },
        { img: otherprofile, left: true, right: true },
        { img: searchuser, left: true, right: true },
        { img: startchat, left: true, right: true }
    ],
    desc: 'SPA chat app to connect individuals and groups to practice real-live updates',
    domain: true,
    date: 'Jun 2019',
    hosted: true,
    lessons: "Some valuable things that I learned from this project was Sockets cannot be invoked in multiple components and Styled-Components rock! There were issues with my chat functionality initially due to its unexpected behavior of establishing three separate socket instances so it was not sending the message to the proper connection."
}
const MiniGames = {
    id: 6,
    name: 'Mini Games',
    url: null,
    tech: ['React-Native', 'React-Navigation', 'Toast'],
    images: [
        { img: cards, left: false, right: true },
        { img: I, left: false, right: true },
        { img: de, left: false, right: true },
        { img: clare, left: false, right: true },
        { img: War, left: false, right: true },
        { img: victory, left: false, right: true },
        { img: war, left: false, right: true },
        { img: blackjack, left: false, right: true },
        { img: ttt, left: false, right: true }
    ],
    desc: 'First React-Native app to build a mini game platform',
    date: 'July 2019',
    hosted: false,
    lessons: "Learned differences in React-Native and built own logic for game play."
}

const projects = [MiniGames, Chatterbox, DeadStock, MarketIn, Helo, Houser];

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

    const updateModal = (project) => {
        const modal = document.querySelector('.modal-message');
        let techStr = '';
        project.tech.forEach(tech => techStr += `${tech}, `);
        const message = `<h1>${project.name}</h1><p><strong>Date:</strong> ${project.date}</p><br/><p><strong>Description:</strong> ${project.desc}</p><br/><p><strong>Lesson:</strong> ${project.lessons}</p><br/><p><strong>Tech:</strong> ${techStr}</p>`;
        modal.innerHTML = message;
        updateShow(true);
    }

    return (
        <div className={`projects-page flex ${showModal && 'transparent'}`} style={{ backgroundImage: `url(${Bako})` }}>
            <div className="projects-inner-container set-top p-rel">
                <h1>Projects:</h1>
                <div className="general-projects-container">
                    {projects.map((project, index) => {
                        let position = posArr[index]?.position || 0;
                        return (
                            <div key={project.id} className="individual-project" onClick={() => updateModal(project)}>
                                <h4>{project.name}</h4>
                                <div className="img-container">
                                    <img className="project-img" src={project.images[position].img} alt={project.name + index} />
                                    <div className="scroll-dots-container">
                                        {project.images.map((img, index) => {
                                            return (
                                                <div key={project.name + '-img-' + index} className={`selected-ring ${position === index && 'selected'}`}>
                                                    <div className='scroll-dot'></div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="left-arrow fas fa-chevron-right" onClick={() => handleLeft(index, position)}></div>
                                    <div className="right-arrow fas fa-chevron-right" onClick={() => handleRight(index, position)}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={`project-modal ${!showModal && 'none'}`}>
                    <div className="close-btn p-abs" onClick={() => updateShow(false)}>x</div>
                    <div className="modal-message"></div>
                </div>
            </div>
        </div>
    )
}