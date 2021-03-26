import React, { forwardRef } from 'react';
import * as styles from '@styles/modules/secondaryinfo.module.scss';

const SecondaryInfo = forwardRef((props, ref) => {
  const closeModal = () => {
    if (ref.current) {
      const container = ref.current;
      container.style.visibility = 'hidden';
    }
  };

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.image}>
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
});

export default SecondaryInfo;
