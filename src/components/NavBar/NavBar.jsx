import react from 'react';
import CartWidget from '../cartwidget/CartWidget';  
import './estilosNav.css';
import {NavLink, Link} from "react-router-dom"

const NavBar = () => {
    return(
        <div>
            <nav>
                <link to='/'>
                    <h2>Cartas de Yu-Gi-Oh!</h2>
                </link>

                <navlink to={'/category/comunes'} classname={({   isActive }) => isActive ? 'ActiveOption' : 'Option'}> Comunes </navlink>
                <navlink to={'/category/raras'} classname={({   isActive }) => isActive ? 'ActiveOption' : 'Option'}> Raras </navlink>
                <navlink to={'/category/muy-raras'} classname={({   isActive }) => isActive ? 'ActiveOption' : 'Option'}> Muy Raras </navlink>
            </nav>

            <CartWidget/>
        </div>
    )

    }

    export default NavBar;















    /* return (
    <header className="header">
        {}
        <div className="logo-container">
        <img src={brand} alt="logo" />
        </div>

        {}
        <nav>
        <ul className="nav-container">
            <li>
                <a href="#">Comunes</a>
            </li>
            <li>
                <a href="#">Raras</a>
            </li>
            <li>
                <a href="#">Muy Raras</a>
            </li>
        </ul>
        
            <CartWidget/>
        </nav>
        const brand =

'https://f.hubspotusercontent10.net/hub/20044066/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png';

    </header>
    );
};*/

