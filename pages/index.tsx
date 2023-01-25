import Head from "next/head"

import Layout from "../components/layouts/Layout"
import ScriptPreview from "../components/modules/preview/ScriptPreview"
import { getAllPosts, scriptDirectory } from "../shared/utils/data.util"
import { getDateNumber } from "../shared/utils/date.util"
import { IScriptFrontMatter } from "./posts/[slug]"

type IPost = IScriptFrontMatter & { slug: string }

type Props = {
  posts: IPost[]
}

const Home = ({ posts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Spencer Nicol</title>
      </Head>
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-xl mx-auto divide-y-2 divide-gray-200">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl">Pages</h2>
          </div>
          <div className="mt-6 pt-10 grid gap-16">
            {posts
              .sort((a: IPost, b: IPost) => getDateNumber(b.date) - getDateNumber(a.date))
              .map((post) => (
                <ScriptPreview key={post.slug} {...post} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(scriptDirectory)
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),
    },
  }
}

export default Home
