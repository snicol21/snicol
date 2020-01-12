const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: `${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("src/templates/blog-template.js")

  const result = await graphql(`
    query {
      blog: allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
        edges {
          node {
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error on createPages")
  }

  const blog = result.data.blog.edges
  blog.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: blogTemplate,
      context: { id: node.id },
    })
  })
}
