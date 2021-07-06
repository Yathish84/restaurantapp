import React from 'react'
import './home.css';
import Items from './Items'

function home() {
    return (
        <div className="home">
            <img className="home__bg" 
             src="/images/homeebg.jpg"
            ></img>
            <div className="home__menu">
                 <h1 className="hotelname" >Delicacy's</h1>
                 <h2 className="hotelmenu">Special Menu</h2>
            </div>
            <h1>BreakFast</h1>
            <div className="items__">
                <Items
                    id="11120"
                    title="BreakFast"
                    price={11.96}
                    image="/images/breakfast-1.jpg"
                />
                <Items
                    id="11121"
                    title="BreakFast"
                    price={11.96}
                    image="/images/breakfast-2.jpg"
                />
                <Items
                    id="11122"
                    title="BreakFast"
                    price={11.96}
                    image="/images/breakfast-3.jpg"
                />
                <Items
                    id="11123"
                    title="BreakFast"
                    price={11.96}
                    image="/images/breakfast-4.jpg"
                />
                <Items
                    id="11124"
                    title="BreakFast"
                    price={11.96}
                    image="/images/breakfast-5.jpg"
                />
                <Items
                    id="11125"
                    title="BreakFast"
                    price={11.96}
                    image="/images/breakfast-6.jpg"
                />
                <Items
                    id="11126"
                    title="BreakFast"
                    price={11.96}
                    image="/images/breakfast-7.jpg"
                />
                <Items
                    id="11127"
                    title="BreakFast"
                    price={11.96}
                    image="/images/breakfast-8.jpg"
                />
                <Items
                    id="11128"
                    title="BreakFast"
                    price={11.96}
                    image="/images/breakfast-9.jpg"
               />
            </div>
            <h1> Lunch </h1>
            <div className="items__">
            <Items
                    id="11130"
                    title="Lunch"
                    price={25.16}
                    image="/images/lunch-1.jpg"
                />
                <Items
                    id="11131"
                    title="Lunch"
                    price={25.16}
                    image="/images/lunch-2.jpg"
                />
                <Items
                    id="11132"
                    title="Lunch"
                    price={25.16}
                    image="/images/lunch-3.jpg"
                />
                <Items
                    id="11133"
                    title="Lunch"
                    price={25.16}
                    image="/images/lunch-4.jpg"
                />
                <Items
                    id="11134"
                    title="Lunch"
                    price={25.16}
                    image="/images/lunch-5.jpg"
                />
                <Items
                    id="11135"
                    title="Lunch"
                    price={25.16}
                    image="/images/lunch-6.jpg"
                />
                <Items
                    id="11136"
                    title="Lunch"
                    price={25.16}
                    image="/images/breakfast-7.jpg"
                />
                <Items
                    id="11137"
                    title="Lunch"
                    price={25.16}
                    image="/images/lunch-8.jpg"
                />
                <Items
                    id="11138"
                    title="Lunch"
                    price={25.16}
                    image="/images/lunch-1.jpg"
               />
            </div>
        </div>
        
    )
}

export default home
