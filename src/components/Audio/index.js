import React from 'react';
import * as styles from '@styles/modules/audio.module.scss';

import Info from './Info';
import Record from './Record';
import Samples from './Samples';

const AudioContainer = () => {
  console.log('info');
  return (
    <div className={styles.container}>
      <Info />
      <Record />
      <Samples />
    </div>
  );
};

export default AudioContainer;
