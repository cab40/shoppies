import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <>
            <Navbar variant="dark" className = 'navbar-format'>
                <div className = 'row'>
                    <img
                        alt=""
                        src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top navbar-items"
                    />
                    <h2 href="#home" className = 'navbar-label  navbar-items'>The Shoppies</h2>
                </div>
            </Navbar>
        </>
    );
};

export default NavigationBar;
