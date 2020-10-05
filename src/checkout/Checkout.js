import React from 'react'
import "./Checkout.css"
import Subtotal from "./subtotal/Subtotal"
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './checkoutProducts/CheckoutProduct'

function Checkout() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://image.shutterstock.com/image-illustration/aerial-view-space-ecological-disaster-260nw-1489282427.jpg"/>
                <div>
                <h2 className="checkout_title">
                 Your Shopping Basket
                </h2>
                {basket.map(item=>(
                  <CheckoutProduct 
                  id={item.id}
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   rating={item.rating} 
                   /> 
                ))}
            </div>
            </div>
            
            <div className="checkout_right">
           <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
