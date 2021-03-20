import React from 'react';
import PropTypes from 'prop-types';

import Styled from './MobileBioStyled';

import whitesky0109 from '../../images/whitesky0109.jpg';

/** @type {React.FC<>} */
const MobileBio = ({ author }) => (
  <Styled.MobileBioMain>
    <Styled.Img src={whitesky0109} className="ml-4 mt-2" alt="author-pic" />
    <h4 className="mr-4 mt-4">{author}</h4>
  </Styled.MobileBioMain>
);

MobileBio.propTypes = {
  author: PropTypes.string,
};

MobileBio.defaultProps = {
  author: '',
};

export default MobileBio;
