import { Fragment } from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import React from 'react';

type LayoutProps = {
  children: any
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Navigation/>
      <main>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};
