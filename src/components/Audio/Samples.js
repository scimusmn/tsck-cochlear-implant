import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

/**
 * disable record button while recording
 * move this logic to hook
 * add audio limit
 */

const Samples = () => {
  const [audio, setAudio] = useState(null);

  const recorder = new MicRecorder({
    bitRate: 128,
  });

  const startRecording = () => {
    console.log('start', recorder);
    recorder.start().then(() => {
      console.log('?????');
    }).catch((e) => {
      console.error(e);
    });
  };

  const stopRecording = () => {
    if (!recorder.activeStream) return;
    recorder
      .stop()
      .getMp3().then(([buffer, blob]) => {
        // do what ever you want with buffer and blob
        // Example: Create a mp3 file and play
        const file = new File(buffer, 'me-at-thevoice.mp3', {
          type: blob.type,
          lastModified: Date.now(),
        });
        const player = new Audio(URL.createObjectURL(file));
        // player.play();
        setAudio(player);
      }).catch((e) => {
        alert('We could not retrieve your message');
        console.log(e);
      });
  };

  const playAudio = () => {
    if (audio) audio.play();
  };

  return (
    <div>
      <button type="button" onClick={startRecording}>Start Recording</button>
      <button type="button" onClick={stopRecording}>Stop Recording</button>
      {/** use audio elem? */}
      <button type="button" onClick={playAudio}>Play Recording</button>
    </div>
  );
};

export default Samples;
