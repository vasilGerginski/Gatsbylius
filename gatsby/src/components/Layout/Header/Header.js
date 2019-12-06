import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Header as StyleHeader,
  Logo,
  NavLink,
  NavList,
  NavItem,
} from "./styled"
import Container from "../Container"

const Header = ({ siteTitle = ``, menuLinks }) => (
  <Container>
    <StyleHeader>
      <Logo to="/">{siteTitle}</Logo>
      <nav>
        <NavList>
          {menuLinks.map(({ node }) => {
            return (
              <NavItem key={node.code}>
                <NavLink
                  activeClassName="active"
                  to={`/categories/${node.code}`}
                >
                  {node.name}
                </NavLink>
              </NavItem>
            )
          })}
        </NavList>
      </nav>
    </StyleHeader>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.object.isRequired,
}

export default Header
