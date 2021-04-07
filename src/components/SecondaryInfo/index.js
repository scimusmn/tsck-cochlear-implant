import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import * as styles from '@styles/modules/secondaryinfo.module.scss';
import Modal from './Modal';

const SecodaryInfo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open && <Modal setOpen={setOpen} />}
      <button className={styles.button} color="info" onClick={() => setOpen(true)} type="button">
        <FormattedMessage id="learn.more" />
      </button>
    </div>
  );
};

export default SecodaryInfo;
