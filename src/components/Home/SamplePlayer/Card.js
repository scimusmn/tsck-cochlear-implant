import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/sampleplayer.module.scss';
import { playWhite } from '@utils/images/controls';

const Card = ({
  id, sample, image, text, toggleAudio,
}) => {
  const { audio } = useAudio();
  const voiceRecording = audio.status === 'recording';
  const samplePlaying = audio.samplePlaying === id;

  const toggleAudioHandler = () => {
    toggleAudio(sample, id);
  };

  return (
    <div className={`${samplePlaying ? styles.recording : ''} ${styles.card}`}>
      <img className={styles.image} src={image} alt="sample-audio" />
      <p className="formatted">
        <FormattedMessage id={text} />
      </p>
      <button
        className={styles.button}
        disabled={voiceRecording || samplePlaying}
        onClick={toggleAudioHandler}
        type="button"
      >
        <img src={playWhite} alt="record" />
      </button>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  id: '',
  sample: '',
  image: null,
  text: '',
  toggleAudio: () => {},
};

Card.propTypes = {
  id: PropTypes.string,
  sample: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  toggleAudio: PropTypes.func,
};
