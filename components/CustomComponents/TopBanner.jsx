import Link from 'next/link'
import React from 'react'

export default function TopBanner({title,subtitle}) {
  return (
    <div className="hero-wrap hero-bread" style={{backgroundImage: "url('https://i.pinimg.com/564x/74/de/0a/74de0ae3bb01e3ab2ab03da4bb1985e6.jpg')"}}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animated fadeInUp text-center">
            <h1 className="mb-0 bread">{title}</h1>
            <p className="breadcrumbs"><span className="mr-2">
              <Link href="/">
                <a >Home</a>
              </Link>
              
              </span> <span>{subtitle}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
