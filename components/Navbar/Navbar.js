import Link from 'next/link';
import React from 'react'
import { projectName } from "../../constant/projectSetting";

const Navbar=(props) => {

	const { fixedNavbar } =props;
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${fixedNavbar && " ftco-navbar-light-2 "}`} id="ftco-navbar">
	    <div className="container">
		<Link href="/">
	      	<a className="navbar-brand">{projectName}</a>
		  </Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"> <Link href="/"><a className="nav-link">Home</a></Link></li>
	          <li className="nav-item active"> <Link href="/shop"><a className="nav-link">Shop</a></Link></li>
	          <li className="nav-item"> <Link href="/about"><a className="nav-link">About</a></Link></li>
	          <li className="nav-item"> <Link href="/blog"><a className="nav-link">Blog</a></Link></li>
	          <li className="nav-item"> <Link href="/contact"><a className="nav-link">Contact</a></Link></li>
	          <li className="nav-item cta cta-colored"> <Link href="/cart"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart"></span>[0]</a></Link></li>

	        </ul>
	      </div>
	    </div>
	  </nav>
  )
}
export default Navbar;