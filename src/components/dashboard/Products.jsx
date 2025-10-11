import { useGetData } from '../../hooks';
import { Items } from '.';

export const Products = ({ id }) => {
    const { data: products = [] } = useGetData('products');

    return (
        <div id={id} className='products-container section-container'>
            <h4 className='label'>Products</h4>
            {products?.length && <Items items={products} hasMore={false} />}
        </div>
    )
}