import React from 'react';
// import { Card, CardBody } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import SecodaryInfo from '@components/SecondaryInfo';
import * as styles from '@styles/modules/info.module.scss';

const Overview = () => (
  <div className={styles.container}>
    <h1 className="formatted">
      <FormattedMessage id="heading" />
    </h1>
    <div className={styles.divider} />
    <p className="formatted">
      <FormattedMessage id="description" />
    </p>
    <SecodaryInfo />
  </div>
);

export default Overview;
