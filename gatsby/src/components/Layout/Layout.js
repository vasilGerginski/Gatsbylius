import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Header from "./Header";
import Footer from "./Footer";
import { GlobalStyle } from "../../config/style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../../config/style/theme";
import Hero from "../Hero";
import Main from "./Main";

const Layout = ({ children, pageTitle }) => {
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
  `);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:600|Roboto:300,300i,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header
          menuLinks={data.allCategory.edges}
          siteTitle={data.site.siteMetadata.title}
        />

        <Main>
          {pageTitle === "Gatsbylius Print Shop" && (
            <Hero pageTitle={pageTitle} />
          )}

          <Container>
            <h1>{pageTitle}</h1>
            {children}
          </Container>
        </Main>

        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <span> & </span>
          <a href="https://sylius.com/">Sylius</a>
        </Footer>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Layout;
