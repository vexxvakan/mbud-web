import { Chakra } from '../Chakra';

import { AppProps } from 'next/app';

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Head>
        <title>Home | MoonBud</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='MoonBud - A deflationary charity cryptocurrency for all dogs in the world.'
        />
      </Head>
       <Component {...pageProps} />
    </Chakra>
  );
}

export { getServerSideProps } from '../Chakra';
export default MyApp;
