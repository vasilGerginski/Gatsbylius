import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledHeader } from "./styled"

const Header = ({ siteTitle, menuLinks }) => (
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
              <Link to={`/categories/${node.code}`}>{node.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
