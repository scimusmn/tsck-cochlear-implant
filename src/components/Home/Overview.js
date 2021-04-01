import React, { createRef, useEffect } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
// import Info from '../Info';

const Overview = () => {
  const ref = createRef();

  useEffect(() => {
    if (ref.current) {
      const container = ref.current;
      container.style.visibility = 'hidden';
    }
  }, []);

  const openModal = () => {
    if (ref.current) {
      const container = ref.current;
      container.style.visibility = 'visible';
    }
  };

  return (
    <Card>
      <CardBody>
        {/* <Info ref={ref} /> */}
        <h1 className="formatted">
          <FormattedMessage id="heading" />
        </h1>

        <p className="formatted">
          <FormattedMessage id="description" />
        </p>
        <Button color="info" onClick={openModal} type="button">
          Learn more
        </Button>
      </CardBody>
    </Card>
  );
};

export default Overview;
