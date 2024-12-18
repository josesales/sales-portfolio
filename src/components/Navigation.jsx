import React, { useState } from "react";
import { navigationItems } from "../data/navigation";

const Navigation = ({ isShrunk }) => {
  const [isNavigationOn, setIsNavigationOn] = useState(false);
  const className =
    isShrunk && !isNavigationOn ? "navigation-shrunk" : "navigation";

  const onNavigationClick = () => {
    setIsNavigationOn(!isNavigationOn);
  };

  const NavigationItemsUi = navigationItems.map((item) => (
    <li key={item.id} className={`${className}__item`}>
      <a
        href={item.link}
        onClick={onNavigationClick}
        className={`${className}__link`}
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <div className={className}>
      <input
        type="checkbox"
        id="nav-toggle"
        checked={isNavigationOn}
        readOnly={true}
        className={`${className}__checkbox`}
      />

      <label
        htmlFor="nav-toggle"
        onClick={onNavigationClick}
        className={`${className}__button`}
      >
        <span className={`${className}__icon`}></span>
      </label>

      <div className={`${className}__background`}></div>

      <nav className={`${className}__nav`}>
        <ul className={`${className}__list`}>{NavigationItemsUi}</ul>
      </nav>
    </div>
  );
};
export default Navigation;
