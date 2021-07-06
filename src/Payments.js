import CurrencyFormate from "react-currency-format"
import { useElements,useStripe,CardElement } from '@stripe/react-stripe-js';
import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import {useStateValue} from "./StateProvider";
import {getbaskettotal} from './reducer'
import axios from './axios'


function Payments() {
    const[{basket,user},dispatch]=useStateValue();
    const history = useHistory()
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]= useState(null);
    const [disabled,setDisabled]= useState(true);
    const [processing,setProcessing]= useState("");
    const [succeeded,setSucceeded]= useState(false);
    const [clientSecret,setClientsecret]=useState(true)
    useEffect(() => {
        const getClientsecret =async ()=>{
            const response = await axios({
                method:'post',
                url:`/payments/create?total=${getbaskettotal(basket) /100}`
            });
            console.log("response..............",response);
            setClientsecret(response.data.clientSecret)
        }
        
        getClientsecret();
    }, [basket])
    console.log("secret is >>>>>>>>",clientSecret);
    

    const handlesubmit=async(e)=>{
        e.preventDefault()
        setProcessing(true)
        
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{

            setSucceeded(true);
            setError(null)
            setProcessing(false)
            history.replace('/orders')
        })

    }
    const handlechange=e=>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message:"");
    }
    
    return (
        <div className="payments">
            <div className="payment__container">
                <h1>
                    checkout(
                        <Link to="/Checkout">{basket?.length}items</Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="pay__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="pay__address">
                        <p>{user?.email}</p>
                        <p>RMV 2nd stage,1st A cross</p>
                        <p>Banglore</p>
                        <p>+91 7894563210</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="pay__title">
                        <h3>Review orders and delivery</h3>
                    </div>
                    <div className="pay__orders">
                        {basket.map(item=>(
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        )
                        )}
                    </div>
                </div>
                <div className="payment__section">
                <div className="pay__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="pay__details">
                     <form onSubmit={handlesubmit}> 
                            <CardElement onChange={handlechange}/>
                            <div className="price__container">
                                <CurrencyFormate 
                                    renderText={(value) => (
                                        <h3>order:{value}</h3>
                                )}

                                decimalScale={2}
                                value={getbaskettotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                                
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing?<p>processing</p>:"Buy Now"}</span>
                                </button>
                            </div>
                            {error&&<div>{error}</div>}
                     </form>   
                </div>
                </div>
            </div>
        </div>
    )
}

export default Payments
