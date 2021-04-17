import React from 'react';
import { FormattedMessage } from 'react-intl';
import SecodaryInfo from '@components/SecondaryInfo';
import * as styles from '@styles/modules/overview.module.scss';

const Overview = () => (
  <>
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <FormattedMessage id="heading" />
      </h1>
      <div className={styles.divider} />
      <p className={styles.description}>
        <FormattedMessage id="description" />
      </p>
    </div>
    <SecodaryInfo />
  </>
);

export default Overview;
