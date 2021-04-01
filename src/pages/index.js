import React from 'react';
import App from '@components/App';
import Home from '@components/Home';
import { LocaleProvider } from '@context/LocaleContext';
import { AudioProvider } from '@context/AudioContext';

const IndexPage = () => (
  <LocaleProvider>
    <AudioProvider>
      <App>
        <Home />
      </App>
    </AudioProvider>
  </LocaleProvider>
);
export default IndexPage;
