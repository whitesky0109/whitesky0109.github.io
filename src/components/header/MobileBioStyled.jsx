import styled from 'styled-components';

const MobileBioMain = styled.div`
  background: white;
  display: none;

  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Img = styled.img`
  max-width: 75px;
  max-height: 75px;
  border-radius: 50%;
  box-shadow: 1px 1px 3px;
`;

export default {
  MobileBioMain,
  Img,
};
