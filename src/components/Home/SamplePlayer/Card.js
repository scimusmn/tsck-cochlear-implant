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
      <div
        className={styles.image}
        style={{
          background: `url('${image}')  0% 0% / cover`,
        }}
      />
      <div className={styles.controls}>
        <p className="formatted sample-info">
          <FormattedMessage id={text} />
        </p>
        <button
          disabled={voiceRecording || samplePlaying}
          onClick={toggleAudioHandler}
          type="button"
        >
          <img src={playWhite} alt="record" />
        </button>
      </div>
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
