import { Chakra } from '../Chakra';

import { AppProps } from 'next/app';

import { Layout } from '../components/layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Head>
        <title>Home | MoonBud</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Official MoonBud - The Dog Crypto Charity Token website'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from '../Chakra';
export default MyApp;
