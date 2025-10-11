import { useState } from 'react';

import { Cursor } from '../Cursor';
import { LeftPanel, RightPanel } from '.';

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