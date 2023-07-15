import React, { useState } from 'react';
import { components, Items } from '.';

export const Components = ({ id }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div id={id} className='components-container section-container'>
            <h4 className='label'>Components</h4>
            <Items
                items={components}
                showMore={showMore}
                setShowMore={setShowMore}
                buttonLabels={{
                    show: 'View More Components',
                    hide: 'View Less Components'
                }}
            />
        </div>
    )
}