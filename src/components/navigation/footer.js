import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="flex justify-center px-4 py-4">
      <div className="max-w-4xl">
        © {new Date().getFullYear()} {data.site.siteMetadata.author}. All Rights Reserved. Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
