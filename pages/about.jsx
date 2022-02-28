import React from 'react'
import TopBanner from '../components/CustomComponents/TopBanner';
import InfoSection from '../components/Homepage/InfoSection';
import withBaseLayout from '../components/Layout/BaseLayout';

const About=()=> {
  return (
    <div> 
      <TopBanner title="About" subtitle="About"/>
    <InfoSection />
    </div>
  )
}

export default withBaseLayout(About); 
