
import React from 'react'
import BillingDetails from '../components/Checkout/BillingDetails';
import TopBanner from '../components/CustomComponents/TopBanner';
import withBaseLayout from '../components/Layout/BaseLayout';

const Checkout=()=> {
    return (
    <div> 
        <TopBanner title="Checkout" subtitle="Checkout"/>
        <BillingDetails />
    </div>
    )
}

export default withBaseLayout(Checkout); 
