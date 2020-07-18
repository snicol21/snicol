import React from "react"
import { CloseSvgPath } from "./SvgPaths"

const CloseButton = ({ disabled, onClick, classPosition = "", classColor = "" }) => {
  return (
    <>
      <div className={`z-30 ${classPosition}`}>
        <button disabled={disabled} onClick={onClick} type="button" className={`p-3 rounded-full shadow focus:shadow-focus focus:outline-none ${classColor}`}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <CloseSvgPath />
          </svg>
        </button>
      </div>
    </>
  )
}

export default CloseButton
