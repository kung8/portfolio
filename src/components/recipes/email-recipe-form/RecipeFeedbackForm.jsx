import { useState } from 'react';

import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';

import { validator } from "../../../utils/validator";

import 'react-toastify/dist/ReactToastify.css';

export const RecipeFeedbackForm = ({ recipeName }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const reset = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const submit = async (e) => {
        e.preventDefault();
        if (name && email && recipeName && message) {
            try {
                await axios.post('/api/message', { name, email, subject: `Recipe Feedback for ${recipeName}`, message })
                toast('Submitted form', { className: 'success' });
                reset();
            } catch {
                toast('Sorry there was a problem.', { className: 'error' });
            }
        } else {
            toast('Please fill out all the required form fields', { className: 'error' });
        }
    }

    const disabled = !!(!name || !email || !recipeName || !message);

    return (
        <div className="email-recipe-form-container">
            <form className="email-recipe-form" action="submit">
                <div className="form-field">
                    <span>Name</span>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-field">
                    <span>Email</span>
                    <input required type="email" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {!validator({ type: 'email', text: email }) && <span className="error-message">Please enter a valid email address.</span>}
                </div>
                <div className="form-field">
                    <span>Let me know that you made it! I'd love any feedback on the "{recipeName}" recipe especially if you think there are possible improvements to the recipe. Thank you in advance!</span>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className="submit-btn" onClick={submit} disabled={disabled}>Submit Feedback</button>
            </form>
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