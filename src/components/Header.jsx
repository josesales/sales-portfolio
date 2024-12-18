import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import DropdownMenu from "./DropdownMenu";
import { contact } from "../data/contact";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isShrunk, setIsShrunk] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (isScrolling) {
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  }, [isScrolling]);

  return (
    <header className={`header ${isShrunk ? "header--shrunk" : ""}`}>
      <Navigation isShrunk={isShrunk} />
      <DropdownMenu name="Get in Touch" items={contact} />
    </header>
  );
};

export default Header;
