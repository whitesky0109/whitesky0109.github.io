import React from 'react';
import PropTypes from 'prop-types';

import {
  Chip,
} from '@material-ui/core';

import {
  FaAngular,
  FaReact,
  FaCss3,
} from 'react-icons/fa';

import Styled from './ProjectStyled';

export const SKILL_ICON = Object.freeze({
  Angular: <FaAngular />,
  React: <FaReact />,
  CSS: <FaCss3 />,
});

/** @type {React.FC} */
const ProjectSkill = ({ skill, onClick }) => (
  <Styled.ProjectSkill container direction="column">
    <Styled.SkillTitle item>
      <small>used Skill</small>
    </Styled.SkillTitle>
    <Styled.Tags container>
      {skill.map((name) => (
        <Chip key={name} label={name} icon={SKILL_ICON[name]} variant="outlined" onClick={onClick(name)} />
      ))}
    </Styled.Tags>
  </Styled.ProjectSkill>
);

ProjectSkill.propTypes = {
  skill: PropTypes.arrayOf(Object),
  onClick: PropTypes.func,
};

ProjectSkill.defaultProps = {
  skill: [],
  onClick: () => () => { },
};

export default ProjectSkill;
