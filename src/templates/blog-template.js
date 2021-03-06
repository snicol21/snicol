import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import TechIcon from "../components/base/TechIcon"

const BlogLayout = ({ data: { mdx } }) => {
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <div className="back">
        <Link to="/blog">
          <i className="arrow left"></i>
          {`Back to blogs`}
        </Link>
      </div>
      <div className="blog">
        <h3 className="blog-title">{mdx.frontmatter.title}</h3>
        {mdx.frontmatter.subtitle && <h5 className="blog-subtitle">{mdx.frontmatter.subtitle}</h5>}
        <small className="blog-date">{mdx.frontmatter.date}</small>
        <div className="blog-body">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
        {mdx.frontmatter.categories && (
          <>
            <div className="blog-categories-title">Categories</div>
            <div className="blog-categories">
              {mdx.frontmatter.categories.map((category, i) => (
                <span key={i} className="blog-category">
                  <TechIcon name={category}></TechIcon>
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default BlogLayout

export const pageQuery = graphql`
  query BlogPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        categories
      }
      id
    }
  }
`
