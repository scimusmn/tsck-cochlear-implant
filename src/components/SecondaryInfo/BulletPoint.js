import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import * as styles from '@styles/modules/secondaryinfo.module.scss';

const BulletPoint = ({ number, node }) => {

  const intl = useIntl();
  const textDir = (intl.locale.includes('ar') ? 'rtl' : 'ltr');

    return (
    <div className={styles.bulletPoint}>
      <div className={styles.number}>
        {number}
      </div>
      <p className={styles.text} dir={textDir}>
        {node}
      </p>
    </div>
  );
}

export default BulletPoint;

BulletPoint.defaultProps = {
  number: 0,
  node: <div />,
};

BulletPoint.propTypes = {
  number: PropTypes.number,
  node: PropTypes.node,
};
