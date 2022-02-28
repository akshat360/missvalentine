
import React from 'react'
import TopBanner from '../components/CustomComponents/TopBanner';
import withBaseLayout from '../components/Layout/BaseLayout';
import ProductList from '../components/Shop/ProductList';

const Shop=()=> {
    return (
    <div> 
        <TopBanner title="Collection" subtitle="Product"/>
        <ProductList />
    </div>
    )
}

export default withBaseLayout(Shop); 
