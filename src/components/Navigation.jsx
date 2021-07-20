import React from 'react';
import { navigationItems } from '../data/navigation';

const Navigation = () => {

    const navigationItemsUi = navigationItems.map((item, index) => <li key={index} className="navigation__item">
        <a href={item.link} className="navigation__link">{item.name}</a></li>);

    return (
        <div className="navigation">
            <input type="checkbox" id="nav-toggle" className="navigation__checkbox" />

            <label htmlFor="nav-toggle" className="navigation__button">
                <span className="navigation__icon"></span>
            </label>

            <div className="navigation__background"></div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    {navigationItemsUi}
                </ul>
            </nav>
        </div>
    )
}
export default Navigation;