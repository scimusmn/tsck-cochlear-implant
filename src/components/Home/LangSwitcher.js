import React, { useEffect } from 'react';
import { useLocale } from '@context/LocaleContext';
import * as styles from '@styles/modules/lang.module.scss';

const LangSwitcher = () => {
  const { locale, toggleLocale } = useLocale();

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(locale);
  }, [locale]);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleLocale} type="button">
        Toggle Language
      </button>
    </div>
  );
};
export default LangSwitcher;
