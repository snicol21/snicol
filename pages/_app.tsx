import '../shared/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import { MDXProvider } from '@mdx-js/react';

import RealtimeCrypto from '../components/posts/realtime-crypto-chart';
import TableValueConstructor from '../components/posts/table-value-constructor';

const components = { TableValueConstructor, RealtimeCrypto }

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <MDXProvider components={components}>
        <ThemeProvider attribute="class" enableSystem={true}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MDXProvider>
    </>
  )
}

export default MyApp
