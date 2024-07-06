import React from 'react';
import { links } from '.';
import githubLogo from '../../Assets/github.png';
import linkedInLogo from '../../Assets/linkedin.png';
import gmailLogo from '../../Assets/gmail.png';
import messageLogo from '../../Assets/messages.png';

export const LeftPanel = ({ selected, setSelected }) => {
    const handleScroll = (num) => {
        setSelected(num);
        let top = 0 + (96 * num);
        for (let i = 0; i < num; i++) {
            const { height } = document.getElementById(i).getBoundingClientRect();
            top += height;
        }
        const panel = document.querySelector('.right-panel-container');
        panel.scrollTo({
            top,
            behavior: 'smooth',
        })
    }

    return (
        <div className='left-panel-container'>
            <div className='top-container'>
                <h2 className='name'>Kevin Ung</h2>
                <h4 className='title'>Senior Software Engineer | Tabletop Game Designer</h4>
                <p className='headline'>Building stuff to make life easier and more enjoyable and hoping to inspire others.</p>
                <ul className="link-container">
                    {links.filter(link => link.show).map((link, index) => <li key={index} onClick={() => handleScroll(index)} className={`${selected === index ? 'selected-link' : ''}`}>{link.label}</li>)}
                </ul>
            </div>
            <div className='bottom-container'>
                <a href="https://github.com/kung8" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="github-logo" />
                </a>
                <a href="mailto:kevthedev8@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={gmailLogo} alt="gmail-logo" />
                </a>
                <a href="https://www.linkedin.com/in/kung8" target="_blank" rel="noopener noreferrer">
                    <img src={linkedInLogo} alt="linkedIn-logo" />
                </a>
                <a href={`sms:+18018556361?&body=Hi Kevin! I'd love to connect with you.`} rel="noopener noreferrer">
                    <img src={messageLogo} alt="message-logo" />
                </a>
            </div>
        </div>
    )
}
