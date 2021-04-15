import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as styles from '@styles/modules/secondaryinfo.module.scss';
// import { useLocale, LOCALES } from '@context/LocaleContext';
// import cochlearEng from '@utils/images/cochlear-eng.png';
// import cochlearArb from '@utils/images/cochlear-ar.png';
import ear from '@utils/images/ear.png';
import BulletPoint from './BulletPoint';

const Modal = ({ setOpen }) => {
  // const { locale } = useLocale();
  // const imgSrc = locale === LOCALES.ARABIC ? cochlearArb : cochlearEng;

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.secondaryContainer}>
        <span
          role="button"
          tabIndex={0}
          onKeyDown={closeModal}
          onClick={closeModal}
          className={styles.cross}
        >
          &#10006;
        </span>
        <div className={styles.imageContainer}>
          <img className={styles.image} alt="cochlear-how-to" src={ear} />
        </div>
        <div className={styles.textContainer}>
          <h3><FormattedMessage id="secondaryinfo.heading" /></h3>
          <hr />
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
  );
};

export default Modal;

Modal.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
