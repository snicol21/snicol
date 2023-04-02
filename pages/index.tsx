import Head from 'next/head';

import Layout from '../components/layouts/Layout';
import ScriptPreview from '../components/modules/preview/ScriptPreview';
import { getAllPosts, scriptDirectory } from '../shared/utils/data.util';
import { getDateNumber } from '../shared/utils/date.util';
import { IScriptFrontMatter } from './posts/[slug]';

export type IPost = IScriptFrontMatter & {
  slug: string;
  imageLoading: 'lazy' | 'eager';
};

type Props = {
  posts: IPost[];
};

const Home = ({ posts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Spencer Nicol</title>
      </Head>
      <div className='px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28'>
        <div className='relative mx-auto max-w-xl divide-y-2 divide-gray-200'>
          <div>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>Blogs</h2>
          </div>
          <div className='mt-6 grid gap-16 pt-10'>
            {posts
              .sort((a: IPost, b: IPost) => getDateNumber(b.date) - getDateNumber(a.date))
              .map((post, index) => {
                index < 2 ? (post.imageLoading = 'eager') : (post.imageLoading = 'lazy');
                return <ScriptPreview key={post.slug} {...post} />;
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts(scriptDirectory);
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),
    },
  };
}

export default Home;
