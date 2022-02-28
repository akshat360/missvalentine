import React from 'react'

import ProductCard from '../ProductCard';
export default function ProductList() {
  return (
    
		<section className="ftco-section bg-light">
    	<div className="container-fluid">
    		<div className="row">
			<div className="col-sm col-md-6 col-lg-3 ftco-animated fadeInUp ">
    				<ProductCard />
    			</div>
    			<div className="col-sm col-md-6 col-lg-3 ftco-animated fadeInUp ">
    				<ProductCard />
    			</div>
    			<div className="col-sm col-md-6 col-lg-3 ftco-animated fadeInUp ">
    				<ProductCard />
    			</div>
    			<div className="col-sm col-md-6 col-lg-3 ftco-animated fadeInUp ">
    				<ProductCard />
    			</div>
				<div className="col-sm col-md-6 col-lg-3 ftco-animated fadeInUp ">
    				<ProductCard />
    			</div>
				<div className="col-sm col-md-6 col-lg-3 ftco-animated fadeInUp ">
    				<ProductCard />
    			</div>
				<div className="col-sm col-md-6 col-lg-3 ftco-animated fadeInUp ">
    				<ProductCard />
    			</div>
				<div className="col-sm col-md-6 col-lg-3 ftco-animated fadeInUp ">
    				<ProductCard />
    			</div>
    		</div>
			
    		<div className="row mt-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li><a href="#">&lt;</a></li>
                <li className="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;</a></li>
              </ul>
            </div>
          </div>
        </div>
    	</div>
    </section>

  )
}
