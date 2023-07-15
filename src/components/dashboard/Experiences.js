import React, { useState } from 'react';
import { experiences, Items } from '.';

export const Experiences = ({ id }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div id={id} className='experiences-container section-container'>
            <h4 className='label'>Experiences</h4>
            <Items 
                items={experiences} 
                showMore={showMore} 
                setShowMore={setShowMore}
                buttonLabels={{
                    show: 'View More Experiences',
                    hide: 'Show Less Experiences'
                }}
            />
        </div>
    )
}