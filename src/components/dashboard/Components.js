import React, { useState } from 'react';
import { Items } from '.';
import { useGetData } from '../../hooks';

export const Components = ({ id }) => {
    const { data: components } = useGetData('components');

    return (
        <div id={id} className='components-container section-container'>
            <h4 className='label'>Components</h4>
            {components?.length && <Items items={components} hasMore={false} />}
        </div>
    )
}