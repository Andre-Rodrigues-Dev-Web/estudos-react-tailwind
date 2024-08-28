import React, { useState } from "react";
import Logo from "./Logo";
import ButtonHamburguer from "./ButtonHamburguer";
import LinksContent from "./Links";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#003641]">
      <div className="flex items-center justify-between p-[0.56em] px-4">
        <Logo />
        <ButtonHamburguer onClick={toggleMenu} />
        <LinksContent isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Menu;
