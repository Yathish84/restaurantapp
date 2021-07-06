import React from 'react'
import './items.css'
import {useStateValue} from './StateProvider'

function Items({id,title,price,image}) {
    const[{},dispatch]=useStateValue();
    const addthedish=()=>{
        dispatch({
            type:'ADD_THE_DISH',
            item:{
                id:id,
                title:title,
                image:image,
                price:price
            },
        })
    }
    return (
        <div className="items">
            <img className="items__image" src={image}></img>
            <p>{title}</p>
            <p className="price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <button className="add" onClick={addthedish}>Add The Dish</button>
        </div>
    )
}

export default Items
