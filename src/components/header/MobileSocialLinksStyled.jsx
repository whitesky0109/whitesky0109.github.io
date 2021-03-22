import styled from 'styled-components';

const BottomBar = styled.div`
  width: 100%;
  background: black;
  display: none;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 850px) {display: flex;}
`;

export default {
  BottomBar,
};
