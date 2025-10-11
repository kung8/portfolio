import { useState } from 'react';

import { useGetData } from '../../hooks';
import { Items } from '.';

export const Projects = ({ id }) => {
    const [showMore, setShowMore] = useState(false);
    const { data: projects } = useGetData('projects');

    return (
        <div id={id} className='projects-container section-container'>
            <h4 className='label'>Projects</h4>
            {projects?.length && (
                <Items
                    items={projects}
                    showMore={showMore}
                    setShowMore={setShowMore}
                    buttonLabels={{
                        show: 'View More Projects',
                        hide: 'View Less Projects'
                    }}
                />
            )}
        </div>
    )
}