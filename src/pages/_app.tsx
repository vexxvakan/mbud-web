import '@fontsource/permanent-marker/index.css';
import '@fontsource/poppins/index.css';

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
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from "../Chakra"
export default MyApp;
