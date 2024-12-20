import React from "react";

const ToggleSwitch = ({ name, isActive, onClickHandler }) => {
  return (
    <div className="switch-container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={name}
          id={name}
          checked={isActive}
        />
        <label
          className="toggle-switch-label"
          htmlFor={name}
          onClick={onClickHandler}
        >
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
      <div className="switch-label" />
    </div>
  );
};

export default ToggleSwitch;
