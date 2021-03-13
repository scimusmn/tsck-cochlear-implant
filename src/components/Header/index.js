import React, { useContext } from 'react';

import { LOCALES } from '../../messages/locales';
import LocaleContext from '../../context/LocaleContext';

const Header = () => {
  const { locale, setLocale } = useContext(LocaleContext);

  const toggleLanguage = () => {
    if (locale === LOCALES.ENGLISH) setLocale(LOCALES.ARABIC);
    else setLocale(LOCALES.ENGLISH);
  };

  return (
    <div>
      <button onClick={toggleLanguage} type="button">Toggle Language</button>
    </div>
  );
};

export default Header;
