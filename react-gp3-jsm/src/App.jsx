import React from 'react';

import GlobalStyles from './global.styles';
import { Wrapper, GradientBg } from './app.styles';

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
        <GradientBg>
          <Navbar />
          <Header />
        </GradientBg>
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
