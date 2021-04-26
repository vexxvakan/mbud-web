import '@fontsource/permanent-marker/index.css';
import '@fontsource/poppins/index.css';

import { Chakra } from '../Chakra';

import { AppProps } from 'next/app';

//

import { Layout } from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps, { cookies }) {
  return (
    <Chakra cookies={cookies}>
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

export default MyApp;
