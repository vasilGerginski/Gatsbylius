import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import StyledHeader from "./styled"
import Container from "../Container"

const Header = ({ siteTitle = ``, menuLinks }) => (
  <Container>
    <StyledHeader>
      <div>
        <Link className="logo" to="/">
          {siteTitle}
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          {menuLinks.map(({ node }) => {
            return (
              <li className="nav-link" key={node.code}>
                <Link activeClassName="active" to={`/categories/${node.code}`}>
                  {node.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </StyledHeader>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.object.isRequired,
}

export default Header
