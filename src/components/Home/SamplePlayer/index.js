import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/sampleplayer.module.scss';
// import all sample audios
import { bird, cat, frog } from '@utils/audios';
// import all images
import { birdImg, trafficImg, anthemImg } from '@utils/images/samples';
import Card from './Card';

const SAMPLE_DATA = [
  {
    id: 'bird',
    data: bird,
    image: birdImg,
    text: 'bird.description',
  },
  {
    id: 'traffic',
    data: frog,
    image: trafficImg,
    text: 'traffic.description',
  },
  {
    id: 'anthem',
    data: cat,
    image: anthemImg,
    text: 'anthem.description',
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
          id, data, image, text,
        }) => (
          <Card
            key={id}
            id={id}
            sample={data}
            image={image}
            text={text}
            toggleAudio={toggleAudio}
          />
        ))}
      </div>
    </div>
  );
};

export default SamplePlayer;
