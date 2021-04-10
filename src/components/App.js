// import React, { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { useIdleTimer } from 'react-idle-timer';
import { IntlProvider } from 'react-intl';
import { useLocale } from '@context/LocaleContext';
import * as styles from '@styles/modules/main.module.scss';
import content from '@content';
/* eslint object-curly-newline: ["error", { "multiline": true }] */
// import { Toast, ToastBody, ToastHeader, Alert } from 'reactstrap';

const TIMEOUT = 560000;

const App = ({ children }) => {
  const { locale } = useLocale();

  // const [remaining, setRemaining] = useState(TIMEOUT);
  // const [isIdle, setIsIdle] = useState(false);

  // const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => {
    // setIsIdle(true);
    setTimeout(() => window.location.reload(), 1000);
  };

  useIdleTimer({
    TIMEOUT,
    // onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  // const setMetrics = () => {
  //   setRemaining(getRemainingTime());
  // };

  // useEffect(() => {
  //   setMetrics();
  //   setInterval(() => {
  //     setMetrics();
  //   }, 1000);
  // }, []);

  return (
    <div className={styles.container}>
      <IntlProvider locale={locale} messages={content[locale]}>
        {children}
      </IntlProvider>

      {/* <div className="fixed-bottom m-5">
        <Toast className="ml-auto">
          <ToastHeader icon="danger">Inactivity Timer</ToastHeader>
          <ToastBody>
            <p>
              Timeout:
              {timeout / 1000}
              sec
            </p>
            <p>
              Time Remaining:
              {Math.floor(remaining / 1000)}
            </p>
            <p>
              Idle:
              {isIdle.toString()}
            </p>
            {isIdle && <Alert color="danger">Refreshing now...</Alert>}
          </ToastBody>
        </Toast>
      </div> */}
    </div>
  );
};

export default App;

App.propTypes = { children: PropTypes.element.isRequired };
