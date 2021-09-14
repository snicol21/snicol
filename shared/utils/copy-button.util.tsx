export function addCopyButtons(clipboard) {
  document.querySelectorAll("pre > code").forEach(function (codeBlock) {
    var button = document.createElement("button")
    button.className =
      "absolute right-0 m-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    button.type = "button"
    button.innerText = "Copy"

    button.addEventListener("click", function () {
      clipboard.writeText(codeBlock.textContent).then(
        function () {
          /* Chrome doesn't seem to blur automatically, leaving the button in a focused state. */
          button.blur()
          button.innerText = "Copied!"
          setTimeout(function () {
            button.innerText = "Copy"
          }, 1500)
        },
        function (error) {
          button.innerText = "Error"
        }
      )
    })

    var pre = codeBlock.parentNode
    pre.parentNode.insertBefore(button, pre)
    pre.parentElement.classList.add("relative")
  })
}
