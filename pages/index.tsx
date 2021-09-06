import Head from "next/head"
import Layout from "../components/layouts/Layout"
import ScriptPreview from "../components/modules/posts/ScriptPreview"
import { getAllPosts, scriptDirectory } from "../shared/utils/data.util"

const Home = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Spencer Nicol</title>
      </Head>
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-xl mx-auto divide-y-2 divide-gray-200">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl">Scripts</h2>
          </div>
          <div className="mt-6 pt-10 grid gap-16">
            {posts.map((post) => (
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
