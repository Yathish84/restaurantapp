import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,title,image,price}) {
    const[{basket},dispatch]=useStateValue();
    const removethedish=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        });
    }
    return (
        <div className="checkoutproduct">
            <img className="cp__img" src={image}></img>
            <div className="checkoutproduct__info">
                <p className="cp__title">{title}</p>
                <p className="cp__price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            
            </div>
            <button className="btn__remove" onClick={removethedish}>Remove the dish 😥</button>
        </div>
    )
}

export default CheckoutProduct
