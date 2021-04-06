import React, { useState } from 'react';
import * as styles from '@styles/modules/info.module.scss';
import Modal from './Modal';

const SecodaryInfo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open && <Modal setOpen={setOpen} />}
      <button className={styles.button} color="info" onClick={() => setOpen(true)} type="button">
        Learn more
      </button>
    </div>
  );
};

export default SecodaryInfo;
