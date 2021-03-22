import styled from 'styled-components';

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export default {
  SocialLinks,
};
