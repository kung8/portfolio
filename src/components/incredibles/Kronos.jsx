import React, { useState, useEffect } from 'react';
import Screens from './Screens';
import Supers from './Supers';

export default function Kronos() {
    const [text, updateText] = useState('');
    const [inputClicked, updateInputClicked] = useState(false);
    const [screenDisplay, updateScreenDisplay] = useState(null);

    useEffect(() => {
        // eslint-disable-next-line
    }, [text]);

    const handleInputContainerClick = (value) => {
        updateInputClicked(value);
    }

    const handleInputClick = (e, value) => {
        e.stopPropagation();
        updateInputClicked(value);
    }

    const handleInput = (value) => {
        updateText(value);
    }

    const handleScreenToShow = () => {
        if (screenDisplay === 'omnidroid') {
            return <Supers />
        }
        // else if (screenDisplay === 'super') {
        //     return <SupersDisplay />
        // } else if (screenDisplay === 'finance') {
        //     return <Finance />
        // } else if (screenDisplay === 'island') {
        //     return <Island />
        // }
        else {
            return <Screens updateScreenDisplay={updateScreenDisplay} />
        }
    }

    return (
        <div className="kronos flex-col">
            {
                text.toLowerCase() === 'kronos' ?
                    handleScreenToShow()
                    :
                    <div className="kronos-screen password-container flex align-ctr" onClick={() => handleInputContainerClick(false)}>
                        <div className="input-container flex justify-ctr">
                            {
                                inputClicked ?
                                    <input className="password-input" type="text" onClick={(e) => handleInputClick(e, true)} onChange={(e) => handleInput(e.target.value)} value={text} placeholder="Password" />
                                    :
                                    <label className="password-label" onClick={(e) => handleInputClick(e, true)}>Password<span className="last-letter"></span></label>
                            }
                        </div>
                    </div>
            }
        </div>
    )
}