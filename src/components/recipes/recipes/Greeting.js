import React, { useEffect, useState } from 'react'
import { getGreeting } from '../utils/get-greeting';
import { RECIPE_APP_USER } from '../constants';
import { useDebounce } from 'use-debounce';


export const Greeting = () => {
    const [greeting, setGreeting] = useState('');
    const [user, setUser] = useState(localStorage.getItem(RECIPE_APP_USER) ?? 'Guest');
    const [debouncedValue] = useDebounce(user, 300);

    useEffect(() => {
        setGreeting(getGreeting());
    }, []);

    useEffect(() => {
        if (debouncedValue && debouncedValue !== 'Guest') {
            localStorage.setItem(RECIPE_APP_USER, debouncedValue);
        }
    }, [debouncedValue]);

    return (
        <div className="greeting-container">
            <p className="greeting-text">{greeting}</p>
            <input className="name-text" type="text" name="name" id="name" value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
    )
}