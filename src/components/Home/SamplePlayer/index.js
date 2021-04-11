import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import * as styles from '@styles/modules/sampleplayer.module.scss';
// import all sample audios
import { bird, cat, frog } from '@utils/audios';
// import all images
import { birdImg, trafficImg, anthemImg } from '@utils/images/samples';
import Card from './Card';

const SAMPLE_DATA = [
  {
    data: bird,
    image: birdImg,
    text: 'bird.description',
  },
  {
    data: frog,
    image: trafficImg,
    text: 'traffic.description',
  },
  {
    data: cat,
    image: anthemImg,
    text: 'anthem.description',
  },
];

const SamplePlayer = () => {
  const [sample, setSample] = useState(null);

  const playAudio = (audioFile) => {
    if (sample) sample.pause();
    const playback = new Audio(audioFile);
    setSample(playback);
    playback.play();

    playback.onended = () => {
      playback.pause();
      setSample(null);
    };
  };

  return (
    <div className={styles.container}>
      <p className={`${styles.heading} formatted`}>
        <FormattedMessage id="sample.info" />
      </p>
      <div className={styles.cardContainer}>
        {SAMPLE_DATA.map(({ data, image, text }) => (
          <Card
            key={text}
            sample={data}
            image={image}
            text={text}
            playAudio={playAudio}
          />
        ))}
      </div>
    </div>
  );
};

export default SamplePlayer;
