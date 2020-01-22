import React from "react";
import PropTypes from "prop-types";
import { Input, Label } from "./styled";

const InputText = ({ label, name }) => {
  return (
    <div>
      <Label for={name}>{label}</Label>
      <Input name={name} type="text" />
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputText;
