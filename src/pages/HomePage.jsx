import React from 'react'
import ProductCard from '../components/ProductCard';


import { useFetchAllProductsQuery } from '../features/product/productApi';

export default function HomePage() {

    const { data, isLoading, isError, error } = useFetchAllProductsQuery();

    const products = data?.products
    if (products)
        console.log(products);

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center px-3 py-4 dark:bg-black'>
                {

                    isLoading ? (<div>Loading...</div>) : (products?.map((product) => {
                        return <ProductCard key={product?.id} product={product} />
                    }))


                }
            </div>
        </>
    )
}
