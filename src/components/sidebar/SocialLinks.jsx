import React from 'react';
import PropTypes from 'prop-types';

import {
  FaLinkedin,
  FaGithubSquare,
  FaStackOverflow,
  FaFreeCodeCamp,
  FaTwitterSquare,
} from 'react-icons/fa';

import Styled from './SocialLinksStyled';
import './sidebar.css';

/** @type {React.FC} */
const SocialLinks = ({ contacts }) => (
  <Styled.SideSocialLinks className="float-left mt-3 mb-3">
    <a className="text-secondary p-2" href={contacts.linkedin}>
      <span title="Linked In">
        <FaLinkedin size={26} style={{ color: 'secondary' }} />
      </span>
    </a>
    <a className="text-secondary p-2" href={contacts.github}>
      <span title="GitHub">
        <FaGithubSquare size={26} style={{ color: 'secondary' }} />
      </span>
    </a>
    <a className="text-secondary p-2" href={contacts.stackoverflow}>
      <span title="Stack Overflow">
        <FaStackOverflow size={26} style={{ color: 'secondary' }} />
      </span>
    </a>
    <a className="text-secondary p-2" href={contacts.freecodecamp}>
      <span title="freeCodeCamp">
        <FaFreeCodeCamp size={26} style={{ color: 'secondary' }} />
      </span>
    </a>
    <a className="text-secondary p-2" href={contacts.twitter}>
      <span title="Twitter">
        <FaTwitterSquare size={26} style={{ color: 'secondary' }} />
      </span>
    </a>
  </Styled.SideSocialLinks>
);

SocialLinks.propTypes = {
  contacts: PropTypes.instanceOf(Object),
};

SocialLinks.defaultProps = {
  contacts: {},
};

export default SocialLinks;
