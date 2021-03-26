import React, { createRef, useEffect } from 'react';

import * as styles from '@styles/modules/audio.module.scss';

import SecondaryInfo from '@components/SecondaryInfo';

import Translator from '../../content/Translator';

const Info = () => {
  const ref = createRef();

  useEffect(() => {
    if (ref.current) {
      const container = ref.current;
      container.style.visibility = 'hidden';
    }
  }, []);

  const openModal = () => {
    if (ref.current) {
      const container = ref.current;
      container.style.visibility = 'visible';
    }
  };

  return (
    <div className={styles.infoContainer}>
      <SecondaryInfo ref={ref} />
      <Translator type="heading" message="info.heading" />
      <Translator type="detail" message="info.detail" />
      <button onClick={openModal} type="button">Learn more</button>
    </div>
  );
};

export default Info;
