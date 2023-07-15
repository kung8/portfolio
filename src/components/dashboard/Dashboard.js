import React, { useEffect, useState } from 'react';
import { LeftPanel, RightPanel } from '.';

export const Dashboard = () => {
    const [selected, setSelected] = useState(0);

    const cursorMove = (e) => {
        const { clientX: x, clientY: y } = e;
        const cursor = document.querySelector('.cursor');
        cursor.style.setProperty('left', x + 'px');
        cursor.style.setProperty('top', y + 'px');
    }

    useEffect(() => {
        document.addEventListener('mousemove', cursorMove);
    }, []);

    const props = {
        selected,
        setSelected,
    }

    return (
        <div className='dashboard-page'>
            <LeftPanel {...props} />
            <RightPanel {...props} />
            <div className='cursor'></div>
        </div>
    )
}