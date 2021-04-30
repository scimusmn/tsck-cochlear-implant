/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/sampleplayer.module.scss';
import { playIcon, stopIcon } from '@utils/images/controls';
import SampleImage from './SampleImage';

const Card = ({
  id, sample, toggleAudio, text, imgCredits, soundCredits,
}) => {
  const { audio } = useAudio();
  const recorderInUse = audio.status === 'recording' || audio.status === 'playing';
  const samplePlaying = audio.samplePlaying === id;

  const toggleAudioHandler = () => {
    toggleAudio(sample, id);
  };

  return (
    <div
      onClick={toggleAudioHandler}
      role="button"
      tabIndex={0}
    >
      <div className={`${samplePlaying ? styles.recording : ''} ${styles.card}`}>
        <SampleImage id={id} />
        <div className={styles.controls}>
          <p>
            <FormattedMessage id={text} />
          </p>
          <div className={styles.button} disabled={recorderInUse}>
            <img src={samplePlaying ? stopIcon : playIcon} alt="record" />
          </div>
        </div>
      </div>
      <div className={`${styles.credit} ${styles.margin}`}>
        {imgCredits}
      </div>
      <div className={styles.credit}>
        {soundCredits}
      </div>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  id: '',
  sample: '',
  text: '',
  imgCredits: '',
  soundCredits: '',
  toggleAudio: '',
};

Card.propTypes = {
  id: PropTypes.string,
  sample: PropTypes.string,
  text: PropTypes.string,
  toggleAudio: PropTypes.func,
  imgCredits: PropTypes.string,
  soundCredits: PropTypes.string,
};
