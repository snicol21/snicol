import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteMetadata }) => {
  return (
    <>
      <header>
        <Link to="/">
          <h1>{siteMetadata.title}</h1>
          <div>{siteMetadata.subtitle}</div>
        </Link>
        <Link to="/">
          <img src="logo-92x92.png" alt="logo" />
        </Link>
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
