import React from 'react';
import App from '@components/App';
import Home from '@components/Home';
import { LocaleProvider } from '@context/LocaleContext';
import { AudioProvider } from '@context/AudioContext';
import { ImagesProvider } from '@context/ImagesContext';

// TODO: maybe consider using this https://twitter.com/SimonHoiberg/status/1362389502753468416

const IndexPage = () => (
  <LocaleProvider>
    <AudioProvider>
      <ImagesProvider>
        <App>
          <Home />
        </App>
      </ImagesProvider>
    </AudioProvider>
  </LocaleProvider>
);
export default IndexPage;
