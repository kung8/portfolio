import { useState } from 'react';

import { useGetData } from '../../hooks';
import { Items } from '.';

export const Experiences = ({ id }) => {
    const [showMore, setShowMore] = useState(false);
    const { data: experiences } = useGetData('experiences');

    return (
        <div id={id} className='experiences-container section-container'>
            <h4 className='label'>Experiences</h4>
            {experiences?.length && (
                <Items
                    items={experiences}
                    showMore={showMore}
                    setShowMore={setShowMore}
                    buttonLabels={{
                        show: 'View More Experiences',
                        hide: 'Show Less Experiences'
                    }}
                />
            )}
        </div>
    )
}