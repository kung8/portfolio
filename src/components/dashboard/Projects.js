import React, { useState } from 'react';
import { projects, Items } from '.';

export const Projects = ({ id }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div id={id} className='projects-container section-container'>
            <h4 className='label'>Projects</h4>
            <Items
                items={projects}
                showMore={showMore}
                setShowMore={setShowMore}
                buttonLabels={{
                    show: 'View More Projects',
                    hide: 'View Less Projects'
                }}
            />
        </div>
    )
}