import React, { forwardRef, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAudio } from '@context/AudioContext';
import * as styles from '@styles/modules/voicerecorder.module.scss';

const MAX_RECORDING_TIME = 5;

const ProgressBar = forwardRef(
  ({ mediaBlobUrl, completeRecording, completePlayback }, ref) => {
    const { audio } = useAudio();
    const progressBar = useRef(null);
    const intervalRecord = useRef();
    const intervalPlayback = useRef();

    const resetProgressBar = () => {
      if (progressBar.current) {
        progressBar.current.style.width = 0;
      }
    };

    const startInterval = (interval, completionCallback) => {
      let increment = 0;
      const started = Date.now();
      const color =
        audio.status === 'recording'
          ? 'rgba(255, 0, 0, 1)'
          : 'rgba(34, 202, 177, 1)';
      if (progressBar.current) {
        // eslint-disable-next-line no-param-reassign
        interval.current = setInterval(() => {
          if (Math.ceil(Date.now() - started) >= MAX_RECORDING_TIME * 1000) {
            progressBar.current.style.width = '100%';
            if (completionCallback) completionCallback();
            clearInterval(interval.current);
          } else {
            increment += 10;
            const percent = Math.min(
              increment / (MAX_RECORDING_TIME * 10),
              100,
            );
            const background = `linear-gradient(28deg, rgba(0,0,0,1) 0%, ${color} 100%)`;
            progressBar.current.style.width = `${percent}%`;
            progressBar.current.style.background = background;
          }
        }, 10);
      }
    };

    useEffect(() => {
      if (audio.status === 'recording') {
        startInterval(intervalRecord, completeRecording);
      }
      if (audio.status === 'playing') {
        startInterval(intervalPlayback, completePlayback);
      }
      if (audio.status === 'stopping') {
        clearInterval(intervalRecord.current);
      }
      if (audio.status === 'playback_aborted') {
        if (progressBar.current) progressBar.current.style.width = 0;
        clearInterval(intervalPlayback.current);
      }
    }, [audio.status]);

    useEffect(() => {
      if (!mediaBlobUrl) resetProgressBar();
    }, [mediaBlobUrl]);

    useEffect(
      () => () => {
        clearInterval(intervalRecord.current);
        clearInterval(intervalPlayback.current);
      },
      [],
    );

    return (
      <>
        <audio id="audio" ref={ref} src={mediaBlobUrl || ''} type="audio/wav">
          <track kind="captions" />
        </audio>
        <div className={styles.progressBar}>
          <div ref={progressBar} />
        </div>
      </>
    );
  },
);

export default ProgressBar;

ProgressBar.defaultProps = {
  mediaBlobUrl: '',
  completeRecording: () => {},
  completePlayback: () => {},
};

ProgressBar.propTypes = {
  mediaBlobUrl: PropTypes.string,
  completeRecording: PropTypes.func,
  completePlayback: PropTypes.func,
};
