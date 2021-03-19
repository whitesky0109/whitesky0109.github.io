import React from 'react';
import PropTypes from 'prop-types';

import {
  ProfileImgStyled, AuthorBioStyled,
  SmallStyled,
} from './BioStyled';

import whitesky0109Avatar from '../../images/whitesky0109.jpg';

/** @type {React.FC} */
const Bio = ({ author, tagline }) => (
  <div className="bio-main w-75">
    <ProfileImgStyled src={whitesky0109Avatar} alt="" />
    <AuthorBioStyled className="mt-2">{author}</AuthorBioStyled>
    <SmallStyled className="text-muted">{tagline}</SmallStyled>
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
