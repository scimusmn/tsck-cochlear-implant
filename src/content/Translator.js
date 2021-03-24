import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as styles from '@styles/modules/audio.module.scss';
import { LOCALES } from './locales';

const Translator = ({ type, locale, message }) => {
  console.log('translate', locale, message);
  return (
    <div
      className={`
        ${styles[type]} 
        ${locale === LOCALES.ARABIC ? styles.arabic : styles.english}
      `}
    >
      <FormattedMessage id={message} />
    </div>
  );
};

export default Translator;
