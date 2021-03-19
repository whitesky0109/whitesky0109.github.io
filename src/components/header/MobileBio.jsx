import React from 'react';
import PropTypes from 'prop-types';

import './header.css';
import whitesky0109 from '../../images/whitesky0109.jpg';

/** @type {React.FC<>} */
const MobileBio = ({ author }) => (
  <div className="mobile-bio-main">
    <img
      src={whitesky0109}
      className="ml-4 mt-2"
      style={{
        maxWidth: '75px',
        maxHeight: '75px',
        borderRadius: '50%',
        boxShadow: '1px 1px 3px',
      }}
      alt="author-pic"
    />
    <h4 className="mr-4 mt-4">{author}</h4>
  </div>
);

MobileBio.propTypes = {
  author: PropTypes.string,
};

MobileBio.defaultProps = {
  author: '',
};

export default MobileBio;
