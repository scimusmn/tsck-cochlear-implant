import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/sampleplayer.module.scss';
import { playIcon, stopIcon } from '@utils/images/controls';

const Card = ({
  id,
  sample,
  toggleAudio,
  text,
  imgCredits,
  soundCredits,
  thumbnail,
}) => {
  const { audio } = useAudio();
  const samplePlaying = audio.samplePlaying === id;

  const toggleAudioHandler = () => {
    toggleAudio(sample, id);
  };

  return (
    <div
      onClick={toggleAudioHandler}
      onKeyDown={toggleAudioHandler}
      role="button"
      tabIndex={0}
    >
      <div
        className={`${samplePlaying ? styles.recording : ''} ${styles.card}`}
      >
        <img
          src={thumbnail}
          alt="sample"
          style={{ display: 'block', height: 221 }}
        />
        <div className={styles.controls}>
          <p>
            <FormattedMessage id={text} />
          </p>
          <div className={styles.button}>
            <img src={samplePlaying ? stopIcon : playIcon} alt="record" />
          </div>
        </div>
      </div>
      <div className={`${styles.credit} ${styles.margin}`}>
        Image: {imgCredits}
      </div>
      <div className={styles.credit}>Sound: {soundCredits}</div>
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
  thumbnail: '',
};

Card.propTypes = {
  id: PropTypes.string,
  sample: PropTypes.string,
  text: PropTypes.string,
  toggleAudio: PropTypes.func,
  imgCredits: PropTypes.string,
  soundCredits: PropTypes.string,
  thumbnail: PropTypes.string,
};
