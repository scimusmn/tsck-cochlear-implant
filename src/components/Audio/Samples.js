/* eslint import/no-unresolved: [2, { ignore: ['\.scss$'] }] */
import React, { useState, useContext } from 'react';

import AudioContext from '@context/AudioContext';

import * as styles from '@styles/modules/audio.module.scss';

import bird from '@utils/audios/bird.wav';
import cat from '@utils/audios/cat.wav';
import frog from '@utils/audios/frog.wav';

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
