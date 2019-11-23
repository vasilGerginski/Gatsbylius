/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./styled"
import Helmet from "react-helmet"
import Header from "../Header"
import "../reset.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery($code: String) {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }

      category(code: { eq: $code }) {
        code
        slug
        name
      }

      allCategory(filter: { level: { eq: 0 } }) {
        edges {
          node {
            id
            code
            slug
            name
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:600|Roboto:300,300i,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Container>
        <Header
          menuLinks={data.allCategory.edges}
          siteTitle={data.site.siteMetadata.title}
        />

        <main>{children}</main>

        <footer style={{ textAlign: "center", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <span> & </span>
          <a href="https://sylius.com/">Sylius</a>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
