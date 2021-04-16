import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import * as styles from '@styles/modules/secondaryinfo.module.scss';
import info from '@utils/images/info.svg';
import Modal from './Modal';

const SecodaryInfo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <Modal setOpen={setOpen} />}
      <button className={styles.button} color="info" onClick={() => setOpen(true)} type="button">
        <p className="learn-more"><FormattedMessage id="learn.more" /></p>
        <img alt="learn-more" src={info} />
      </button>
    </>
  );
};

export default SecodaryInfo;
