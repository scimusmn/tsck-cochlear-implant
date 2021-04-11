import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/sampleplayer.module.scss';
import { playWhite } from '@utils/images/controls';

const Card = ({
  sample, image, text, playAudio,
}) => {
  const { audio } = useAudio();
  const recording = audio.status === 'recording';

  const playAudioHandler = () => {
    playAudio(sample);
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="sample-audio" />
      <p className="formatted">
        <FormattedMessage id={text} />
      </p>
      <button
        className={styles.button}
        disabled={recording}
        onClick={playAudioHandler}
        type="button"
      >
        <img src={playWhite} alt="record" />
      </button>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  sample: '',
  image: null,
  text: '',
  playAudio: () => {},
};

Card.propTypes = {
  sample: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  playAudio: PropTypes.func,
};
