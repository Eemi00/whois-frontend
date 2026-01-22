import React from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
    return (
        <nav className="nav">
            <div className="container nav-inner">
                <div className="nav-logo">
                    WHOIS<span>.</span>API
                </div>
            </div>
        </nav>
    );
};