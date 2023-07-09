import react from 'react';
import CartWidget from '../cartwidget/CartWidget';  
import './estilosNav.css';

const NavBar = () => {
    const brand =
    'https://f.hubspotusercontent10.net/hub/20044066/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png';

    return (
    <header className="header">
        {}
        <div className="logo-container">
        <img src={brand} alt="logo" />
        </div>

        {}
        <nav>
        <ul className="nav-container">
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                <a href="#">Productos</a>
            </li>
            <li>
                <a href="#">Nosotros</a>
            </li>
            <li>
                <a href="#">
                    <CartWidget/>
                </a>
            </li>
        </ul>
        </nav>


    </header>
    );
};

export default NavBar;