import React, { useState, useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import * as styles from './audio.module.scss';
/**
 * if user is recording disable playback and vice versa
 * one possible solution: delete blob when recording starts
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

  const calculateTimeRemaining = () => {
    setTimeLeft((prevTime) => prevTime - 1);
  };

  const abortRecording = () => {
    clearInterval(intervalVal);
    stopRecording();
  };

  const deleteRecording = () => {
    clearBlobUrl();
  };

  const changeRecordingStatus = () => {
    if (recording) {
      abortRecording();
    } else {
      deleteRecording();
      setTimeLeft(10);
      startRecording();
      setIntervalVal(setInterval(calculateTimeRemaining, 1000));
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      abortRecording();
    }
  }, [timeLeft]);

  useEffect(
    () => () => {
      clearInterval(intervalVal);
    },
    [],
  );

  return (
    <div className={styles.container}>
      <div className={styles.recorder}>
        <button onClick={changeRecordingStatus} type="button">
          {recording ? 'Stop ' : 'Start '}
          Recording
        </button>
        <audio controls src={mediaBlobUrl || ''} type="audio/wav">
          <track kind="captions" />
        </audio>
        <button onClick={deleteRecording} type="button">
          Delete Recording
        </button>
      </div>
      <div className={styles.timer}>
        Time left:
        {timeLeft}
      </div>
    </div>
  );
};

export default Record;
