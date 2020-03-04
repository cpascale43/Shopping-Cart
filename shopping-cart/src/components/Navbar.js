import React from 'react';
import { Link } from 'react-router-dom'

 const Navbar = ()=>{
    return(
            <nav>
                <div className="container">
                    <span><Link to="/">Shop</Link></span>
                    <br />
                    <span><Link to="/cart">My cart</Link></span>
                </div>
            </nav>
    )
}

export default Navbar;
