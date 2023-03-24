/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <!-- Chrome, Firefox OS and Opera -->
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0F141A" />
          <!-- Windows Phone -->
          <meta name="msapplication-navbutton-color" media="(prefers-color-scheme: light)" content="white" />
          <meta name="msapplication-navbutton-color" media="(prefers-color-scheme: dark)" content="#0F141A" />
          <!-- iOS Safari -->
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Head>
        <body className="bg-white dark:bg-mat-black text-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
