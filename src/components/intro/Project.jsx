import React from 'react';
import PropTypes from 'prop-types';

import {
  Timeline, TimelineItem,
  TimelineSeparator, TimelineDot,
  TimelineOppositeContent,
  TimelineContent,
  TimelineConnector,
} from '@material-ui/lab';

import {
  FaCode,
} from 'react-icons/fa';

import ProjectRow from './ProjectRow';

import Styled from './ProjectStyled';

/** @type {React.FC} */
const Protject = ({ projects }) => (
  <Styled.Layer>
    <Timeline align="left">
      {projects.map(({
        title, company, skill,
        from, to,
        description,
      }) => (
        <TimelineItem key={title}>
          <TimelineOppositeContent style={{ display: 'none' }} />

          <TimelineSeparator>
            <TimelineDot>
              <FaCode />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <ProjectRow
              title={title}
              company={company}
              skill={skill}
              from={from}
              to={to}
              description={description}
            />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Styled.Layer>
);

Protject.propTypes = {
  projects: PropTypes.arrayOf(Object),
};

Protject.defaultProps = {
  projects: [],
};

export default Protject;
