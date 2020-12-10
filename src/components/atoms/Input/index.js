import React from "react";
import PropTypes from "prop-types";

import { Container, InputContent, Label } from "./styles.js";

const Input = ({ space, label, type, name, value, onChange, required }) => {
  return (
    <Container space={space}>
      <InputContent
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      />
      <Label value={value}>{label}</Label>
    </Container>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  label: "",
  name: "",
  onChange: () => {},
  required: false,
  type: "text",
  value: "",
};

export default Input;
