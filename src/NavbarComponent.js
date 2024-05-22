import React from 'react';
import AboutComponent from './AboutComponent';
import ShopComponent from './ShopeComponent';
import CartComponent from './CartComponent';
import shopingCart from '../src/images/LogoPictures/shopping-cart.png';
import logo3 from '../src/images/LogoPictures/logo3.png';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GoToPayment from './GoToPayment';

function Navbar() {


  return (
    <>

 <img style={{ width: 400, height: 80 }} src={logo3} className="logo3" alt="logo3" />
 <br></br><br></br>
 
 
      <div style={{backgroundColor:'#C12E5A',height:70}}>
        <BrowserRouter>
          <div id="spaceOfNav">
             <div class="link"><Link to="/CartComponent"> <button id="cartImg"> <img  style={{ width: 50, height: 50 }} src={shopingCart} className="shopingCart" alt="shopingCart" /></button></Link></div>
           
            <div class="link"><Link to="/ShopeComponent"> <button  class="navButton">Home</button></Link></div>
            <div class="link" > <Link to="/AboutComponent"><button class="navButton">About</button></Link> </div>
          </div>
          <Routes> 
            <Route path="/ShopeComponent" element={<ShopComponent></ShopComponent>} />
            <Route path="/AboutComponent" element={<AboutComponent></AboutComponent>} />
           
            <Route path="/CartComponent" element={<CartComponent></CartComponent>} />
            <Route path='/GoToPayment' element={<GoToPayment></GoToPayment>}/>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default Navbar;