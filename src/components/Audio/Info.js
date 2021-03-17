import React, { useContext } from 'react';
import * as styles from '@styles/modules/audio.module.scss';
import { FormattedMessage } from 'react-intl';
import LocaleContext from '../../context/LocaleContext';
import { LOCALES } from '../../messages/locales';

const Info = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <div className={styles.infoContainer}>
      <h3 className={`${locale === LOCALES.ARABIC ? styles.arabic : styles.english}`}>
        <FormattedMessage id="info.heading" />
      </h3>
      <p className={`${locale === LOCALES.ARABIC ? styles.arabic : styles.english}`}>
        <FormattedMessage id="info.detail" />
      </p>
    </div>
  );
};

export default Info;
