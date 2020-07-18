import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./navigation/header"
import Footer from "./navigation/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <>
      <div className="leading-normal tracking-normal min-w-screen min-h-screen overflow-x-hidden">
        <Header siteMetadata={data.site.siteMetadata} />
        <main className="flex justify-center px-4 py-4 mt-24">
          <div className="w-full max-w-4xl">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
