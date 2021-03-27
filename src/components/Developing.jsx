import React from 'react';

import img from '../images/developing.svg';

import Styled from './DevelopingStyled';

const Developing = () => (
  <Styled.Layer>
    <Styled.Img src={img} />
    <Styled.Description>
      개발중
    </Styled.Description>
  </Styled.Layer>
);

export default Developing;
