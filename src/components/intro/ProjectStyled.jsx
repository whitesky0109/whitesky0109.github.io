import styled from 'styled-components';

import {
  Grid, Paper, Badge,
} from '@material-ui/core';

const Layer = styled(Grid)`
  width: 100%;
`;

const ProejectRow = styled(Grid)`
  padding: 10px 0;
`;

const Project = styled(Paper)``;

const ProjectLayer = styled(Grid)`
  padding: 10px 20px;
`;

const InfoLayer = styled(Layer)`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  margin: 0;
`;

const Description = styled(Grid)`
  border-top: 1px solid #eee;
  padding: 10px 20px;
`;

const ProjectSkill = styled(Grid)`
  border-top: 1px solid #eee;
  padding: 10px 20px;
`;

const SkillTitle = styled(Grid)`
  display: flex;
  justify-content: flex-start;
`;

const Tags = styled(Grid)``;

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  .MuiGrid-container {
    display: none;
  }

  @media only screen and (max-width: 850px) {
    .MuiGrid-container {
      display: flex;
    }
  }
`;

const IconLayer = styled(Grid)`
  padding: 10px 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-left: solid #eee;
  flex-basis: 100px;

`;

const IconBadge = styled(Badge)`
  right: -3;
  top: 13;
`;

export default {
  Layer,

  ProejectRow,
  Project,
  ProjectLayer,
  InfoLayer,
  Img,
  Title,
  Description,
  IconLayer,
  IconBadge,

  ProjectSkill,
  SkillTitle,
  Tags,
};
