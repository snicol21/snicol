import fs from "fs"
import path from "path"
import matter from "gray-matter"

export const scriptDirectory = path.join(process.cwd(), "_content", "posts")

export function getAllPosts(directory: string) {
  const allPosts = fs.readdirSync(directory)
  return allPosts.map((fileName) => {
    const slug = fileName.replace(".md", "")
    const fileContents = fs.readFileSync(path.join(directory, fileName), "utf-8")
    const { data, content } = matter(fileContents)
    return { data, content, slug }
  })
}
