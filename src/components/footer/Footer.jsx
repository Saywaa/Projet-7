import React from 'react';
import logo from "../../assets/images/logo/footerLogo.png";

function Footer () {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo de l'agence immobilière Kasa"/>
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer;