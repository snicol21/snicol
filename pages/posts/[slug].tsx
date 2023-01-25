import { GetStaticPropsContext } from "next"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Head from "next/head"
import { useEffect, useState } from "react"
import rehypeSlug from "rehype-slug"

import TechIcon from "../../components/elements/icons/TechIcon"
import Layout from "../../components/layouts/Layout"
import { addCopyButtons } from "../../shared/utils/copy-button.util"
import { getAllPosts, scriptDirectory } from "../../shared/utils/data.util"
import { getDateDisplay } from "../../shared/utils/date.util"
import { prismHighlightAll } from "../../shared/utils/prism.util"

export type IScriptFrontMatter = {
  author: string
  title: string
  date: string
  categories: string[]
  description: string
  authorImageUrl: string
  imageUrl: string
}

type Props = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  frontMatter: IScriptFrontMatter
}

const ScriptPage = ({ source, frontMatter }: Props) => {
  const [isMounted, setIsMounted] = useState(false)
  const dateFormatted = getDateDisplay(frontMatter.date)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (isMounted) {
    prismHighlightAll()
    if (navigator && navigator.clipboard) {
      addCopyButtons(navigator.clipboard)
    }
  }

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <div className="relative py-16 overflow-hidden">
        <div className="prose lg:prose-xl xl:prose-2xl dark:prose-dark mx-auto">
          <div className="mt-2 block">
            <div>
              <div className="flex justify-between text-xs uppercase font-semibold text-gray-600 dark:text-gray-400">
                <time dateTime={frontMatter.date}>{dateFormatted.dateDisplay}</time>
                <div>{frontMatter.author}</div>
              </div>
              <div className="flex justify-between pt-2">
                <div className="space-x-1 t-2 w-10/12">
                  {frontMatter.categories.map((category) => (
                    <span key={category} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <TechIcon name={category} className="-ml-1 mr-1.5 h-3 w-3" />
                    </span>
                  ))}
                </div>
                <div className="flex-shrink-0 h-10 w-10">
                  <span className="sr-only">{frontMatter.author}</span>
                  <img className="h-10 w-10 rounded-full m-0" style={{ margin: 0 }} src={frontMatter.authorImageUrl} alt="" />
                </div>
              </div>
            </div>
            <h1 className="pt-8">{frontMatter.title}</h1>
            <p className="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-300">{frontMatter.description}</p>
          </div>
          <MDXRemote {...source} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context
  const allPosts = getAllPosts(scriptDirectory)
  const { data, content } = allPosts.find((post) => post.slug === params.slug)

  const options = {
    scope: data,
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  }
  const mdxSource = await serialize(content, options)
  return { props: { source: mdxSource, frontMatter: data as IScriptFrontMatter } }
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts(scriptDirectory).map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export default ScriptPage
