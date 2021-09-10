import "../shared/globals.css"
import Head from "next/head"
import { ThemeProvider } from "next-themes"
import { MDXProvider } from "@mdx-js/react"
import TableValueConstructor from "../components/modules/scripts/TableValueConstructor"

const components = { TableValueConstructor }

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <MDXProvider components={components}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </MDXProvider>
    </>
  )
}

export default MyApp
