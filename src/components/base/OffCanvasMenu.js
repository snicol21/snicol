import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import CloseButton from "./CloseButton"
import Overlay from "./Overlay"
import Icon from "./Icon"

const OffCanvasMenu = ({ isMenuOpen, toggleMenu, menuItems = [], className = "" }) => {
  const [isMenuClosing, setIsMenuClosing] = useState(false)

  const hideBodyScroll = hide => {
    if (typeof document !== `undefined`) {
      const setOverFlowY = value => (document.getElementsByTagName("body")[0].style.overflowY = value)
      hide ? setOverFlowY("hidden") : setOverFlowY("auto")
    }
  }

  const closeMenu = () => {
    document.getElementById("offCanvasMenu").classList.add("animate__slideOutRight")
    setIsMenuClosing(true)
    hideBodyScroll(false)
    setTimeout(() => {
      toggleMenu()
      setIsMenuClosing(false)
    }, 500)
  }

  const node = useRef()
  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return
    }
    closeMenu()
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })

  hideBodyScroll(isMenuOpen && !isMenuClosing)

  return (
    <>
      <div
        id="offCanvasMenu"
        ref={node}
        className={`
          ${isMenuOpen ? "animate__slideInRight translate-x-0" : "translate-x-full"}
          ${className}
          animate__animated animate__faster fixed z-40 top-0 right-0 h-full w-4/5 text-black bg-white max-w-sm py-6 overflow-auto transform
        `}
      >
        <CloseButton
          disabled={!isMenuOpen}
          onClick={() => closeMenu()}
          classPosition="fixed right-0 bottom-0 px-6 py-6"
          classColor="bg-theme-tertiary text-white hover:bg-theme-tertiary-dark-10"
        />
        <ul>
          {menuItems.map(item => (
            <li key={item.id} className="flex">
              <Link
                to={item.link}
                onClick={() => closeMenu()}
                activeClassName="font-bold bg-theme-primary-light-75 hover:font-bold hover:bg-theme-primary-light-75"
                className="flex items-center px-4 py-4 w-full font-semibold hover:bg-gray-200"
              >
                <div className="bg-theme-primary rounded-full p-2 mr-3">
                  <Icon name={item.icon} className="h-5 w-5 text-white" />
                </div>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isMenuOpen && !isMenuClosing && <Overlay />}
    </>
  )
}

export default OffCanvasMenu
