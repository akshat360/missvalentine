import React from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import NewsletterSection from '../Homepage/NewsletterSection';

function withBaseLayout(WrappedComponent, props){
    const fixedNavbar= props?.fixedNavbar || true;
    return function BaseFunction(){
        return (
            <React.Fragment>
                <Navbar fixedNavbar={fixedNavbar} />
                <WrappedComponent />
                <NewsletterSection />
                <Footer />
            </React.Fragment>
        );
    }
}

export default withBaseLayout;