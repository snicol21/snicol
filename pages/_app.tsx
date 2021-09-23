import "../shared/globals.css"
import "prismjs/themes/prism-tomorrow.css"
import Head from "next/head"
import dynamic from "next/dynamic"
import { ThemeProvider } from "next-themes"
import { MDXProvider } from "@mdx-js/react"
import TableValueConstructor from "../content/components/table-value-constructor"

const RealtimeCrypto = dynamic(() => import("../content/components/realtime-crypto-chart").then((mod) => mod.RealtimeCrypto), { ssr: false })

const components = { TableValueConstructor, RealtimeCrypto }

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
