import React, { useState } from "react";
import PropTypes from "prop-types";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoIosMenu } from "react-icons/io";
import { useMedia } from "react-use";
import {
  Header as StyledHeader,
  MenuButton,
  Logo,
  Nav,
  NavLink,
  NavList,
  NavItem,
} from "./styled";
import SlideMenu from "../../SlideMenu";
import MiniCart from "./../../MiniCart/MiniCart";
import MiniCartButton from "./../../MiniCart/MiniCartButton";

const Header = ({ siteTitle = ``, menuLinks }) => {
  const isWide = useMedia("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <div>
      {/* <SlideMenu isOpen={isOpen}>TEST</SlideMenu> */}
      <StyledHeader>
        {!isWide && (
          <>
            <MenuButton onClick={toggleMenu}>
              <IoIosMenu size={30} />
            </MenuButton>
          </>
        )}
        <Logo to="/">{siteTitle}</Logo>
        <Nav>
          <NavList>
            {isWide &&
              menuLinks.map(({ node }) => (
                <NavItem key={node.code}>
                  <NavLink
                    activeClassName="active"
                    to={`/categories/${node.code}`}
                  >
                    {node.name}
                  </NavLink>
                </NavItem>
              ))}
            <NavItem>
              <MiniCartButton />
            </NavItem>
            <NavItem key={"user"}>
              <FontAwesomeIcon icon={faUser} />
            </NavItem>
          </NavList>
        </Nav>
      </StyledHeader>
      <MiniCart />
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array.isRequired,
};

export default Header;
