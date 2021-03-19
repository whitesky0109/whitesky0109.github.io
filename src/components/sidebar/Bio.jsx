import React from 'react';
import PropTypes from 'prop-types';

import './sidebar.css';

import whitesky0109 from '../../images/whitesky0109.jpg';

/** @type {React.FC} */
const Bio = ({ author, tagline }) => (
  <div className="bio-main w-75">
    <img
      src={whitesky0109}
      style={{ minWidth: '100px', maxWidth: '100px' }}
      className="profile-img"
      alt=""
    />
    <h3 className="mt-2 author-bio">{author}</h3>
    <small className="text-muted">{tagline}</small>
  </div>
);

Bio.propTypes = {
  author: PropTypes.string,
  tagline: PropTypes.string,
};

Bio.defaultProps = {
  author: '',
  tagline: '',
};

export default Bio;
