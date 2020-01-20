import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing } from "../../../helpers/themeHelpers";

const StyledMain = styled.main`
  margin-top: ${spacing(["lg"])};
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
