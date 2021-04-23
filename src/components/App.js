import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useIdleTimer } from 'react-idle-timer';
import { IntlProvider } from 'react-intl';
import { useLocale } from '@context/LocaleContext';
import content from '@content';

const TIMEOUT = 60000;

const App = ({ children }) => {
  const { locale } = useLocale();

  const handleOnIdle = () => {
    window.location.reload();
  };

  const { getRemainingTime } = useIdleTimer({
    timeout: TIMEOUT,
    onIdle: handleOnIdle,
    startOnMount: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(`Time remaining: ${Math.floor(getRemainingTime() / 1000)}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <IntlProvider locale={locale} messages={content[locale]}>
      {children}
    </IntlProvider>
  );
};

export default App;

App.propTypes = { children: PropTypes.element.isRequired };
