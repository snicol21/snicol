export function addCopyButtons(clipboard) {
  document.querySelectorAll('pre > code').forEach((codeBlock) => {
    const button = document.createElement('button');
    const svg = `<svg version="1.1" viewBox="15 5 70 70" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M66.667 10.833h-4.754a5.821 5.821 0 0 0 -5.246 -3.333h-13.333c-2.317 0 -4.308 1.371 -5.246 3.333H33.333c-5.058 0 -9.167 4.108 -9.167 9.167v43.333c0 5.058 4.108 9.167 9.167 9.167h33.333c5.058 0 9.167 -4.108 9.167 -9.167V20c0 -5.058 -4.108 -9.167 -9.167 -9.167zm-23.333 1.667h13.333a0.833 0.833 0 0 1 0.833 0.833V16.667a0.833 0.833 0 0 1 -0.833 0.833h-13.333a0.833 0.833 0 0 1 -0.833 -0.833v-3.333a0.833 0.833 0 0 1 0.833 -0.833zM70.833 63.333c0 2.296 -1.871 4.167 -4.167 4.167H33.333c-2.296 0 -4.167 -1.871 -4.167 -4.167V20c0 -2.296 1.871 -4.167 4.167 -4.167h4.167V16.667c0 3.217 2.617 5.833 5.833 5.833h13.333c3.217 0 5.833 -2.617 5.833 -5.833v-0.833h4.167c2.296 0 4.167 1.871 4.167 4.167z"/><path d="M60 30.833H40a2.5 2.5 0 0 0 0 5h20a2.5 2.5 0 0 0 0 -5z"/><path d="M60 40.833H40a2.5 2.5 0 0 0 0 5h20a2.5 2.5 0 0 0 0 -5z"/><path d="M53.333 50.833H40a2.5 2.5 0 0 0 0 5h13.333a2.5 2.5 0 0 0 0 -5z"/></svg>`;

    button.className =
      'flex items-center p-1 border border-transparent text-xs font-small rounded-full shadow-sm text-teal-600 bg-transparent focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-teal-500';
    button.type = 'button';
    button.style.cssText = 'position: absolute; right: 0; top: 0; margin: 0.5rem; opacity: 0.5';
    button.addEventListener('mouseout', () => (button.style.opacity = '0.5'));
    button.addEventListener('mouseover', () => (button.style.opacity = '0.9'));

    const span = document.createElement('span');
    span.style.width = '20px';
    span.style.height = '20px';
    span.innerHTML = svg;

    button.appendChild(span);

    button.addEventListener('click', () => {
      clipboard.writeText(codeBlock.textContent).then(
        () => {
          /* Chrome doesn't seem to blur automatically, leaving the button in a focused state. */
          button.blur();
          setTimeout(() => {
            span.innerHTML = svg;
          }, 1500);
        },
        (error) => {
          span.innerText = 'Error';
        }
      );
    });

    const div = document.createElement('div');
    div.style.position = 'relative';

    const pre = codeBlock.parentElement;
    pre.parentNode.insertBefore(div, pre);

    div.appendChild(button);
    div.appendChild(pre);
  });
}
