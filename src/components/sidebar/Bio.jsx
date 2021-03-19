import React from 'react';
import PropTypes from 'prop-types';

import './sidebar.css';

import willjw3 from '../../images/willjw3.jpg';

/** @type {React.FC} */
const Bio = ({ author, tagline }) => (
  <div className="bio-main w-75">
    <img
      src={willjw3}
      style={{ maxWidth: '100px' }}
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
