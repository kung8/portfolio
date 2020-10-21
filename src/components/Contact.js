import React, { useState } from 'react';
import bako from '../assets/bako.jpg';
import axios from 'axios';

const id = '1_MzAF6uXKsBsqrPZOjxg44XXDQ08oS7M';
const open = `https://drive.google.com/file/d/${id}/view?usp=sharing`;
const download = `https://drive.google.com/uc?export=download&id=${id}`;

function Contact() {
    const [messageDropdown, updateDropdown] = useState('dev');
    const [name, updateName] = useState('');
    const [email, updateEmail] = useState('');
    const [message, updateMessage] = useState('');
    const [showNameNotice, updateNameNotice] = useState(false);
    const [showEmailNotice, updateEmailNotice] = useState(false);
    const emailErrors = ['Email field is required.', 'Please enter a valid email.'];

    const send = (e) => {
        e.preventDefault();
        if (name !== null && email !== null && email.includes('@') && email.includes('.') && message !== null && name !== '' && email !== '' && message !== '') {
            axios.post('/api/message', { name, email, message, type: messageDropdown }).then(() => {
                updateName('');
                updateEmail('');
                updateMessage('');
                return;
            }).catch(err => {
                console.log(err);
            });
        }

        if (name === null || name === '') {
            updateNameNotice(true);
        } else {
            updateNameNotice(false);
        }

        if (email === null || email === '') {
            document.querySelector('.email-notice').innerText = emailErrors[0];
            updateEmailNotice(true);
        } else if (!email.includes('@') || !email.includes('.')) {
            document.querySelector('.email-notice').innerText = emailErrors[1];
            updateEmailNotice(true);
        } else {
            updateEmailNotice(false);
        }
    }

    return (
        <div className="contact-page flex-col align-ctr" style={{ backgroundImage: `url(${bako})` }}>
            <div className="contact-inner-container set-top flex-col align-ctr">
                <div className="contact-form">
                    <h1>Leave a Message:</h1>
                    <form className="flex-col align-start">
                        <div className="select-container flex-start">
                            <select name="message" id="message-form" value={messageDropdown} onChange={e => updateDropdown(e.target.value)}>
                                <option value="dev">Have dev work?</option>
                                <option value="resume">Need resume help?</option>
                                <option value="cookies">Want homemade cookies?</option>
                            </select>
                        </div>
                        <div className="name-container">
                            <h4>Name:</h4>
                            <input type="text" value={name} onChange={(e) => updateName(e.target.value)} />
                            <div className={`${!showNameNotice && 'none'} name-notice`}>Name field is required.</div>
                        </div>
                        <div className="email-container">
                            <h4>Email:</h4>
                            <input type="text" value={email} onChange={(e) => updateEmail(e.target.value)} />
                            <div className={`${!showEmailNotice && 'none'} email-notice`}></div>
                        </div>
                        <textarea name="message" value={message} onChange={(e) => updateMessage(e.target.value)}></textarea>
                        <button className="form-link" onClick={e => send(e)}>Send</button>
                    </form>
                </div>
                <div className="resume-links-container">
                    <a className="resume-link open-link" href={open} target="_blank" rel="noopener noreferrer">View Resume</a>
                    <a className="resume-link downloadable-link" href={download}>Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;