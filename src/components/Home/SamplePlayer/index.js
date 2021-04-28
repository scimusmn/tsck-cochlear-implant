import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/sampleplayer.module.scss';
// import all sample audios
import { songThrush, carTraffic, kuwaitFlag } from '@utils/audios';
import Card from './Card';

const SAMPLE_DATA = [
  {
    id: 'bird',
    data: songThrush,
    text: 'bird.description',
    imgCredits: 'Andreas Trepte, www.avi-fauna.info',
    soundCredits: 'Courtesy Daniel71953',
  },
  {
    id: 'traffic',
    data: carTraffic,
    text: 'traffic.description',
    imgCredits: 'ⓒiStock.com / life in shots',
    soundCredits: 'Zapsplat, https://www.zapsplat.com',
  },
  {
    id: 'anthem',
    data: kuwaitFlag,
    text: 'anthem.description',
    imgCredits: 'ⓒiStock.com / creisinger',
    soundCredits: 'Daniel71953 / Creative Commons',
  },
];

const SamplePlayer = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const { audio, setAudio } = useAudio();

  const playAudio = (audioFile) => {
    const playback = new Audio(audioFile);
    setCurrentAudio(playback);
    playback.play();
    playback.onended = () => {
      playback.pause();
      setAudio({ ...audio, samplePlaying: '' });
      setCurrentAudio(null);
    };
  };

  const toggleAudio = (audioFile, id) => {
    if (currentAudio) {
      const url = new URL(currentAudio.currentSrc);
      if (url.pathname === audioFile) {
        setAudio({ ...audio, samplePlaying: '' });
        currentAudio.pause();
        setCurrentAudio(null);
      } else {
        currentAudio.pause();
        setAudio({ ...audio, samplePlaying: id });
        playAudio(audioFile);
      }
    } else {
      setAudio({ ...audio, samplePlaying: id });
      playAudio(audioFile);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.info}>
        <FormattedMessage id="sample.info" />
      </p>
      <div className={styles.cardContainer}>
        {SAMPLE_DATA.map(({
          id, data, text, imgCredits, soundCredits,
        }) => (
          <Card
            key={id}
            id={id}
            sample={data}
            text={text}
            imgCredits={imgCredits}
            soundCredits={soundCredits}
            toggleAudio={toggleAudio}
          />
        ))}
      </div>
    </div>
  );
};

export default SamplePlayer;
