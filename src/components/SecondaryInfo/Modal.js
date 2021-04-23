import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as styles from '@styles/modules/secondaryinfo.module.scss';
import cross from '@utils/images/cross.svg';
import cochlearEng from '@utils/images/cochlear-en.png';
import cochlearArb from '@utils/images/cochlear-ar.png';
import { useLocale, LOCALES } from '@context/LocaleContext';
import BulletPoint from './BulletPoint';

const Modal = ({ setOpen }) => {
  const { locale } = useLocale();
  const imgSrc = locale === LOCALES.ARABIC ? cochlearArb : cochlearEng;

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
            <img className={styles.image} alt="cochlear-how-to" src={imgSrc} />
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
