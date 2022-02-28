import React from 'react'
import SendMessage from '../components/ConactUs/SendMessage';
import TopBanner from '../components/CustomComponents/TopBanner';
import withBaseLayout from '../components/Layout/BaseLayout';

const contact=()=> {
  return (
    <div> 
      <TopBanner title="Contact Us" subtitle="Conact"/>
    <SendMessage />
    </div>
  )
}

export default withBaseLayout(contact); 
