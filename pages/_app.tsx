import "@fontsource/inter"
import "../shared/globals.css"
import "prismjs/themes/prism-tomorrow.min.css"

import { ThemeProvider } from "next-themes"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import React from "react"

import { MDXProvider } from "@mdx-js/react"

import * as posts from "../components/posts"

const HeadingLink = ({ type, children, ...props }) => {
  const header = React.createElement(type, props, children)
  if (props.id) {
    return (
      <Link href={`#${props.id}`} className="heading-link">
        {header}
      </Link>
    )
  }
  return header
}

const ResponsiveImage = (props) => (
  <span className="image-container">
    <Image className="image" alt={props.alt} fill {...props}></Image>
  </span>
)

const components = {
  ...posts,
  img: ResponsiveImage,
  h1: (props) => <HeadingLink type="h1" {...props} />,
  h2: (props) => <HeadingLink type="h2" {...props} />,
  h3: (props) => <HeadingLink type="h3" {...props} />,
  h4: (props) => <HeadingLink type="h4" {...props} />,
  h5: (props) => <HeadingLink type="h5" {...props} />,
  h6: (props) => <HeadingLink type="h6" {...props} />,
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Spencer Nicol's personal website that contains learning from his career as a software engineer."></meta>
      </Head>
      <MDXProvider components={components}>
        <ThemeProvider attribute="class" enableSystem={true}>
          <Script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
          <Component {...pageProps} />
        </ThemeProvider>
      </MDXProvider>
    </>
  )
}

export default MyApp
