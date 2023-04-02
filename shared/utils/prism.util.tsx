const prism = require('prismjs');
require('prismjs/components/prism-sql');
require('prismjs/components/prism-java');
require('prismjs/components/prism-python');
require('prismjs/components/prism-c');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-css');
require('prismjs/components/prism-json');
require('prismjs/components/prism-powershell');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-hcl');

export function prismHighlightAll() {
  prism.highlightAll();
}
