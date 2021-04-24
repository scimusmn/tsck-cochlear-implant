import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { GatsbyImage, getImage as getGatsbyImage } from 'gatsby-plugin-image';

import { useAudio } from '@context/AudioContext';
import { useImages } from '@context/ImagesContext';
import * as styles from '@styles/modules/sampleplayer.module.scss';
import { playIcon } from '@utils/images/controls';

const Card = ({
  id, sample, text, toggleAudio,
}) => {
  const { audio } = useAudio();
  const { getImage } = useImages();
  const recorderInUse = audio.status === 'recording' || audio.status === 'playing';
  const samplePlaying = audio.samplePlaying === id;
  const image = useMemo(() => getGatsbyImage(getImage(id)), [id]);

  const toggleAudioHandler = () => {
    toggleAudio(sample, id);
  };

  return (
    <div>
      <div className={`${samplePlaying ? styles.recording : ''} ${styles.card}`}>
        <GatsbyImage
          image={image}
          alt="sample-image"
          style={{ display: 'block', height: 221 }}
          loading="eager"
        />
        <div className={styles.controls}>
          <p>
            <FormattedMessage id={text} />
          </p>
          <button
            disabled={recorderInUse || samplePlaying}
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
  text: '',
  toggleAudio: () => {},
};

Card.propTypes = {
  id: PropTypes.string,
  sample: PropTypes.string,
  text: PropTypes.string,
  toggleAudio: PropTypes.func,
};
