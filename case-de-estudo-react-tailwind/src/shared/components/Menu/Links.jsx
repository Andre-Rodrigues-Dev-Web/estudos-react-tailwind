import React from "react";
import { Link } from "react-router-dom";
import { ContainerLinks } from "./style";

const LinksContent = ({ isOpen }) => {
  return (
    <ContainerLinks isOpen={isOpen}>
      <ul className="flex flex-col md:flex-row gap-4">
        <li className="p-[0.45em] px-4 md:px-7">
          <Link to="/" className="text-white">
            Destaques
          </Link>
        </li>
        <li className="p-[0.45em] px-4 md:px-7">
          <Link to="/about" className="text-white">
            Solução de TI
          </Link>
        </li>
        <li className="p-[0.45em] px-4 md:px-7">
          <Link to="/about" className="text-white">
            Nossos Treinamentos
          </Link>
        </li>
        <li className="p-[0.45em] px-4 md:px-7 bg-[#00ae9d] rounded-[5px]">
          <Link className="text-white" href="#">
            Contato
          </Link>
        </li>
      </ul>
    </ContainerLinks>
  );
};

export default LinksContent;
