import React from 'react'
import './Subtotal.css'
import { Link } from 'react-router-dom';
import CurrencyFormate from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getbaskettotal } from './reducer';

function Subtotal() {
    const [{basket} ,dispatch] = useStateValue();
    return (
         
        <div className="subtotal">

            <CurrencyFormate 
             renderText={(value) => (
                <>   
                    <div className="rope"></div>
                    <div className="round"></div>
                    <h4 className="pricee">Price :({basket?.length} items):{value}</h4>
                    
                </>
            )}

             decimalScale={2}
             value={getbaskettotal(basket)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"₹"}
             
             />
            <Link to="/Payments">
                <button  className="subtotal__button">Proceed to Payments</button>
            </Link>
        </div>
        
    )
}

export default Subtotal
