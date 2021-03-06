import React from 'react';
import PropTypes from 'prop-types';

import {
  FaLinkedin,
  FaGithubSquare,
  FaStackOverflow,
  FaFreeCodeCamp,
  FaTwitterSquare,
} from 'react-icons/fa';

import '../layout.css';
import Styled from './MobileSocialLinksStyled';

/** @type {React.FC<>} */
const MobileSocialLinks = ({ contacts }) => (
  <Styled.BottomBar className="py-1">
    <a
      className=" text-primary"
      href={contacts.linkedin}
    >
      <span title="Linked In">
        <FaLinkedin size={26} style={{ color: 'primary' }} />
      </span>
    </a>
    <a
      className="text-light"
      href={contacts.github}
    >
      <span title="GitHub">
        <FaGithubSquare size={26} style={{ color: 'light' }} />
      </span>
    </a>
    <a
      className="text-warning"
      href={contacts.stackoverflow}
    >
      <span title="Stack Overflow">
        <FaStackOverflow size={26} style={{ color: 'warning' }} />
      </span>
    </a>
    <a
      className="text-success"
      href={contacts.freecodecamp}
    >
      <span title="freeCodeCamp">
        <FaFreeCodeCamp size={26} style={{ color: 'success' }} />
      </span>
    </a>
    <a
      className="text-info"
      href={contacts.twitter}
    >
      <span title="Twitter">
        <FaTwitterSquare size={26} style={{ color: 'info' }} />
      </span>
    </a>
  </Styled.BottomBar>
);

MobileSocialLinks.propTypes = {
  contacts: PropTypes.instanceOf(Object),
};

MobileSocialLinks.defaultProps = {
  contacts: {},
};

export default MobileSocialLinks;
