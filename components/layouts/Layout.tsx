import Header from "../modules/headers/Header"

const Layout = ({ children, className = "" }) => {
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
