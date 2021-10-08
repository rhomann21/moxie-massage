import React from 'react';
import { useEffect } from 'react';
import '../../App.css';

export default function Products() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
    <> <h1 className='products'>Products - Coming soon</h1>
    <div className='product__text__wrapper'>
        <div className='product__h3__wrapper'><h3> We are just as excited as you are!</h3></div>
        <div className='product__p__wrapper'><p>Online access to candles, apparel, and cute accessoies are coming your way.</p>
            <p>In the mean time, come on in and see all that we have to offer in-store. Until smell-o-vision is invented, it's going to be the best way to pick out one of our AMAZING locally made soy wax candles.</p>
        </div>
    </div>
    </>
)}