import React, { useState } from 'react';
import { education, Items } from '.';

export const Education = ({ id }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div id={id} className='education-container section-container'>
            <h4 className='label'>Education</h4>
            <Items
                items={education}
                showMore={showMore}
                setShowMore={setShowMore}
                buttonLabels={{
                    show: 'Show More',
                    hide: 'Show Less'
                }}
                hasMore={false}
            />
        </div>
    )
}