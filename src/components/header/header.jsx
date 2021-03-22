import React from 'react';
import PropTypes from 'prop-types';

import MobileSocialLinks from './MobileSocialLinks';
import MobilePageLinks from './MobilePageLinks';
import SocialLinks from './SocialLinks';
import MobileBio from './MobileBio';

import './header.css';
import Styled from './headerStyled';

const Header = ({ siteTitle, author, contacts }) => (
  <Styled.HeaderMain>
    <Styled.HeaderElements>
      <Styled.HeadLogo className="ml-4">
        <Styled.Link to="/">{siteTitle}</Styled.Link>
      </Styled.HeadLogo>
      <SocialLinks contacts={contacts} />
    </Styled.HeaderElements>

    <MobileSocialLinks contacts={contacts} />
    <MobilePageLinks />
    <MobileBio author={author} />
  </Styled.HeaderMain>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  author: PropTypes.string,
  contacts: PropTypes.instanceOf(Object),
};

Header.defaultProps = {
  siteTitle: '',
  author: '',
  contacts: {},
};

export default Header;
