import React, { useState } from 'react';
import { navigationItems } from '../data/navigation';

const Navigation = () => {

    const [isNavigationOn, setIsNavigationOn] = useState(false);

    const onNavigationClick = () => {
        setIsNavigationOn(!isNavigationOn);
    }

    const NavigationItemsUi = navigationItems.map((item, index) => <li key={index} className="navigation__item">
        <a href={item.link} onClick={onNavigationClick} className="navigation__link">{item.name}</a></li>);

    return (
        <div className="navigation">
            <input type="checkbox" id="nav-toggle" checked={isNavigationOn} className="navigation__checkbox" />

            <label htmlFor="nav-toggle" onClick={onNavigationClick} className="navigation__button">
                <span className="navigation__icon"></span>
            </label>

            <div className="navigation__background"></div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    {NavigationItemsUi}
                </ul>
            </nav>
        </div>
    )
}
export default Navigation;