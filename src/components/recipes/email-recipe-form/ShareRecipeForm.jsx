import { useEffect, useState } from 'react';

import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';
import 'react-toastify/dist/ReactToastify.css';

import { validator } from "../../../utils/validator";
import { getRecipeAppUser, getRecipeAppUserEmail, setRecipeAppUser, setRecipeAppUserEmail } from '../utils';

export const ShareRecipeForm = ({ showTitle }) => {
    const [name, setName] = useState(getRecipeAppUser() === 'Guest' ? '' : getRecipeAppUser());
    const [email, setEmail] = useState(getRecipeAppUserEmail());
    const [recipeName, setRecipeName] = useState('');
    const [message, setMessage] = useState('');

    const [debouncedName] = useDebounce(name, 300);
    const [debouncedEmail] = useDebounce(email, 300);

    const reset = () => {
        setName('');
        setEmail('');
        setRecipeName('');
        setMessage('');
    }

    useEffect(() => {
        if (debouncedName && debouncedName !== 'Guest' && debouncedName !== getRecipeAppUser()) {
            setRecipeAppUser(debouncedName);
        }
    }, [debouncedName]);

    useEffect(() => {
        if (debouncedEmail !== getRecipeAppUserEmail()) {
            setRecipeAppUserEmail(debouncedEmail);
        }
    }, [debouncedEmail]);

    const submit = async (e) => {
        e.preventDefault();
        if (name && email && recipeName && message) {
            try {
                await axios.post('/api/message', { name, email, subject: `Recipe submission: ${recipeName}`, message })
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
            {showTitle && <h4 className="share-a-recipe-label">Share a Recipe</h4>}
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
                    <span>Recipe Name</span>
                    <input type="text" name="recipeName" id="recipeName" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
                </div>
                <div className="form-field">
                    <span>If you have any recipes you'd like for me to try and add to my website, please send them my way. Thank you in advance!</span>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className="submit-btn" onClick={submit} disabled={disabled}>Share Recipe</button>
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