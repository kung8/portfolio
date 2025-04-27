import { useEffect } from 'react';

export const Cursor = () => {
    const cursorMove = (e) => {
        const { clientX: x, clientY: y } = e;
        const cursor = document.querySelector('.cursor');
        if (!cursor) return;
        cursor.style.setProperty('left', x + 'px');
        cursor.style.setProperty('top', y + 'px');
    }

    useEffect(() => document.addEventListener('mousemove', cursorMove), []);

    return <div className='cursor'></div>
}