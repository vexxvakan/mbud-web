import { Chakra } from '../Chakra';
import { ChainId, DAppProvider } from '@usedapp/core';

import { AppProps } from 'next/app';

import Head from 'next/head';

const config = {
  supportedChains: [1, 56],
  multicallAddresses: {
    [ChainId.Mainnet]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    [56]: '0x949f41e8a6197f2a19854f813fd361bab9aa7d2d',
  },
};

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
      <DAppProvider config={config}>
          <Component {...pageProps} />
      </DAppProvider>
    </Chakra>
  );
}

export { getServerSideProps } from '../Chakra';
export default MyApp;
