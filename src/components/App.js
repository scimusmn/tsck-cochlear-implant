import React from 'react';
import PropTypes from 'prop-types';
import { useIdleTimer } from 'react-idle-timer';
import { IntlProvider } from 'react-intl';
import { useLocale } from '@context/LocaleContext';
import content from '@content';

const TIMEOUT = 560000;

const App = ({ children }) => {
  const { locale } = useLocale();

  const handleOnIdle = () => {
    setTimeout(() => window.location.reload(), 1000);
  };

  useIdleTimer({
    TIMEOUT,
    onIdle: handleOnIdle,
  });

  return (
    <IntlProvider locale={locale} messages={content[locale]}>
      {children}
    </IntlProvider>
  );
};

export default App;

App.propTypes = { children: PropTypes.element.isRequired };
