import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import { useLocale } from '@context/LocaleContext';

const LangSwitcher = () => {
  const { locale, toggleLocale } = useLocale();

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(locale);
  }, [locale]);

  return (
    <div className="mt-4">
      <Button color="primary" onClick={toggleLocale} type="button">
        Toggle Language
      </Button>
    </div>
  );
};
export default LangSwitcher;
