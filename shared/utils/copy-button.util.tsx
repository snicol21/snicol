export function addCopyButtons(clipboard) {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    var button = document.createElement("button")
    button.className =
      "inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    button.type = "button"
    button.style.cssText = "position: absolute; right: 0; top: 0; margin: 0.5rem; opacity: 0.2"
    button.addEventListener("mouseout", () => (button.style.opacity = "0.2"))
    button.addEventListener("mouseover", () => (button.style.opacity = "0.9"))

    var span = document.createElement("span")
    span.style.width = "3rem"
    span.innerText = "Copy"

    button.appendChild(span)

    button.addEventListener("click", () => {
      clipboard.writeText(codeBlock.textContent).then(
        () => {
          /* Chrome doesn't seem to blur automatically, leaving the button in a focused state. */
          button.blur()
          span.innerText = "Copied!"
          setTimeout(() => {
            span.innerText = "Copy"
          }, 1500)
        },
        (error) => {
          span.innerText = "Error"
        }
      )
    })

    var pre = codeBlock.parentNode as HTMLElement
    pre.style.position = "relative"
    pre.prepend(button)
  })
}
