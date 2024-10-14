import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Title = styled.h1`
  display: inline-block;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;

  &:hover {
    color: #ca76f5;
  }
`

const BlogLink = styled(Link)`
  color: #8726b9;
`

const BlogBody = styled.div`
  margin-bottom: 50px;
`

const Head = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <Title>Thoughts by Frank</Title>

        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogBody key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} <span> [{node.frontmatter.date}]</span>
              </BlogTitle>
            </BlogLink>
            <p>{node.frontmatter.description || node.excerpt}</p>
          </BlogBody>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Head
