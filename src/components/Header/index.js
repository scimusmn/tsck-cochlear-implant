import React, { useContext } from 'react';
import * as styles from '@styles/modules/header.module.scss';
import { LOCALES } from '../../content/locales';
import LocaleContext from '../../context/LocaleContext';

const Header = () => {
  const { locale, setLocale } = useContext(LocaleContext);

  const toggleLanguage = () => {
    if (locale === LOCALES.ENGLISH) setLocale(LOCALES.ARABIC);
    else setLocale(LOCALES.ENGLISH);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleLanguage} type="button">
        Toggle Language
      </button>
    </div>
  );
};

export default Header;
