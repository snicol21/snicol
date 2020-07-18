import React from "react"

const Icon = ({ name = "", className = "" }) => {
  const getIcon = () => {
    switch (name) {
      case "home":
        return <Home className={className} />
      case "newspaper":
        return <NewsPaper className={className} />
      case "portfolio":
        return <Portfolio className={className} />
      case "phone":
        return <Phone className={className} />
      case "happy-face":
        return <HappyFace className={className} />
      default:
        return <div></div>
    }
  }
  return <>{getIcon()}</>
}
export default Icon

const Home = ({ className = "" }) => {
  return (
    <svg className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
    </svg>
  )
}

const NewsPaper = ({ className = "" }) => {
  return (
    <svg className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M16 2h4v15a3 3 0 01-3 3H3a3 3 0 01-3-3V0h16v2zm0 2v13a1 1 0 001 1 1 1 0 001-1V4h-2zM2 2v15a1 1 0 001 1h11.17a2.98 2.98 0 01-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
    </svg>
  )
}

const Portfolio = ({ className = "" }) => {
  return (
    <svg className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9 12H1v6a2 2 0 002 2h14a2 2 0 002-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 012-2h4a2 2 0 012 2v1h4a2 2 0 012 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
    </svg>
  )
}

const Phone = ({ className = "" }) => {
  return (
    <svg className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M20 18.35V19a1 1 0 01-1 1h-2A17 17 0 010 3V1a1 1 0 011-1h4a1 1 0 011 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 01.99 1v3.35z" />
    </svg>
  )
}

const HappyFace = ({ className = "" }) => {
  return (
    <svg className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M10 20a10 10 0 110-20 10 10 0 010 20zM6.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.16 3H4.34a6 6 0 0011.32 0z" />
    </svg>
  )
}
