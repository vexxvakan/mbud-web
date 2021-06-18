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
          content='MoonBud - The premier charity cryptocurrency to support dogs in need.'
        />
        <meta property="og:title" content="MoonBud - The premier charity cryptocurrency to support dogs in need." />
        <meta property="og:image" content="https://i.imgur.com/ab6DTrZ.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.moonbud.space" />
        <meta property="og:site_name" content="MoonBud - Charity Crypto Currency" />
        <meta property="og:description" content="MoonBuds were created with a single vision in mind: to save all dogs in the world. Join our mission today!" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MoonBud - The premier charity cryptocurrency to support dogs in need."/>
        <meta name="twitter:description" content="MoonBuds were created with a single vision in mind: to save all dogs in the world. Join our mission today!" />
        <meta name="twitter:image" content="https://i.imgur.com/ab6DTrZ.png" />
        <meta name="twitter:site" content="@MoonBud_Coin" />
        <meta name="twitter:creator" content="@vexxvakan" />
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from '../Chakra';
export default MyApp;
