import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Layout from "../components/Layout";
import ProductBreadcrumb from "../components/ProductBreadcrumb";
import ProductSynthesis from "../components/ProductSynthesis";
import Img from "gatsby-image";

const Product = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <ProductBreadcrumb product={data.product} />
          </Col>
        </Row>

        <Row>
          <Col>
            <Img fixed={data.product.localImage.childImageSharp.fixed} />
          </Col>
        </Row>

        <ProductSynthesis product={data.product} />

        <h5>Details</h5>
        <p>{data.product.description}</p>

        <h5>Attributes</h5>
        <ul>
          <li>Code: {data.product.code}</li>
          <li>
            Average Rating: {data.product.averageRating}
            {"/5"}
          </li>
        </ul>

        <div>
          <h4>Autres produits</h4>
          <ul>
            {data.allProduct.nodes.map(product => {
              return (
                <li key={product.slug}>
                  <p>
                    <Link to={`/product/${product.slug}`}>{product.name}</Link>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

Product.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Product;

export const query = graphql`
  query ProductPageQuery($slug: String) {
    product(slug: { eq: $slug }) {
      code
      slug
      name
      description
      channelCode
      averageRating
      taxons {
        main
      }
      variants {
        price {
          currency
          current
        }
        name
        code
      }
      localImage {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 400, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }

    allProduct {
      nodes {
        name
        slug
        localImage {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
