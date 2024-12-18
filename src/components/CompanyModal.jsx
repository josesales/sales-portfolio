import React from "react";
import Modal from "./Modal";

const CompanyModal = ({ isOpen, close, company }) => {
  return (
    <div className="company-modal">
      <Modal
        icon={company.img}
        title={company.name}
        show={isOpen}
        onClose={close}
      >
        <h2 className="company-modal__position">{company.position}</h2>
        <p className="company-modal__description">{company.jobDescription}</p>
        <div className="company-modal__stack">
          <h3 className="company-modal__stack-title">Stack</h3>

          <ul className="company-modal__stack-list">
            {company.stack.map((stack) => (
              <li
                key={`company-modal${stack}${company.id}`}
                className="company-modal__stack-item"
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default CompanyModal;
