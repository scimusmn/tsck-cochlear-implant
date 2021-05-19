import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as styles from '@styles/modules/secondaryinfo.module.scss';
import cross from '@utils/images/cross.svg';
import { useLocale, LOCALES } from '@context/LocaleContext';
import { infoArabicImg, infoEnglishImg } from '@utils/images/secondaryInfo';
import BulletPoint from './BulletPoint';

const Modal = ({ open, setOpen }) => {
  const [showImages, setShowImages] = useState({ ar: true, en: false });
  const { locale } = useLocale();
  const visibility = open ? 'visible' : 'hidden';

  useEffect(() => {
    if (open) {
      setShowImages({
        ar: locale === LOCALES.ARABIC,
        en: locale === LOCALES.ENGLISH,
      });
    }
  }, [open]);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div style={{ visibility }} className={styles.modal}>
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
            <img
              src={infoArabicImg}
              alt="info"
              style={{ visibility: !showImages.ar && 'hidden' }}
            />
            <img
              src={infoEnglishImg}
              alt="info"
              style={{ visibility: !showImages.en && 'hidden' }}
            />
          </div>
          <div className={styles.textContainer}>
            <h3 className="bullet-heading">
              <FormattedMessage id="secondaryinfo.heading" />
            </h3>
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

Modal.defaultProps = {
  open: false,
};

Modal.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool,
};
