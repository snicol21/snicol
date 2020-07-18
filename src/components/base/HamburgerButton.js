import React from "react"
import { HamburgerSvgPath } from "./SvgPaths"

const HamburgerButton = ({ disabled, onClick, classPosition = "", classColor = "" }) => {
  return (
    <>
      <div className={`z-30 ${classPosition}`}>
        <button disabled={disabled} onClick={onClick} type="button" className={`p-3 rounded-full shadow focus:shadow-focus focus:outline-none ${classColor}`}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <HamburgerSvgPath />
          </svg>
        </button>
      </div>
    </>
  )
}

export default HamburgerButton
