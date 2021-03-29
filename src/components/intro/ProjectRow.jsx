import React from 'react';
import PropTypes from 'prop-types';

import ProjectSkill from './ProjectSkill';

import Styled from './ProjectStyled';
import ProjectHeader from './ProjectHeader';

/** @type {React.FC} */
const ProjectRow = ({
  title, skill, description, from, to,
}) => (
  <Styled.ProejectRow key={title}>
    <Styled.Project about={title}>
      <ProjectHeader title={title} from={from} to={to} />
      {description.length > 0 && (
        <Styled.Description>
          <Styled.Layer>
            <small> Description</small>
          </Styled.Layer>
          {description.map((desc, i) => {
            const key = i;
            return (<div key={key}>{desc}</div>);
          })}
        </Styled.Description>
      )}
      {skill.length > 0 && <ProjectSkill skill={skill} />}
    </Styled.Project>
  </Styled.ProejectRow>
);

ProjectRow.propTypes = {
  title: PropTypes.string,
  skill: PropTypes.arrayOf(PropTypes.string),
  from: PropTypes.string,
  to: PropTypes.string,
  description: PropTypes.arrayOf(Object),
};

ProjectRow.defaultProps = {
  title: 'Untitled',
  skill: [],
  from: '1900-01-01',
  to: '1900-01-01',
  description: [],
};

export default ProjectRow;
