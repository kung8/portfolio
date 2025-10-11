import { useState } from 'react';

import { useGetData } from '../../hooks';
import { Items } from '.';

export const Components = ({ id }) => {
    const [showMore, setShowMore] = useState(false);
    const { data: components } = useGetData('components');

    return (
        <div id={id} className='components-container section-container'>
            <h4 className='label'>Components</h4>
            {components?.length && (
                <Items
                    items={components}
                    showMore={showMore}
                    setShowMore={setShowMore}
                    buttonLabels={{
                        show: 'View More Components',
                        hide: 'View Less Components'
                    }}
                />
            )}
        </div>
    )
}