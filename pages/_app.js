import '@/styles/globals.css';
import Head from 'next/head';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Santrotech Software Technologies" />
        <link rel="icon" href="/WebLogo.jpg" type="image/jpeg" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://santro-tech.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Santrotech Software Technologies" />
        <meta property="og:url" content="https://santro-tech.com" />
        <meta property="og:image" content="/assets/LOGO.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Santrotech" />
        <meta name="twitter:image" content="/assets/LOGO.jpg" />
      </Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
