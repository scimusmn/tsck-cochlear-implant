import React, { useState } from 'react';
// import { Link } from 'gatsby';

// import Info from '@components/audio/info';
import Record from '@components/Audio/Record';
import Samples from '@components/Audio/Samples';

import AudioContext from '../AudioContext';

const IndexPage = () => {
  const [audio, setAudio] = useState();

  return (
    <AudioContext.Provider value={{ audio, setAudio }}>
      {/* <Info /> */}
      <Record />
      <Samples />
    </AudioContext.Provider>
  );
};

export default IndexPage;
