import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Card, CardBody, Button } from 'reactstrap';
import { useAudio } from '@context/AudioContext';
// import all sample audios
import bird from '@utils/audios/bird.wav';
import cat from '@utils/audios/cat.wav';
import frog from '@utils/audios/frog.wav';

const SamplePlayer = () => {
  const [sample, setSample] = useState(null);
  const { audio } = useAudio();

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
        <p className="formatted">
          <FormattedMessage id="sample.info" />
        </p>
        <div>
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
            className="mx-2"
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
        </div>
        <div className="mt-4">
          now playing:
          {` ${sample ? sample.src : sample}`}
        </div>
      </CardBody>
    </Card>
  );
};

export default SamplePlayer;
