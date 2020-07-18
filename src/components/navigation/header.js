import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import HorizontalMenu from "../base/HorizontalMenu"
import OffCanvasMenu from "../base/OffCanvasMenu"
import HamburgerButton from "../base/HamburgerButton"

const Header = ({ siteMetadata }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { id: 1, name: "Home", link: "/", icon: "home" },
    { id: 2, name: "Blog", link: "/blog", icon: "newspaper" },
    { id: 3, name: "Portfolio", link: "/portfolio", icon: "portfolio" },
    { id: 4, name: "About", link: "/about", icon: "happy-face" },
    { id: 5, name: "Contact", link: "/contact", icon: "phone" },
  ]

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <header className="fixed w-full text-white bg-black px-4">
      <div className="max-w-4xl m-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center h-16">
            <h1 className="text-xl">{siteMetadata.title}</h1>
          </Link>
          <HorizontalMenu menuItems={menuItems} className="hidden md:visible md:flex" />
          <div className="flex items-center h-16">
            <Img loading="eager" fixed={data.logo.childImageSharp.fixed} />
          </div>
        </div>
      </div>
      <HamburgerButton
        disabled={isMenuOpen}
        onClick={() => toggleMenu()}
        classPosition="fixed right-0 bottom-0 px-6 py-6"
        classColor="bg-theme-primary text-white hover:bg-theme-primary-dark-10"
      />
      <OffCanvasMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} menuItems={menuItems} className="border-l border-gray-400 bg-gray-100 shadow-md" />
    </header>
  )
}

export default Header
