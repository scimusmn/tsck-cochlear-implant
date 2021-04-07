import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const LOCALES = {
  ENGLISH: 'en-us',
  ARABIC: 'ar-qa',
};

const LocalContext = React.createContext();

function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(LOCALES.ARABIC);

  function toggleLocale() {
    setLocale(locale === LOCALES.ENGLISH ? LOCALES.ARABIC : LOCALES.ENGLISH);
  }

  const value = { locale, toggleLocale };

  return (
    <LocalContext.Provider value={value}>{children}</LocalContext.Provider>
  );
}

function useLocale() {
  const context = useContext(LocalContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

export { LocaleProvider, useLocale };

LocaleProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
