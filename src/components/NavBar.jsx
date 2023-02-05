import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles/NavBar.css';


const NavBar = ({ background }) => {
  const brand =
    'https://i.pinimg.com/originals/af/9b/bd/af9bbd2bed400b5c05d9dc0cfbd7a3bf.png';
  return (
    <header className={`header background--${background}`}>
      
      <div className="header-container">
        
        {/* Botón de menú  */}
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
          <span>Menu</span>
        </div>

        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li className="products-item">
              <Link to="/products">
                Productos <span className="arrow"></span>
              </Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* logo de la marca */}
        <div className="logo-container">
          <Link to="/">
            <img src={brand} alt="logo" />
          </Link>
        </div>

        {/* cart widget */}
        <Link to="/cart">
          <CartWidget />
        </Link>
          
      </div>
    </header>
  );
};

export default NavBar;
