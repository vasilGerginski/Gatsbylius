import React from "react";
import PropTypes from "prop-types";
import {graphql, Link} from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";

const Category = ({data}) => {
  const category = data.category;
  const products = category.fields && category.fields.products;
  const subCategories = category.childrenCategory;

  return (
    <Layout>
      <h1>{category.name}</h1>

      <p>{category.description}</p>

      {subCategories && subCategories.length > 0 && (
        <section>
          <h2>Sub categories</h2>
          <ul>
            {subCategories.map(subCategory => {
              return (
                <li key={subCategory.code}>
                  <Link to={`/categories/${subCategory.code}`}>
                    {subCategory.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {products && products.length > 0 && (
        <section>
          <h2>Products</h2>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {products.map(product => {
              return (
                <li key={product.slug}>
                  <Link to={`product/${product.slug}`}>
                    <Img fixed={product.localImage.childImageSharp.fixed}/>{" "}
                    <br/>
                    {product.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {!products && subCategories && subCategories.length > 0 && (
        <section>
          <h2>Products</h2>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {subCategories.map(subCategory => {
              return subCategory.fields.products && subCategory.fields.products.length > 0 && subCategory.fields.products.map(product => {
                return (
                  <li key={product.slug}>
                    <Link to={`product/${product.slug}`}>
                      <Img fixed={product.localImage.childImageSharp.fixed}/>{" "}
                      <br/>
                      {product.name}
                    </Link>
                  </li>
                );
              })
            })}
          </ul>
        </section>
      )}
    </Layout>
  );
};

Category.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Category;

export const query = graphql`
  query CategoryPageQuery($code: String) {
    category(code: {eq: $code}) {
      code
      slug
      name
      description
      fields {
        products {
          id
          name
          slug
          localImage {
            childImageSharp {
              fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      childrenCategory {
        id
        code
        slug
        name
        fields {
          products {
            id
            name
            slug
            localImage {
              childImageSharp {
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
