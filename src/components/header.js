import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const Header = ({ siteMetadata }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 92) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <>
      <header>
        <Link to="/">
          <h1>{siteMetadata.title}</h1>
          <div>{siteMetadata.subtitle}</div>
        </Link>
        <Img fixed={data.logo.childImageSharp.fixed} />
      </header>
      <nav>
        <Link to="/" activeClassName="active" className="desktop-only">
          Home
        </Link>
        <Link to="/blog" activeClassName="active">
          Blog
        </Link>
        <Link to="/portfolio" activeClassName="active">
          Portfolio
        </Link>
        <Link to="/about" activeClassName="active">
          About
        </Link>
        <Link to="/contact" activeClassName="active">
          Contact
        </Link>
      </nav>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
