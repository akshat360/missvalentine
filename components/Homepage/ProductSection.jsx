import React from 'react'
import Image from 'next/image';

import productImg1 from "../../assets/images/product-1.jpg";
import ProductCard from '../ProductCard';

export default function ProductSection() {
  return (  
	<section className="ftco-section bg-light">
    <div className="container">
        <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center fadeInUp ftco-animated">
                <h1 className="big">Products</h1>
                <h2 className="mb-4">Our Products</h2>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm col-md-6 col-lg fadeInUp ftco-animated">
                <ProductCard />
            </div>
            <div className="col-sm col-md-6 col-lg fadeInUp ftco-animated">
                <ProductCard />
            </div><div className="col-sm col-md-6 col-lg fadeInUp ftco-animated">
                <ProductCard />
            </div><div className="col-sm col-md-6 col-lg fadeInUp ftco-animated">
                <ProductCard />
            </div>
        </div>
    </div>
</section>

  )
}
