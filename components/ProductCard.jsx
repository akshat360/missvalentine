import React from 'react'
import Image from 'next/image';
import productImg from "../assets/images/product-3.jpg";

export default function ProductCard()
{
    return (
        <div className="product">
            <a href="#" className="img-prod"><Image height="700px" width="600px" className="img-fluid" src={productImg} alt="Colorlib Template" />
                <span className="status">30%</span>
            </a>
            <div className="text py-3 px-3">
                <h3><a href="#">Young Woman Wearing Dress</a></h3>
                <div className="d-flex">
                    <div className="pricing">
                        <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                    </div>
                    <div className="rating">
                        <p className="text-right">
                            <span className="ion-ios-star-outline"></span>
                            <span className="ion-ios-star-outline"></span>
                            <span className="ion-ios-star-outline"></span>
                            <span className="ion-ios-star-outline"></span>
                            <span className="ion-ios-star-outline"></span>
                        </p>
                    </div>
                </div>
                <hr />
                <p className="bottom-area d-flex">
                    <a href="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></a>
                    <a href="#" className="ml-auto"><span><i className="ion-ios-heart-empty"></i></span></a>
                </p>
            </div>
        </div>

    )
}
