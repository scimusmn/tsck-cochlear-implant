/* eslint import/no-unresolved: [2, { ignore: ['\.scss$'] }] */
import React, { useState, useEffect, useContext } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import * as styles from '@styles/modules/audio.module.scss';
import AudioContext from '../../context/AudioContext';

const MAX_RECORDING_TIME = 10;

const Record = () => {
  const [intervalVal, setIntervalVal] = useState();
  const [timeLeft, setTimeLeft] = useState(MAX_RECORDING_TIME);
  const { audio = {}, setAudio } = useContext(AudioContext);

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl,
  } = useReactMediaRecorder({ video: false });

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
    if (audio.recording) {
      abortRecording();
    } else {
      deleteRecording();
      setTimeLeft(MAX_RECORDING_TIME);
      startRecording();
      setIntervalVal(setInterval(calculateTimeRemaining, 1000));
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      abortRecording();
    }
  }, [timeLeft]);

  useEffect(() => {
    setAudio({ recording: status === 'recording' });
  }, [status]);

  useEffect(
    () => () => {
      clearInterval(intervalVal);
    },
    [],
  );

  return (
    <div className={styles.recordingContainer}>
      <p>Hear your voice through simulated cochlear implant</p>
      <div className={styles.recorder}>
        <button onClick={changeRecordingStatus} type="button">
          {audio.recording ? 'Stop ' : 'Start '}
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
        timer:
        {` ${timeLeft}`}
      </div>

      <div className={styles.status}>
        status:
        {` ${status}`}
      </div>
      <hr />
    </div>
  );
};

export default Record;
