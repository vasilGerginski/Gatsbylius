import styled from "styled-components";
import { Link } from "gatsby";
import { media } from "styled-bootstrap-grid";
import { fontFamily, color, spacing } from "../../../helpers/themeHelpers";

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${spacing(["lg"])};
  padding: ${spacing(["none", "xs"])};
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  z-index: 100;
  ${media.md`
    padding: ${spacing(["none", "sm"])};
  `}
`;

export const MenuButton = styled.div`
  display: flex;
  flex-basis: 33%;
`;

export const Logo = styled(Link)`
  flex-basis: 33%;
  font-size: 1.3rem;
  color: ${color("primary")};
  ${fontFamily("titleFont")}
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  ${media.md`
    flex-basis: 50%;
    text-align: left;
  `}
`;

export const Nav = styled.nav`
  flex-basis: 33%;
  ${media.md`
    flex-basis: 50%;
  `}
`;

export const NavList = styled.ul`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  padding: 0 0.4rem;
  text-transform: uppercase;
  &:last-child {
    padding-right: 0;
  }
`;

export const NavLink = styled(Link)`
  color: rgb(36, 36, 40);
  transition: color 0.3s;
  &:hover,
  &.active {
    color: ${color("primary")};
  }
`;

export const NavTouchWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 310px;
  padding: 1rem;
  z-index: 50;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  box-shadow: ${props => props.theme.shadows.boxShadow};
`;

export const NavTouch = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  .navtouch__link {
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 0.25rem;
    color: #666;
    &:hover {
      color: #fff;
      background-color: ${color("primary")};
    }
  }
`;
