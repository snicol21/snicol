import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/icon"

const BlogPage = ({ data }) => {
  const blogs = data.allMdx.edges
  return (
    <Layout>
      <SEO title="Blog" />
      {blogs.map(blog => (
        <div key={blog.node.id} className="blog">
          <h3 className="blog-title">
            <Link to={blog.node.fields.slug}>
              {blog.node.frontmatter.title}
            </Link>
          </h3>
          {blog.node.frontmatter.subtitle && (
            <h5 className="blog-subtitle">{blog.node.frontmatter.subtitle}</h5>
          )}
          <small className="blog-date">{blog.node.frontmatter.date}</small>
          <p className="blog-excerpt">{blog.node.excerpt}</p>
          {blog.node.frontmatter.categories && (
            <div className="blog-categories">
              {blog.node.frontmatter.categories.map((category, i) => (
                <span key={i} className="blog-category">
                  <Icon name={category}></Icon>
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 185)
          fields {
            slug
          }
          frontmatter {
            categories
            date(formatString: "MMMM DD, YYYY")
            subtitle
            title
          }
          id
        }
      }
    }
  }
`
