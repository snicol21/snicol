import Head from "next/head"
import { GetStaticPropsContext } from "next"
import Layout from "../../components/layouts/Layout"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
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
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <div className="flex justify-center py-16">
        <div className="prose dark:prose-dark">
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
