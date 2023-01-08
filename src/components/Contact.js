import React, { useState } from 'react';
import axios from 'axios';
import japan from '../Assets/me.jpeg';
import { validator } from "../utils/validator";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const id = '1jMAfdIYWomKJf6khY9Eq-3pVWVmoXH82';
const open = `https://drive.google.com/file/d/${id}/view?usp=sharing`;
const download = `https://drive.google.com/uc?export=download&id=${id}`;

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const reset = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    const submit = async (e) => {
        e.preventDefault();
        if (name && email && subject && message) {
            try {
                await axios.post('/api/message', { name, email, subject, message })
                toast('Submitted form', { className: 'success' });
                reset();
            } catch {
                toast('Sorry there was a problem.', { className: 'error' });
            }
        } else {
            toast('Please fill out all the required form fields', { className: 'error' });
        }
    }

    return (
        <div id="contact-page" className="contact-page page">
            <div className="container contact">
                <div className="contact-container">
                    <img className="me-or-company" src={japan} alt="me" />
                    <div className="contact-form-container">
                        <h1 className="heading">Contact Me</h1>
                        <p className="message-text">Feel free to leave a comment, ask a question, or share your favorite dad joke.</p>
                        <form className="contact-form" action="submit">
                            <div className="form-field">
                                <span>Name</span>
                                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <span>Email</span>
                                <input className={`${validator({ type: 'email', text: email }) ? 'validated' : 'invalid'}`} required type="email" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <span>Subject</span>
                                <input type="text" name="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <span>Leave a message...</span>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <button className="submit-btn" onClick={submit}>Submit</button>
                        </form>
                    </div>
                </div>
                <div className="resume-links-container">
                    <a className="resume-link open-link" href={open} target="_blank" rel="noopener noreferrer">View Resume</a>
                    <a className="resume-link downloadable-link" href={download}>Download Resume</a>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                hideProgressBar={true}
                closeOnClick={true}
                autoClose={1500}
                transition={Slide}
                draggable={true}
                draggablePercent={80}
            />
        </div>
    )
}

export default Contact;