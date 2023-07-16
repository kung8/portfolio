import React from 'react';
import { education, Items } from '.';

export const Education = ({ id }) => (
    <div id={id} className='education-container section-container'>
        <h4 className='label'>Education</h4>
        <Items items={education} hasMore={false} />
    </div>
)
