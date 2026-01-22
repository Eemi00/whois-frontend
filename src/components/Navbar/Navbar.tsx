import React from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
    return (
        <nav className="nav">
            <div className="container nav-inner">
                <a href="https://eemille.fi" className="nav-logo">
                    WHOIS<span>.</span>API
                </a>
            </div>
        </nav>
    );
};