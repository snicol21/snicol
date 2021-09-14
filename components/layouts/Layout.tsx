import { useEffect } from "react"
import Header from "../modules/headers/Header"
const prism = require("prismjs")
require("prismjs/components/prism-sql")

const Layout = ({ children, className = "" }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      prism.highlightAll()
    }
  }, [])

  return (
    <div className={`${className} min-h-screen relative`}>
      <div>
        <Header />
        <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">{children}</div>
      </div>
    </div>
  )
}
export default Layout
