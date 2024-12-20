import React, { useState } from "react";
import CompanyModal from "./CompanyModal";

const Company = ({ company }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <li onClick={() => setIsModalOpen(true)} className="company-item">
        <img src={company.img} alt="company" className="company-item__img" />
      </li>
      <CompanyModal
        company={company}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Company;
