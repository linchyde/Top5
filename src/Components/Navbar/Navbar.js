import React from 'react';
import './Navbar.css';
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import {useStateValue} from './StateProvider';
import {Link} from 'react-router-dom';
// import {auth} from './firebase';

function Navbar() {

    // const [{basket,user},dispatch] = useStateValue();

    


    return (
        <div className='navbar'>
        <a to='/'>
        <img className='navbar_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />

        </a>
       
      

        <div className="navbar_nav">
        
         <a href='/'>
        <div className="navbar_option" >
        <span className="navbar_optionLineOne">Home
        </span>
        </div>
        </a>

        <a href='/'>
        <div className="navbar_option" >
        <span className="navbar_optionLineOne">What is TOP5SWAP ?
        </span>
        </div>
        </a>

        <a href='/'>
        <div className="navbar_option" >
        <span className="navbar_optionLineOne">Holdings
        </span>
        </div>
        </a>


       

       

       
       

       

        </div>
            
        </div>
    )
}

export default Navbar
