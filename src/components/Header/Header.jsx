import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="teal lighten-2">
            <div className="nav-wrapper">
            <ul id="nav-mobile" className="left">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/diagram">Диаграмма</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Header;
