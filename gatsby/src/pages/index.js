import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import ProductGrid from "../components/ProductGrid"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const [contributors, setContributors] = React.useState(null)
  React.useEffect(() => {
    fetch("https://api.github.com/repos/opengento/gatsbylius/contributors")
      .then(response => response.json())
      .then(setContributors)
  }, [])

    <h2>Nos produits</h2>
    <ProductGrid>
      {data.allProduct.nodes.map(product => (
        <li key={product.slug} className="product-grid__item">
          <Link
            to={`/product/${product.slug}`}
            className="product-grid__item-link"
          >
            <Img
              fixed={product.localImage.childImageSharp.fixed}
              className="product-grid__item-image"
            />
            <br />
            {product.name}
          </Link>
        </li>
      ))}
    </ProductGrid>
      <section>
        <h2>Our products</h2>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data.allProduct.nodes.map(product => (
            <li key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <Img fixed={product.localImage.childImageSharp.fixed} />
                <br />
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Our categories</h2>
        <ul>
          {data.allCategory.edges.map(({ node }) => {
            return (
              <li key={node.code}>
                <Link to={`/categories/${node.code}`}>{node.name}</Link>
              </li>
            )
          })}
        </ul>
      </section>

      {contributors && (
        <section>
          <h2>Thanks!</h2>
          <p>Thanks to all these contributors who worked on this project (<a href="https://github.com/opengento/gatsbylius">join us!</a>):</p>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {contributors.map(contributor => (
              <li key={contributor.id}>
                <a href={contributor.html_url}>
                  <img
                    src={contributor.avatar_url}
                    width="100px"
                    alt={`Avatar of ${contributor.login}`}
                  />
                  <br />
                  {contributor.login}
                </a>
                <br />
                <a href={`https://github.com/opengento/gatsbylius/commits?author=${contributor.login}`} alt={`Contributions of ${contributor.login}`}>
                  ({contributor.contributions} contributions)
                  </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    allCategory {
      edges {
        node {
          id
          code
          slug
          name
        }
      }
    }
    allProduct {
      nodes {
        slug
        name
        localImage {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
