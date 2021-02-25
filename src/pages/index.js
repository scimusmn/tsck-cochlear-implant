import React from 'react';
import { Link } from 'gatsby';

import Home from '@components/Home';

const IndexPage = () => (
  <>
    <Home />
    <Link to="/second-page">Test link</Link>
  </>
);

export default IndexPage;
