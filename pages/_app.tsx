import "../shared/globals.css"
import { ThemeProvider } from "next-themes"
import { MDXProvider } from "@mdx-js/react"
import TableValueConstructor from "../components/modules/scripts/TableValueConstructor"

const components = { TableValueConstructor }

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </MDXProvider>
  )
}

export default MyApp
