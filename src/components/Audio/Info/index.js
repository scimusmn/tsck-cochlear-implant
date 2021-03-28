import React, { createRef, useEffect } from 'react';

import Translator from '@content/Translator';

import * as styles from '@styles/modules/secondaryinfo.module.scss';

import SecondaryInfo from './SecondaryInfo';

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
    <div className={styles.container}>
      <SecondaryInfo ref={ref} />
      <Translator type="heading" message="info.heading" />
      <hr />
      <Translator type="detail" message="info.detail" />
      <button className={styles.button} onClick={openModal} type="button">Learn more</button>
    </div>
  );
};

export default Info;
