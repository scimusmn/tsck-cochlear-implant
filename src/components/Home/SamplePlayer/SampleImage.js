import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

const SampleImage = ({ id }) => {
  // eslint-disable-next-line consistent-return
  const renderImage = () => {
    if (id === 'bird') {
      return (
        <StaticImage
          src="../../../utils/images/samples/bird.png"
          alt="sample-image"
          style={{ display: 'block', height: 221 }}
          loading="eager"
        />
      );
    }
    if (id === 'traffic') {
      return (
        <StaticImage
          src="../../../utils/images/samples/traffic.png"
          alt="sample-image"
          style={{ display: 'block', height: 221 }}
          loading="eager"
        />
      );
    }
    if (id === 'anthem') {
      return (
        <StaticImage
          src="../../../utils/images/samples/anthem.png"
          alt="sample-image"
          style={{ display: 'block', height: 221 }}
          loading="eager"
        />
      );
    }
  };

  return <>{renderImage()}</>;
};

export default SampleImage;

SampleImage.propTypes = {
  id: PropTypes.string.isRequired,
};
