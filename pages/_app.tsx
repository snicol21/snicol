import "../shared/globals.css"
import "prismjs/themes/prism-tomorrow.css"

import { ThemeProvider } from "next-themes"
import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import React from "react"

import { MDXProvider, useMDXComponents } from "@mdx-js/react"

import * as components from "../components/posts"

function HeadingLink({ type, children, ...props }) {
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

const customHeaders = {
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <MDXProvider components={{ ...components, ...customHeaders }}>
        <ThemeProvider attribute="class" enableSystem={true}>
          <Script src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
          <Component {...pageProps} />
        </ThemeProvider>
      </MDXProvider>
    </>
  )
}

export default MyApp
