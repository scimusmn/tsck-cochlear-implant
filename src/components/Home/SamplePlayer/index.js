import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/sampleplayer.module.scss';
// import all sample audios
import { birdAudio, trafficAudio, anthemAudio } from '@utils/audios';
import { birdImg, trafficImg, anthemImg } from '@utils/images/samples';
import Card from './Card';

const SAMPLE_DATA = [
  {
    id: 'bird',
    data: birdAudio,
    text: 'bird.description',
    imgCredits: 'Andreas Trepte / Wikimedia Commons / CC-BY-SA 2.5',
    soundCredits: 'Field Recording Geek / SoundCamp / All rights reserved',
    thumbnail: birdImg,
  },
  {
    id: 'traffic',
    data: trafficAudio,
    text: 'traffic.description',
    imgCredits: 'ⓒiStock.com / life in shots',
    soundCredits: 'https://www.zapsplat.com',
    thumbnail: trafficImg,
  },
  {
    id: 'anthem',
    data: anthemAudio,
    text: 'anthem.description',
    imgCredits: 'ⓒiStock.com / creisinger',
    soundCredits: 'U.S. Navy /Wikimedia Commons / Public Domain',
    thumbnail: anthemImg,
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
      setAudio({ status: 'idle', samplePlaying: null });
      setCurrentAudio(null);
    };
  };

  const toggleAudio = (audioFile, id) => {
    if (currentAudio) {
      const url = new URL(currentAudio.currentSrc);
      if (url.pathname === audioFile) {
        setAudio({ ...audio, samplePlaying: null });
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

  useEffect(() => {
    if (
      (audio.status === 'playing' || audio.status === 'recording') &&
      currentAudio
    ) {
      setAudio({ ...audio, samplePlaying: null });
      currentAudio.pause();
      setCurrentAudio(null);
    }
  }, [audio.status]);

  return (
    <div className={styles.container}>
      <p className={styles.info}>
        <FormattedMessage id="sample.info" />
      </p>
      <div className={styles.cardContainer}>
        {SAMPLE_DATA.map(
          ({ id, data, text, imgCredits, soundCredits, thumbnail }) => (
            <Card
              key={id}
              id={id}
              sample={data}
              text={text}
              imgCredits={imgCredits}
              soundCredits={soundCredits}
              toggleAudio={toggleAudio}
              thumbnail={thumbnail}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default SamplePlayer;
