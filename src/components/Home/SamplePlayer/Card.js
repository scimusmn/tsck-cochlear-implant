import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/sampleplayer.module.scss';
import { playIcon } from '@utils/images/controls';

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
    <div>
      <div className={`${samplePlaying ? styles.recording : ''} ${styles.card}`}>
        {/* <div
          className={styles.image}
          style={{
            background: `url('${image}')  0% 0% / cover`,
          }}
        /> */}
        <img className={styles.image} src={image} alt="" />
        <div className={styles.controls}>
          <p>
            <FormattedMessage id={text} />
          </p>
          <button
            disabled={voiceRecording || samplePlaying}
            onClick={toggleAudioHandler}
            type="button"
          >
            <img src={playIcon} alt="record" />
          </button>
        </div>
      </div>
      <div className={styles.credit}>Sound credit</div>
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
