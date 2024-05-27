import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const navigateHandle = (path) => {
        navigate(path);
    }
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul>
                    <li style={{ fontWeight: "600", fontSize: 21 , color:"white"}}>Ecommerce App</li>
                    <li onClick={() => { navigateHandle("/") }} style={{color:"white"}}>Products</li>
                    <li onClick={() => { navigateHandle("/cart") }} style={{color:"white"}}>Cart</li>
                    <li onClick={() => { navigateHandle("/create") }}style={{color:"white"}}>Add a Product +</li>
                </ul>
            </div>
            <div className="navbar-right">
                <span>
                Hola jhon  
                </span>
                <img src="https://picsum.photos/seed/picsum/200/300" alt="Profile" />
            </div>
        </nav>
    );
};

export default NavBar;
