import React from 'react';
import { Items } from '.';
import { useGetData } from '../../hooks';

export const Products = ({ id }) => {
    const { data: products } = useGetData('products');
    const isLocalUrl = window.location.href.includes('localhost');

    const formattedProducts = (products || []).map((product) => {
        return {
            ...product,
            url: isLocalUrl && product.localUrl ? product.localUrl : product.url,
        }
    })

    return (
        <div id={id} className='products-container section-container'>
            <h4 className='label'>Products</h4>
            {formattedProducts?.length && <Items items={formattedProducts} hasMore={false} />}
        </div>
    )
}