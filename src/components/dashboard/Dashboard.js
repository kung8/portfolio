import React, { useState } from 'react';
import { LeftPanel, RightPanel } from '.';
import { Cursor } from '../Cursor';

export const Dashboard = () => {
    const [selected, setSelected] = useState(0);

    const props = {
        selected,
        setSelected,
    }

    return (
        <div className='dashboard page'>
            <LeftPanel {...props} />
            <RightPanel {...props} />
            <Cursor />
        </div>
    )
}