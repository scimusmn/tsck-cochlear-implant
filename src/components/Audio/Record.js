import React, { useState, useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

/**
 * if user is recording disable playback and vice versa
 */

const Record = () => {
  const [intervalVal, setIntervalVal] = useState();
  const [timeLeft, setTimeLeft] = useState(10);
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl,
  } = useReactMediaRecorder({ video: false });
  const recording = status === 'recording';

  const abortRecording = () => {
    setTimeLeft(10);
    clearInterval(intervalVal);
    stopRecording();
  };

  const calculateTimeRemaining = () => {
    setTimeLeft((prevTime) => prevTime - 1);
  };

  const changeRecordingStatus = () => {
    if (recording) {
      abortRecording();
    } else {
      startRecording();
      setIntervalVal(setInterval(() => {
        calculateTimeRemaining();
      }, 1000));
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      abortRecording();
    }
  });

  useEffect(() => () => {
    clearInterval(intervalVal);
  }, []);

  const deleteRecording = () => {
    clearBlobUrl();
  };

  return (
    <div>
      <button onClick={changeRecordingStatus} type="button">
        {recording ? 'Stop' : 'Start'}
        Recording
      </button>
      <audio controls src={mediaBlobUrl || ''}>
        <track kind="captions" />
      </audio>
      <button onClick={deleteRecording} type="button">
        Delete Recording
      </button>
      <span>
        Time left:
        {timeLeft}
      </span>
    </div>
  );
};

export default Record;
