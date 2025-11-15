import { useEffect, useState } from 'react'

import { useDebounce } from 'use-debounce';

import { getGreeting, getRecipeAppUser, setRecipeAppUser } from '../utils';


export const Greeting = () => {
    const [greeting, setGreeting] = useState('');
    const [user, setUser] = useState(getRecipeAppUser());
    const [debouncedValue] = useDebounce(user, 300);

    useEffect(() => {
        setGreeting(getGreeting());
    }, []);

    useEffect(() => {
        if (debouncedValue && debouncedValue !== 'Guest') {
            setRecipeAppUser(debouncedValue);
        }
    }, [debouncedValue]);

    return (
        <div className="greeting-container">
            <p className="greeting-text">{greeting}</p>
            <input className="name-text" type="text" name="name" id="name" value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
    )
}