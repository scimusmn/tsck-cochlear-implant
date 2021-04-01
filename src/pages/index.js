import React from 'react';
import App from '@components/App';
import Home from '@components/Home';
import useScreenInactivity from '@utils/hooks/useScreenInactivity';
import { LocaleProvider } from '@context/LocaleContext';
import { AudioProvider } from '@context/AudioContext';

const IndexPage = () => {
  useScreenInactivity();

  return (
    <LocaleProvider>
      <AudioProvider>
        <App>
          <Home />
        </App>
      </AudioProvider>
    </LocaleProvider>
  );
};

export default IndexPage;
