import glob from 'fast-glob';
import * as path from 'path';

async function importArticle(articlePath) {
  let { meta, default: component } = await import(`../pages/articles/${articlePath}`);
  return {
    slug: articlePath.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  };
}

export async function getAllArticles() {
  let articlePaths = await glob(['**/*.mdx', '**/*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
    ignore: ['**/_*/**'],
  });

  let articles = await Promise.all(articlePaths.map(importArticle));

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date));
}
