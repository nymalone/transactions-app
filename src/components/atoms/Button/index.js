import React from "react";
import PropTypes from "prop-types";

import { Container, ButtonContent, ButtonLabel } from "./styles.js";

const Button = ({ onClick, disabled, children }) => {
  return (
    <Container>
      <ButtonContent onClick={onClick} disabled={disabled}>
        <ButtonLabel>{children}</ButtonLabel>
      </ButtonContent>
    </Container>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};
export default Button;
