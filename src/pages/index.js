import React, { useState } from 'react';
import App from '@components/App';
import Home from '@components/Home';
import AudioContext from '@context/AudioContext';
import useScreenInactivity from '@utils/hooks/useScreenInactivity';
import { LocaleProvider } from '@context/LocaleContext';

const IndexPage = () => {
  const [audio, setAudio] = useState();

  useScreenInactivity();

  return (
    <LocaleProvider>
      <AudioContext.Provider value={{ audio, setAudio }}>
        <App>
          <Home />
        </App>
      </AudioContext.Provider>
    </LocaleProvider>
  );
};

export default IndexPage;
