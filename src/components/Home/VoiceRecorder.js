import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { useReactMediaRecorder } from 'react-media-recorder';
import AudioContext from '@context/AudioContext';

const MAX_RECORDING_TIME = 10;

const VoiceRecorder = () => {
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
    <Card>
      <CardBody>
        <p>Hear your voice through simulated cochlear implant</p>
        <div className="d-flex align-items-center">
          <Button
            color={audio.recording ? 'warning' : 'success'}
            onClick={changeRecordingStatus}
          >
            {audio.recording ? 'Stop ' : 'Start '}
            Recording
          </Button>
          <audio
            controls
            src={mediaBlobUrl || ''}
            type="audio/wav"
            className="mx-2"
          >
            <track kind="captions" />
          </audio>
          <Button color="danger" onClick={deleteRecording}>
            Delete Recording
          </Button>
        </div>

        <div>
          <p className="mt-4 mb-2">
            timer:
            {` ${timeLeft}`}
          </p>
          <p>
            status:
            {` ${status}`}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default VoiceRecorder;
