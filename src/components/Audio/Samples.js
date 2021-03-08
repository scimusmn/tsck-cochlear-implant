/* eslint import/no-unresolved: [2, { ignore: ['\.scss$'] }] */
import React from 'react';
import * as styles from './audio.module.scss';

import bird from '../../audios/bird.wav';

const Samples = () => (
  <div className={styles.container}>
    <h5>Sample Audio</h5>
    <audio controls src={bird} type="audio/wav">
      <track kind="captions" />
    </audio>
  </div>
);

export default Samples;
