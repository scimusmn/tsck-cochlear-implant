import React, { useState, createRef, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useReactMediaRecorder } from 'react-media-recorder';
import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/voicerecorder.module.scss';
import {
  recordIcon,
  trashIcon,
  playIcon,
} from '@utils/images/controls';
import ProgressBar from './ProgressBar';

const VoiceRecorder = () => {
  const [audioDeleted, setAudioDeleted] = useState(false);
  const ref = createRef();
  const { audio, setAudio } = useAudio();
  const disableControl = !!audio.samplePlaying || audio.status === 'playing';

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
    clearBlobUrl();
  };

  const play = () => {
    if (mediaBlobUrl && ref.current) {
      setAudio({ status: 'playing' });
      ref.current.play();
    }
  };

  const record = () => {
    setAudioDeleted(false);
    startRecording();
  };

  const renderControl = (disabled, src, onClick) => (
    <button disabled={disabled} onClick={onClick} type="button">
      <img src={src} alt="play" />
    </button>
  );

  useEffect(() => {
    if (status === 'stopped' && audioDeleted) clearBlobUrl();
  }, [mediaBlobUrl]);

  useEffect(() => {
    setAudio({ status });
  }, [status]);

  return (
    <div className={styles.container}>
      <p className={styles.info}>
        <FormattedMessage id="recorder.info" />
      </p>
      <ProgressBar
        ref={ref}
        mediaBlobUrl={mediaBlobUrl}
        completeRecording={stopRecording}
      />
      <div className={styles.buttonsContainer}>
        {renderControl(
          disableControl || !!mediaBlobUrl || disableControl || audio.status === 'recording',
          recordIcon,
          record,
        )}
        {renderControl(
          disableControl || !mediaBlobUrl || audio.status === 'recording',
          playIcon,
          play,
        )}
        {renderControl(
          disableControl || (!mediaBlobUrl && audio.status !== 'recording'),
          trashIcon,
          deleteRecording,
        )}
      </div>
    </div>
  );
};

export default VoiceRecorder;
