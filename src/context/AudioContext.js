import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AudioContext = React.createContext();

function AudioProvider({ children }) {
  const [audio, setAudio] = useState({});

  const value = { audio, setAudio };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within a AudioProvider');
  }
  return context;
}

export { AudioProvider, useAudio };

AudioProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
