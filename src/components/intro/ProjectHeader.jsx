import React from 'react';
import PropTypes from 'prop-types';

import { Tooltip } from '@material-ui/core';
import {
  FaUserCircle,
  FaCalendarAlt,
} from 'react-icons/fa';

import Styled from './ProjectStyled';

const InfoIcon = ({
  // eslint-disable-next-line react/prop-types
  tooltip = '', children, count, color = 'primary',
}) => (
  <Styled.IconLayer item xs={6}>
    <Tooltip title={tooltip}>
      <Styled.IconBadge badgeContent={count} color={color}>
        {children}
      </Styled.IconBadge>
    </Tooltip>
  </Styled.IconLayer>
);

/** @type {React.FC} */
const ProejctHeader = ({ title, from, to }) => (
  <Styled.ProjectLayer container>
    <Styled.Layer item xs={8}>
      <Styled.Layer>
        <Styled.Title>
          <Styled.Layer xs={12}><h2>{title}</h2></Styled.Layer>
        </Styled.Title>
        <h5>
          <Styled.Layer container>
            <Styled.Layer item xs={6}>{from}</Styled.Layer>
            <Styled.Layer item xs={6}>{to}</Styled.Layer>
          </Styled.Layer>
        </h5>
      </Styled.Layer>
    </Styled.Layer>

    <Styled.InfoLayer item xs={4}>
      <Styled.Layer container>
        <InfoIcon tooltip="개발 인원(명)" count={6}><FaUserCircle size={30} /></InfoIcon>
        <InfoIcon tooltip="개발 기간(개월)" count={6}><FaCalendarAlt size={30} /></InfoIcon>
      </Styled.Layer>
    </Styled.InfoLayer>

  </Styled.ProjectLayer>
);

ProejctHeader.propTypes = {
  title: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ProejctHeader;
