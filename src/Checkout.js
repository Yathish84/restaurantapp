import React from 'react'   
import './Checkout.css'
import Subtotal from './Subtotal'

import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{basket}]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__main">
                {basket?.length === 0 ? (
                    <div className="emptycart"> 
                        <img className="emptycartimg" src="/images/empty cartt.png"></img>
                    </div>

                ) : (
                    <div>
                        <h1 className="checkout__filled">Your Orders</h1>
                        {basket?.map((item)=>(
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            />
                        ))}
                        
                    </div>

                )}
           </div> 
            <div className="checkout__right">
                <Subtotal />
            </div>                   
    
        </div>
    )
}

export default Checkout
