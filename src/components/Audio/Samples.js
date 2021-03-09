/* eslint import/no-unresolved: [2, { ignore: ['\.scss$'] }] */
import React, { useState, useContext } from 'react';
import * as styles from './audio.module.scss';
import AudioContext from '../../AudioContext';

import bird from '../../audios/bird.wav';
import cat from '../../audios/cat.wav';
import frog from '../../audios/frog.wav';

const Samples = () => {
  const [sample, setSample] = useState();
  const { audio = {} } = useContext(AudioContext);

  const playAudio = (audioFile) => {
    if (sample) sample.pause();
    const playback = new Audio(audioFile);
    setSample(playback);
    playback.play();
  };

  return (
    <div className={styles.container}>
      <h5>Sample Audios</h5>

      <button disabled={audio.recording} className={styles.sample} type="button" onClick={() => playAudio(bird)}>Sample 1</button>
      <button disabled={audio.recording} className={styles.sample} type="button" onClick={() => playAudio(cat)}>Sample 2</button>
      <button disabled={audio.recording} className={styles.sample} type="button" onClick={() => playAudio(frog)}>Sample 3</button>

    </div>
  );
};

export default Samples;
