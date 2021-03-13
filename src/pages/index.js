import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

// import Info from '@components/Audio/Info';
import Header from '@components/Header';
import Record from '@components/Audio/Record';
import Samples from '@components/Audio/Samples';

import { LOCALES } from '../messages/locales';
import messages from '../messages/languages';

import AudioContext from '../context/AudioContext';
import LocaleContext from '../context/LocaleContext';

const IndexPage = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [audio, setAudio] = useState();

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <AudioContext.Provider value={{ audio, setAudio }}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Header />
          {/* <Info /> */}
          <Record />
          <Samples />
        </IntlProvider>
      </AudioContext.Provider>
    </LocaleContext.Provider>
  );
};

export default IndexPage;
