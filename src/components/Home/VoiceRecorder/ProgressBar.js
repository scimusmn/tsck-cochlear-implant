import React, {
  useState, forwardRef, useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/voicerecorder.module.scss';

/**
 * clear intervals in useEffect?
 */

const MAX_RECORDING_TIME = 10;

const ProgressBar = forwardRef(({
  mediaBlobUrl, completeRecording,
}, ref) => {
  const { audio, setAudio } = useAudio();
  const progressBar = useRef(null);
  const intervalCountdown = useRef();
  const intervalRecord = useRef();
  const intervalPlayback = useRef();
  const [timeRemaining, setTimeRemaining] = useState(MAX_RECORDING_TIME);
  const [playbackDuration, setPlaybackDuration] = useState(0);
  const recordingDuration = MAX_RECORDING_TIME;

  const resetProgressBar = () => {
    if (progressBar.current) {
      progressBar.current.style.width = 0;
    }
  };

  const calculateTimeRemaining = () => {
    setTimeRemaining((prevTime) => prevTime - 1);
  };

  const startCountdown = () => {
    setTimeRemaining(MAX_RECORDING_TIME);
    intervalCountdown.current = setInterval(calculateTimeRemaining, 1000);
  };

  const startInterval = (interval, duration, styleCallback, completionCallback) => {
    const started = Date.now();
    if (progressBar.current) {
      // eslint-disable-next-line no-param-reassign
      interval.current = setInterval(() => {
        if (Math.ceil(Date.now() - started) >= (duration * 1000)) {
          progressBar.current.style.width = '100%';
          // eslint-disable-next-line no-unused-expressions
          completionCallback && completionCallback();
          clearInterval(interval.current);
        } else {
          const { percent, background } = styleCallback();
          progressBar.current.style.width = `${percent}%`;
          progressBar.current.style.background = background;
        }
      }, 10);
    }
  };

  useEffect(() => {
    if (audio.status === 'recording') {
      let increment = 0;
      startCountdown();
      startInterval(
        intervalRecord,
        recordingDuration,
        () => {
          increment += 10;
          const percent = Math.min(increment / 100, 100);
          const background = 'linear-gradient(28deg, rgba(0,0,0,1) 0%, rgba(255, 0, 0, 1) 100%)';
          return { percent, background };
        },
        () => {
          completeRecording();
        },
      );
    }
    if (audio.status === 'stopping') {
      setPlaybackDuration(MAX_RECORDING_TIME - timeRemaining);
      clearInterval(intervalRecord.current);
      clearInterval(intervalCountdown.current);
    }
    if (audio.status === 'paused') {
      clearInterval(intervalPlayback.current);
    }
  }, [audio.status]);

  useEffect(() => {
    if (!mediaBlobUrl) resetProgressBar();
  }, [mediaBlobUrl]);

  const startProgress = (event) => {
    event.persist();
    startInterval(
      intervalPlayback,
      playbackDuration - event.target.currentTime,
      () => {
        const increment = 10 / playbackDuration;
        const percent = Math.min(increment * event.target.currentTime * 10, 100);
        const background = 'linear-gradient(28deg, rgba(0,0,0,1) 0%, rgba(34, 202, 177, 1) 100%)';
        return { percent, background };
      },
    );
  };

  const updateStatus = () => {
    setAudio({ status: 'playback_complete' });
  };

  return (
    <>
      <audio
        id="audio"
        ref={ref}
        src={mediaBlobUrl || ''}
        type="audio/wav"
        onPlaying={startProgress}
        onEnded={updateStatus}
      >
        <track kind="captions" />
      </audio>
      <div className={styles.progressBar}>
        <div ref={progressBar} />
      </div>
    </>
  );
});

export default ProgressBar;

ProgressBar.defaultProps = {
  mediaBlobUrl: '',
  completeRecording: () => {},
};

ProgressBar.propTypes = {
  mediaBlobUrl: PropTypes.string,
  completeRecording: PropTypes.func,
};
