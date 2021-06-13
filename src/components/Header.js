import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const home = '/';
const projects = '/projects';
const music = '/music';
const contact = '/contact';
const components = '/components';

const Header = props => {
    const { history } = props;
    const { pathname } = history.location;
    const [toggleOpen, updateToggle] = useState(false);
    const [height, updateHeight] = useState(0);
    const [eventListenerAdded, updateEventListenerAdded] = useState(false);

    useEffect(() => {
        if (!eventListenerAdded) {
            addScrollEventListener();
        }
        // eslint-disable-next-line
    }, [])

    const addScrollEventListener = () => {
        updateEventListenerAdded(true);
        window.addEventListener('scroll', () => {
            let page = document.querySelector('.projects-page') || document.querySelector('.contact-page') || document.querySelector('.resume-page') || document.querySelector('.music-page') || document.querySelector('.about-page') || document.querySelector('.components-page') || document.querySelector('.kronos-program');
            let top = page.getBoundingClientRect().top;
            updateHeight(top);
        })
    }

    const handleToggle = () => {
        let currentToggle = toggleOpen;
        updateToggle(!currentToggle);
    }

    const handleRoute = (path) => {
        history.push(path);
        updateToggle(false);
    }

    return (
        <header className={`justify-btwn align-ctr ${height < -75 && 'slateblue'} ${toggleOpen && 'opened'}`}>
            <h2 className="logo" onClick={() => history.push(home)}>KU</h2>
            <div className="links-container">
                {/* <h2 className={pathname === home ? 'selected-page' : undefined} onClick={() => history.push('/')}>About</h2> */}
                <h2 className={pathname === projects ? 'selected-page' : undefined} onClick={() => history.push('/projects')}>Projects</h2>
                <h2 className={pathname === components ? 'selected-page' : undefined} onClick={() => history.push('/components')}>Components</h2>
                <h2 className={pathname === music ? 'selected-page' : undefined} onClick={() => history.push('/music')}>Music</h2>
                <h2 className={pathname === contact ? 'selected-page' : undefined} onClick={() => history.push('/contact')}>Contact</h2>
            </div>
            <div className="hamburger-toggle" onClick={handleToggle}>
                <div className="ham-bars"></div>
                <div className="ham-bars"></div>
                <div className="ham-bars"></div>
            </div>
            <div className={`nav-toggle ${toggleOpen ? 'show-toggle' : 'close-toggle'} ${pathname === home ? 'less-transparent' : null}`}>
                {/* <h2 onClick={() => handleRoute('/')}>About</h2> */}
                <h2 onClick={() => handleRoute('/projects')}>Projects</h2>
                <h2 onClick={() => handleRoute('/components')}>Components</h2>
                <h2 onClick={() => handleRoute('/music')}>Music</h2>
                <h2 onClick={() => handleRoute('/contact')}>Contact</h2>
            </div>
        </header>
    )
}

export default withRouter(Header);