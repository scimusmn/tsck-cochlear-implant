import React, { useState, useContext } from 'react';
/* eslint object-curly-newline: ["error", "never"] */
import { Card, CardBody, ButtonGroup, Button } from 'reactstrap';

import AudioContext from '@context/AudioContext';

import bird from '@utils/audios/bird.wav';
import cat from '@utils/audios/cat.wav';
import frog from '@utils/audios/frog.wav';

const SamplePlayer = () => {
  const [sample, setSample] = useState(null);
  const { audio = {} } = useContext(AudioContext);

  const playAudio = (audioFile) => {
    if (sample) sample.pause();
    const playback = new Audio(audioFile);
    setSample(playback);
    playback.play();

    playback.onended = () => {
      playback.pause();
      setSample(null);
    };
  };

  return (
    <Card className="mt-4">
      <CardBody>
        <p>Hear other sounds through simulated cochlear implant</p>
        <ButtonGroup>
          <Button
            color="primary"
            outline
            disabled={audio.recording}
            onClick={() => playAudio(bird)}
            type="button"
          >
            Sample 1
          </Button>
          <Button
            color="primary"
            outline
            disabled={audio.recording}
            onClick={() => playAudio(cat)}
            type="button"
          >
            Sample 2
          </Button>
          <Button
            color="primary"
            outline
            disabled={audio.recording}
            onClick={() => playAudio(frog)}
            type="button"
          >
            Sample 3
          </Button>
        </ButtonGroup>
        <div className="mt-4">
          now playing:
          {` ${sample ? sample.src : sample}`}
        </div>
      </CardBody>
    </Card>
  );
};

export default SamplePlayer;
