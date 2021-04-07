import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import SecodaryInfo from '@components/SecondaryInfo';

const Overview = () => (
  <Card>
    <CardBody>
      <h1 className="formatted">
        <FormattedMessage id="heading" />
      </h1>

      <p className="formatted">
        <FormattedMessage id="description" />
      </p>
      <SecodaryInfo />
    </CardBody>
  </Card>
);

export default Overview;
