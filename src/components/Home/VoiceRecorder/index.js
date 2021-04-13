import React, { createRef, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useReactMediaRecorder } from 'react-media-recorder';
import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/voicerecorder.module.scss';
import {
  pause,
  play,
  record,
  stop,
  trash,
} from '@utils/images/controls';
import ProgressBar from './ProgressBar';

const VoiceRecorder = () => {
  const ref = createRef();
  const { audio, setAudio } = useAudio();

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl,
  } = useReactMediaRecorder({ video: false });

  const deleteRecording = () => {
    if (audio.status === 'recording') {
      stopRecording();
    }
    clearBlobUrl();
  };

  const togglePlay = () => {
    if (mediaBlobUrl && ref.current) {
      if (audio.status === 'playing') {
        setAudio({ status: 'paused' });
        ref.current.pause();
      } else {
        setAudio({ status: 'playing' });
        ref.current.play();
      }
    }
  };

  const toggleRecording = () => {
    if (audio.status === 'recording') {
      stopRecording();
    } else {
      if (mediaBlobUrl) deleteRecording();
      startRecording();
    }
  };

  useEffect(() => {
    setAudio({ status });
  }, [status]);

  return (
    <div className={styles.container}>
      <p className="formatted">
        <FormattedMessage id="recorder.info" />
      </p>
      <ProgressBar
        ref={ref}
        mediaBlobUrl={mediaBlobUrl}
        completeRecording={stopRecording}
      />
      <div className={styles.buttonsContainer}>
        <button disabled={audio.status === 'playing'} onClick={toggleRecording} type="button">
          <img src={audio.status === 'recording' ? stop : record} alt="record" />
        </button>
        <button disabled={audio.status === 'recording'} onClick={togglePlay} type="button">
          <img src={audio.status === 'playing' ? pause : play} alt="play" />
        </button>
        <button disabled={audio.status === 'playing'} onClick={deleteRecording} type="button">
          <img src={trash} alt="trash" />
        </button>
      </div>
    </div>
  );
};

export default VoiceRecorder;
