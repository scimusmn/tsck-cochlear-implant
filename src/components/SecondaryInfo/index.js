import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Modal from './Modal';

const SecodaryInfo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open && <Modal setOpen={setOpen} />}
      <Button color="info" onClick={() => setOpen(true)} type="button">
        Learn more
      </Button>
    </div>
  );
};

export default SecodaryInfo;
