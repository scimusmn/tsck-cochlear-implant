import React from 'react';
import * as styles from '@styles/modules/home.module.scss';

import Overview from './Overview';
import VoiceRecorder from './VoiceRecorder';
import SamplePlayer from './SamplePlayer';
import LangSwitcher from './LangSwitcher';

const Home = () => (
  <div className={styles.container}>
    <div className={styles.left}>
      <VoiceRecorder />
      <SamplePlayer />
    </div>
    <div className={styles.right}>
      <Overview />
      <LangSwitcher />
    </div>
  </div>
);

export default Home;
