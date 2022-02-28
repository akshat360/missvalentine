import React from 'react'
import ProductList from '../components/Cart/ProductList';
import TopBanner from '../components/CustomComponents/TopBanner';
import withBaseLayout from '../components/Layout/BaseLayout';

const Cart=()=> {
  return (
    <div> 
      <TopBanner title="My Cart" subtitle="Cart"/>
      <ProductList />
    </div>
  )
}

export default withBaseLayout(Cart); 
