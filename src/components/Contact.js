import React, { useState } from 'react';
import bako from '../assets/bako.jpg';
import axios from 'axios';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [sendingStatus, updateSendingStatus] = useState(false);
    const [numOfDots, updateNumOfDots] = useState(0);
    const dotsArr = ['.', '..', '...'];

    const send = async (e) => {
        e.preventDefault();
        if (name !== null && email !== null && email.includes('@') && email.includes('.') && message !== null && name !== '' && email !== '' && message !== '') {
            updateSendingStatus(true);
            let sendingInt = setInterval(() => {
                if (sendingStatus) {
                    let num = numOfDots;
                    if (num < 2) {
                        num += 1;
                        updateNumOfDots(num);
                    } else {
                        num = 0;
                        updateNumOfDots(num);
                    }
                } else {
                    clearInterval(sendingInt);
                }
            }, 200);
            await axios.post('/api/message', { name, email, message, type: messageDropdown });
            try {
                updateSendingStatus(false);
                updateName('');
                updateEmail('');
                updateMessage('');
                toast('Thank you for your email! I\'ll get back to you as soon as I can. Please have a great day!', { className: 'lime' });
                return;
            } catch (err) {
                updateSendingStatus(false);
                console.log(err);
                window.location.href = 'mailto:kevthedev8@gmail.com?body=' + message + '<br/><br/>' + name + '&subject="Request for ' + messageDropdown;
                updateName('');
                updateEmail('');
                updateMessage('');
                toast('Sorry we had trouble sending your request directly. Please feel free to email me instead! Thank you for your patience as I work through this bug.', { className: 'salmon' });
                return;
            }
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
                            <select name="message" id="message-form" className="pointer" value={messageDropdown} onChange={e => updateDropdown(e.target.value)}>
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
                        <button className="form-link" onClick={e => send(e)}>Send{sendingStatus && dotsArr[numOfDots]}</button>
                    </form>
                </div>
                <div className="resume-links-container">
                    <a className="resume-link open-link" href={open} target="_blank" rel="noopener noreferrer">View Resume</a>
                    <a className="resume-link downloadable-link" href={download}>Download Resume</a>
                </div>
            </div>
            <ToastContainer
                position="bottom-center"
                hideProgressBar={true}
                closeOnClick={true}
                autoClose={8000}
                transition={Flip}
                draggable={true}
                draggablePercent={80}
            />
        </div>
    )
}

export default Contact;