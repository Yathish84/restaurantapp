import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import PaymentIcon from '@material-ui/icons/Payment';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import{useStateValue} from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket,user}] = useStateValue();
    console.log("user is 🥱🥱🥱🥱",user );
    const loginn=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/" className="link__logo">
                <p className="header__logo">OD</p>
            </Link>
            <div className="header__nav">
                <Link to="/" className="link">
                    <span className="header__home">Home</span>
                    <HomeIcon className="icon" />
                </Link>
                <Link to="/" className="link">
                    <span className="header__about">About</span>
                    <InfoIcon className="icon" />
                </Link>
                <Link to="/" className="link">
                    <span className="header__contact">Contact</span>
                    <PermContactCalendarIcon className="icon" />
                </Link>
                <Link to={!user && "/login"} className="link">
                    <div onClick={loginn} className="nav__options">
                        <span className="header__user">Hey {user?.email}</span>
                        <span className="header__sign">{user ? 'Sign-Out' : 'Sign-In'}</span>
                    </div>
                </Link>
                <Link to="/checkout" className="link">
                    <span className="header__orders">Orders</span>
                    <LocalDiningIcon className="icon" />
                    <span className="itemsslength">{basket?.length}</span>
                </Link>
               
               <div className="slider"></div> 
            </div>
        </div>
    )
}

export default Header
