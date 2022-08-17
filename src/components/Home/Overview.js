import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import SecodaryInfo from '@components/SecondaryInfo';
import * as styles from '@styles/modules/overview.module.scss';

const Overview = () => {

  const intl = useIntl();
  const textDir = (intl.locale.includes('ar') ? 'rtl' : 'ltr');

  return (
    <>
      <h1 className={styles.heading} dir={textDir}>
        <FormattedMessage id="heading" />
      </h1>
      <div className={styles.divider} />
      <p className={styles.description} dir={textDir}>
        <FormattedMessage id="description" />
      </p>
      < SecodaryInfo />
    </>
  );
};

export default Overview;
