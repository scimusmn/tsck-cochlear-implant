import React, { useState, createRef, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useReactMediaRecorder } from 'react-media-recorder';
import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/voicerecorder.module.scss';
import {
  recordIcon,
  stopIcon,
  resetIcon,
  playIcon,
} from '@utils/images/controls';
import ProgressBar from './ProgressBar';

const VoiceRecorder = () => {
  const [audioDeleted, setAudioDeleted] = useState(false);
  const ref = createRef();
  const { audio, setAudio } = useAudio();

  const intl = useIntl();
  const textDir = (intl.locale.includes('ar') ? 'rtl' : 'ltr');

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl,
  } = useReactMediaRecorder({ video: false });

  const deleteRecording = () => {
    if (audio.status === 'recording') {
      setAudioDeleted(true);
      stopRecording();
    }
    if (audio.status === 'playing') {
      setAudio({ ...audio, status: 'playback_aborted' });
    }
    clearBlobUrl();
  };

  const playbackEnded = () => {
    setAudio({ samplePlaying: null, status: 'playback_complete' });
  };

  const record = () => {
    setAudioDeleted(false);
    startRecording();
  };

  const play = () => {
    if (mediaBlobUrl && ref.current) {
      setAudio({ ...audio, status: 'playing' });
      ref.current.play();
    }
  };

  const stop = () => {
    if (audio.status === 'playing' && ref.current) {
      ref.current.pause();
      ref.current.currentTime = 0;
      setAudio({ ...audio, status: 'playback_aborted' });
    }
  };

  const renderControl = (display, disabled, src, onClick) => {
    if (!display) return null;
    return (
      <button disabled={disabled} onClick={onClick} type="button">
        <img src={src} alt="play" />
      </button>
    );
  };

  useEffect(() => {
    if (status === 'stopped' && audioDeleted) clearBlobUrl();
  }, [mediaBlobUrl]);

  useEffect(() => {
    setAudio({ ...audio, status });
  }, [status]);

  useEffect(() => {
    if (audio.samplePlaying && (audio.status === 'recording')) {
      deleteRecording();
    }
    if (audio.samplePlaying && (audio.status === 'playing')) {
      stop();
    }
  }, [audio.samplePlaying]);

  return (
    <div className={styles.container}>
      <p className={styles.info} dir={textDir}>
        <FormattedMessage id="recorder.info" />
      </p>
      <ProgressBar
        ref={ref}
        mediaBlobUrl={mediaBlobUrl}
        completeRecording={stopRecording}
        completePlayback={playbackEnded}
      />
      <div className={styles.buttonsContainer}>
        {renderControl(
          !mediaBlobUrl,
          !!mediaBlobUrl || audio.status === 'playing' || audio.status === 'recording',
          recordIcon,
          record,
        )}
        {renderControl(
          !!mediaBlobUrl && audio.status !== 'playing',
          !mediaBlobUrl || audio.status === 'playing' || audio.status === 'recording',
          playIcon,
          play,
        )}
        {renderControl(
          !!mediaBlobUrl && audio.status === 'playing',
          (!mediaBlobUrl && audio.status !== 'recording'),
          stopIcon,
          stop,
        )}
        {renderControl(
          !!mediaBlobUrl,
          false,
          resetIcon,
          deleteRecording,
        )}
      </div>
    </div>
  );
};

export default VoiceRecorder;
