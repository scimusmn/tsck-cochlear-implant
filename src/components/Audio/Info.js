import React, { useContext } from 'react';
import * as styles from '@styles/modules/audio.module.scss';
import LocaleContext from '../../context/LocaleContext';
import Translator from '../../content/Translator';

const Info = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <div className={styles.infoContainer}>
      <Translator type="heading" locale={locale} message="info.heading" />
      <Translator type="detail" locale={locale} message="info.detail" />
    </div>
  );
};

export default Info;
