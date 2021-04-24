import '@fontsource/permanent-marker/index.css';
import '@fontsource/poppins/index.css';

import { Chakra } from "../Chakra"

import { AppProps } from 'next/app';

// 

import { Layout } from '../components/layout/Layout';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps, { cookies }) {
    return (
    <Chakra cookies={cookies} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default MyApp;
