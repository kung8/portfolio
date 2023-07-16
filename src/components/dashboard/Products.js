import React from 'react';
import { products, Items } from '.';

export const Products = ({ id }) => (
    <div id={id} className='products-container section-container'>
        <h4 className='label'>Products</h4>
        <Items items={products} hasMore={false} />
    </div>
)