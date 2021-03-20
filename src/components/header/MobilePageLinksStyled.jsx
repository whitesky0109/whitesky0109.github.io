import styled from 'styled-components';

const MobilePagesMain = styled.div`
  width: 100%;
  background: white;
  display: none;

  @media only screen and (max-width: 850px) {
    display: block;
  }
`;

export default {
  MobilePagesMain,
};
