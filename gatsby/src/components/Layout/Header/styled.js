import styled from "styled-components";
import { Link } from "gatsby";
import { fontFamily, spacing } from "../../../helpers/themeHelpers";

export const Logo = styled(Link)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primary};
  ${fontFamily("titleFont")}
  font-weight: 600;
  text-transform: uppercase;
`;

export const NavList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  padding: 0 1rem;
  text-transform: uppercase;
`;

export const NavLink = styled(Link)`
  color: rgb(36, 36, 40);
  transition: color 0.3s;
  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${spacing(["lg"])};
  padding: ${spacing(["none", "sm"])};
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  z-index: 100;
`;
