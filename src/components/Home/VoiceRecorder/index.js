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

  const renderControl = (disabled, src, onClick) => (
    <button disabled={disabled} onClick={onClick} type="button">
      <img src={src} alt="play" />
    </button>
  );

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
        {renderControl(
          !!audio.samplePlaying || audio.status === 'playing',
          audio.status === 'recording' ? stop : record,
          toggleRecording,
        )}
        {renderControl(
          !!audio.samplePlaying || audio.status === 'recording',
          audio.status === 'playing' ? pause : play,
          togglePlay,
        )}
        {renderControl(
          !!audio.samplePlaying || audio.status === 'playing',
          trash,
          deleteRecording,
        )}
      </div>
    </div>
  );
};

export default VoiceRecorder;
