/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import Logo from 'Assets/Img/logo.png';

function Navigation() {
    return (
        <nav className="nav-content">
            <div className="container">
                <div className="nav-content_wrapper">
                    <Link to={'/'}>
                        <img src={Logo} alt={'pay'} className="nav-content_logo" />
                    </Link>
                    <div>
                        <button className="btn-outlined">
                            Last Purchased
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
