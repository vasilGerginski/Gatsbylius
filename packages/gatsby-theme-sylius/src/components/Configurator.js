import React from "react";
import PropTypes from "prop-types";

const Configurator = ({ variants, onChange }) => {
  if (variants.length === 1) {
    return null;
  }
  const optionList = variants.map((option, index) => (
    <option key={index}>{option.name}</option>
  ));

  return (
    <div>
      <select
        onChange={event => {
          onChange(variants.find(({ name }) => name === event.target.value));
        }}
      >
        {optionList}
      </select>
    </div>
  );
};

Configurator.propTypes = {
  variants: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default Configurator;
