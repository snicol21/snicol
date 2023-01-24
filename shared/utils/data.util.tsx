import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const scriptDirectory = path.join(process.cwd(), "content", "posts")

export function getAllPosts(directory: string) {
  const allPosts = fs.readdirSync(directory)
  return allPosts.map((fileName) => {
    const slug = fileName.replace(".md", "")
    const fileContents = fs.readFileSync(path.join(directory, fileName), "utf-8")
    const { data, content } = matter(fileContents)
    return { data, content, slug }
  })
}
