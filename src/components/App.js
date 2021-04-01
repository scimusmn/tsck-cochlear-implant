import React from 'react';
import PropTypes from 'prop-types';

import { IntlProvider } from 'react-intl';
import { useLocale } from '@context/LocaleContext';
import content from '@content';

const App = ({ children }) => {
  const { locale } = useLocale();
  return (
    <IntlProvider locale={locale} messages={content[locale]}>
      {children}
    </IntlProvider>
  );
};

export default App;

App.propTypes = {
  children: PropTypes.element.isRequired,
};
