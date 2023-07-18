export function addBlankTargets() {
  var article = document.querySelector('article');
  if (article) {
    var links = article.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
      }
    }
  }
}
