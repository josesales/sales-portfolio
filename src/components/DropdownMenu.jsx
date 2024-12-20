import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowUpIcon } from "../assets/arrow-up.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/arrow-down.svg";

const DropdownMenu = ({ name = "", items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MenuItemsUi = items.map((item) => (
    <li key={item.id} className="dropdown-menu__item">
      <a
        rel="noreferrer"
        target="_blank"
        href={item.link}
        title={item.name}
        className="dropdown-menu__link"
      >
        {item.icon && (
          <img src={item.icon} className="dropdown-menu__img" alt={item.name} />
        )}
        <span className="dropdown-menu__name">{item.name}</span>
      </a>
    </li>
  ));

  return (
    <div
      onClick={toggleDropdown}
      onMouseLeave={() => setIsOpen(false)}
      className={isOpen ? "dropdown-menu-open" : "dropdown-menu"}
    >
      <div className="dropdown-menu__text">
        {name}
        {isOpen ? (
          <ArrowUpIcon className="dropdown-menu__img" />
        ) : (
          <ArrowDownIcon className="dropdown-menu__img" />
        )}
      </div>
      {isOpen && (
        <>
          <div className="divider" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="dropdown-menu__list-container"
          >
            <ul className="dropdown-menu__list">{MenuItemsUi}</ul>
          </div>
        </>
      )}
    </div>
  );
};
export default DropdownMenu;
