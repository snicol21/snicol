export function addCopyButtons(clipboard) {
  document.querySelectorAll("pre > code").forEach(function (codeBlock) {
    var button = document.createElement("button")
    button.className =
      "transition-property:opacity duration-200 ease-in-out m-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white opacity-20 bg-indigo-600 hover:bg-indigo-700 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    button.type = "button"
    button.style.cssText = "position: absolute; right: 0"

    var span = document.createElement("span")
    span.style.width = "3rem"
    span.innerText = "Copy"

    button.appendChild(span)

    button.addEventListener("click", function () {
      clipboard.writeText(codeBlock.textContent).then(
        function () {
          /* Chrome doesn't seem to blur automatically, leaving the button in a focused state. */
          button.blur()
          span.innerText = "Copied!"
          setTimeout(function () {
            span.innerText = "Copy"
          }, 1500)
        },
        function (error) {
          span.innerText = "Error"
        }
      )
    })

    var pre = codeBlock.parentNode
    pre.parentElement.style.position = "relative"
    pre.parentNode.insertBefore(button, pre)
  })
}
