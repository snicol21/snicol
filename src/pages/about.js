import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <>
    <SEO title="About" />
    <h2>About</h2>
    <p>{data.site.siteMetadata.description}</p>
    <p>Made with love by {data.site.siteMetadata.author}</p>
  </>
)

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        author
      }
    }
  }
`
