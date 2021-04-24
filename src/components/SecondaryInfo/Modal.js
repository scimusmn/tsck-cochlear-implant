import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { GatsbyImage, getImage as getGatsbyImage } from 'gatsby-plugin-image';

import * as styles from '@styles/modules/secondaryinfo.module.scss';
import cross from '@utils/images/cross.svg';
import { useLocale, LOCALES } from '@context/LocaleContext';
import { useImages } from '@context/ImagesContext';
import BulletPoint from './BulletPoint';

const Modal = ({ setOpen }) => {
  const { locale } = useLocale();
  const { getImage } = useImages();
  const id = locale === LOCALES.ARABIC ? 'cochlear-ar' : 'cochlear-en';
  const image = useMemo(() => getGatsbyImage(getImage(id)), [id]);
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <button
          type="button"
          onKeyDown={closeModal}
          onClick={closeModal}
          className={styles.cross}
        >
          <img src={cross} alt="Close Modal" />
        </button>
        <div className={styles.secondaryContainer}>
          <div className={styles.imageContainer}>
            <GatsbyImage
              image={image}
              alt="cochlear-how-to"
              loading="eager"
            />
          </div>
          <div className={styles.textContainer}>
            <h3 className="bullet-heading"><FormattedMessage id="secondaryinfo.heading" /></h3>
            <div className={styles.bulletPointContainer}>
              {[1, 2, 3, 4].map((value) => (
                <BulletPoint
                  key={value}
                  number={value}
                  node={<FormattedMessage id={`secondaryinfo.p${value}`} />}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Modal;

Modal.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
