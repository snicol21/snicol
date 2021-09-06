import Head from "next/head"
import { GetStaticPropsContext } from "next"
import Layout from "../../components/layouts/Layout"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import TechIcon from "../../components/elements/icons/TechIcon"
import { getDateDisplay } from "../../shared/utils/date.util"
import { getAllPosts, scriptDirectory } from "../../shared/utils/data.util"

export type IScriptFrontMatter = {
  title: string
  date: string
  categories: string[]
  summary: string
}

type Props = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  frontMatter: IScriptFrontMatter
}

const ScriptPage = ({ source, frontMatter }: Props) => {
  const dateFormatted = getDateDisplay(frontMatter.date)
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <div className="relative py-16 overflow-hidden">
        <div className="prose dark:prose-dark mx-auto">
          <div className="mt-2 block">
            <div>
              <div className="text-xs uppercase font-semibold text-gray-600 dark:text-gray-400">{dateFormatted.dateDisplay}</div>
              <div className="space-x-1 pt-2">
                {frontMatter.categories.map((category) => (
                  <span key={category} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    <TechIcon name={category} className="-ml-1 mr-1.5 h-3 w-3" />
                  </span>
                ))}
              </div>
            </div>
            <h1 className="pt-8">{frontMatter.title}</h1>
            <p className="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-300">{frontMatter.summary}</p>
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
  const mdxSource = await serialize(content, { scope: data })
  return { props: { source: mdxSource, frontMatter: data as IScriptFrontMatter } }
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts(scriptDirectory).map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export default ScriptPage
