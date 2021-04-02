import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Overview from './Overview';
import VoiceRecorder from './VoiceRecorder';
import SamplePlayer from './SamplePlayer';
import LangSwitcher from './LangSwitcher';

const Home = () => (
  <Container fluid className="mt-5">
    <Row>
      <Col>
        <VoiceRecorder />
        <SamplePlayer />
      </Col>
      <Col>
        <Overview />
        <LangSwitcher />
      </Col>
    </Row>
  </Container>
);

export default Home;
