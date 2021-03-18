import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import Header from '@components/Header';
import AudioContainer from '@components/Audio';

import { LOCALES } from '../content/locales';
import content from '../content/languages';

import AudioContext from '../context/AudioContext';
import LocaleContext from '../context/LocaleContext';

const IndexPage = () => {
  const [locale, setLocale] = useState(LOCALES.ARABIC);
  const [audio, setAudio] = useState();

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <AudioContext.Provider value={{ audio, setAudio }}>
        <IntlProvider locale={locale} messages={content[locale]}>
          <Header />
          <AudioContainer />
        </IntlProvider>
      </AudioContext.Provider>
    </LocaleContext.Provider>
  );
};

export default IndexPage;
