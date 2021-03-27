import styled from 'styled-components';

import { Grid } from '@material-ui/core';

const Layer = styled(Grid)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const Img = styled.img`
`;

const Description = styled.h3`
`;

export default {
  Layer,
  Img,
  Description,
};
