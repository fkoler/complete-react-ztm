import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Frank's Thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <span>
              {node.frontmatter.title} - {node.frontmatter.date}
            </span>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          excerpt
        }
      }
    }
  }
`
