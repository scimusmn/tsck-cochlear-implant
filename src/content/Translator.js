import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import * as styles from '@styles/modules/audio.module.scss';

import LocaleContext from '../context/LocaleContext';

import { LOCALES } from './locales';

const Translator = ({ type, message }) => {
  const { locale } = useContext(LocaleContext);

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
