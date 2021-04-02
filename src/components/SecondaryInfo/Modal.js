import React from 'react';
import PropTypes from 'prop-types';

import * as styles from '@styles/modules/secondaryinfo.module.scss';
import { useLocale, LOCALES } from '@context/LocaleContext';
import cochlearEng from '@utils/images/cochlear-eng.png';
import cochlearArb from '@utils/images/cochlear-ar.png';

const Modal = ({ setOpen }) => {
  const { locale } = useLocale();
  const imgSrc = locale === LOCALES.ARABIC ? cochlearArb : cochlearEng;

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={styles.secondaryContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} alt="cochlear-how-to" src={imgSrc} />
        <span
          role="button"
          tabIndex={0}
          onKeyDown={closeModal}
          onClick={closeModal}
          className={styles.cross}
        >
          &#10006;
        </span>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  setOpen: PropTypes.element.isRequired,
};
