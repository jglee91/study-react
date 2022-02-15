import React from 'react';

import GlobalStyles from './global.styles';
import { Wrapper, Gradient } from './app.styles';

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Gradient>
          <Navbar />
          <Header />
        </Gradient>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </Wrapper>
    </>
  );
};

export default App;
