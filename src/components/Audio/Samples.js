/* eslint import/no-unresolved: [2, { ignore: ['\.scss$'] }] */
import React, { useState, useContext } from 'react';
import * as styles from '@styles/modules/audio.module.scss';
import AudioContext from '../../context/AudioContext';

import bird from '../../audios/bird.wav';
import cat from '../../audios/cat.wav';
import frog from '../../audios/frog.wav';

const Samples = () => {
  const [sample, setSample] = useState(null);
  const { audio = {} } = useContext(AudioContext);

  const playAudio = (audioFile) => {
    if (sample) sample.pause();
    const playback = new Audio(audioFile);
    setSample(playback);
    playback.play();

    // Set sample to null when audio ends
    playback.onended = () => {
      playback.pause();
      setSample(null);
    };
  };

  return (
    <div className={styles.samplesContainer}>
      <p>Hear other sounds through simulated cochlear implant</p>
      <h5>Sample Audios</h5>

      <div className={styles.buttonsList}>
        <button
          disabled={audio.recording}
          className={styles.sample}
          type="button"
          onClick={() => playAudio(bird)}
        >
          Sample 1
        </button>
        <button
          disabled={audio.recording}
          className={styles.sample}
          type="button"
          onClick={() => playAudio(cat)}
        >
          Sample 2
        </button>
        <button
          disabled={audio.recording}
          className={styles.sample}
          type="button"
          onClick={() => playAudio(frog)}
        >
          Sample 3
        </button>
      </div>
      <div>
        now playing:
        {` ${sample ? sample.src : sample}`}
      </div>
    </div>
  );
};

export default Samples;
