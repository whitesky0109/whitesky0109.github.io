import styled from 'styled-components';

const PostPageMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Sidebar = styled.div`
  width: 90%;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

const Heading = styled.h2`
  font-family: "Raleway";
`;

export default {
  PostPageMain,
  Sidebar,
  Heading,
};
