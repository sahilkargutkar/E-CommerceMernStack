import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import SaharaStore from './images/SaharaStore.jpg';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket' 
import {useStateValue} from "./StateProvider";
import {auth } from './firebase';

function Header() {
    const [{cart,user},dispatch] = useStateValue();  

    const handleAuthentication = () =>{
   
        if(user){
            auth.signOut();

        }
        

    }

    console.log(cart);

    return (
        
        <nav className="header">
            <Link to="/">
            <img className="header__logo"src={SaharaStore} alt="search"/>
            </Link>

            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div> 

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                <div onClick={handleAuthentication} className="header__option">
                <span  className="header__optionLineOne">Hello {!user ? "Guest" : user.email } </span>
               <span className="header__optionLineTwo">{!user ? "Sign In":"Sign Out"}</span>
               </div>
                </Link>

            

            
                <Link to="/orders" className="header__link">
            
                <div className="header__option">
                    <span className="header__optionLineOne">Return &</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>
                </Link>

            

            
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Sahara</span>
                    <span className="header__optionLineTwo">plus +</span>
                </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionCart">
                        <ShoppingBasketIcon/>
                 <span className="header__optionLineTwo header__CartCount" >{cart?.length}</span>
                    </div>
                
                </Link>

                </div>

        </nav>
        
    )
}

export default Header
