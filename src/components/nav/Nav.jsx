import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav">
            <Link className="nav__homeLink" to="/">
                Accueil
            </Link>
            <Link className="nav__aboutLink" to="/about">
                A Propos
            </Link>
        </nav>
    );
};

export default Nav;