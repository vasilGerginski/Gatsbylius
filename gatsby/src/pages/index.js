import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Container, Row, Col } from "styled-bootstrap-grid";

import Layout from "../components/Layout";
import { GalleryItem } from "../components/ProductGrid/styled";
import SEO from "../components/seo";

const pageTitle = "Gatsbylius Print Shop";

const IndexPage = ({ data }) => (
  <Layout pageTitle={pageTitle}>
    <SEO title={pageTitle} />
    <Container>
      <Row>
        <Col>
          <h2>Our products</h2>
        </Col>
      </Row>

      <Row>
        {data.allProduct.nodes.map(product => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <GalleryItem>
              <Link to={`/product/${product.slug}`}>
                <Img
                  sizes={{
                    ...product.localImage.childImageSharp.fluid,
                    aspectRatio: 3 / 2,
                  }}
                />
                <br />
                {product.name}
              </Link>
            </GalleryItem>
          </Col>
        ))}
      </Row>

      <Row>
        <Col>
          <h2>Our categories</h2>
        </Col>
      </Row>

      <Row>
        {data.allCategory.edges.map(({ node: category }) => {
          const fluidCategoryImage = category.localImage
            ? category.localImage.childImageSharp.fluid
            : data.file.childImageSharp.fluid;

          return (
            <Col key={category.code} sm={6} md={4} lg={3}>
              <GalleryItem>
                <Link to={`/categories/${category.code}`}>
                  <Img
                    sizes={{
                      ...fluidCategoryImage,
                      aspectRatio: 3 / 2,
                    }}
                  />

                  <br />
                  {category.name}
                </Link>
              </GalleryItem>
            </Col>
          );
        })}
      </Row>
    </Container>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    file(name: { eq: "placeholder" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allCategory {
      edges {
        node {
          id
          code
          slug
          name
          localImage {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allProduct {
      nodes {
        slug
        name
        localImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
