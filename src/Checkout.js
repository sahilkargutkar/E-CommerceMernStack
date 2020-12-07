import React from 'react'
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const[{cart,user},dispatch] =useStateValue();

    return (
        <div className="checkout">

            <div className="checkout__left">


            <img className="checkout__ad" 
            src="https://blog.hubspot.com/hs-fs/hubfs/nike-just-do-it-1.jpg?width=560&name=nike-just-do-it-1.jpg"
             alt="add"/>
            
            
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                {cart?.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.price}
                    />
                ))}
                </div>
        
            </div>
            {/* {cart.length >  0 &&( */}
                <div className="checkout__right" >
                    <Subtotal />
                <h1> Subtotal </h1>

                </div>

            {/* )} */}
        </div>
    )
}

export default Checkout
