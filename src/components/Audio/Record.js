import React, { useState, useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

const Record = () => {
  const [time, setTime] = useState();
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl,
  } = useReactMediaRecorder({ video: false });

  const changeRecordingStatus = () => {
    if (status === 'recording') {
      stopRecording();
    } else {
      startRecording();
      if (time) clearTimeout(time);
      setTime(setTimeout(() => {
        stopRecording();
      }, 10000));
    }
  };

  useEffect(() => () => clearTimeout(time), []);

  const deleteRecording = () => {
    clearBlobUrl();
  };

  return (
    <div>
      <button onClick={changeRecordingStatus} type="button">
        {status === 'recording' ? 'Stop' : 'Start'}
        Recording
      </button>
      <audio controls src={mediaBlobUrl || ''}>
        <track kind="captions" />
      </audio>
      <button onClick={deleteRecording} type="button">
        Delete Recording
      </button>
    </div>
  );
};

export default Record;
