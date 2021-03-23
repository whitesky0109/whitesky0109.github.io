import styled from 'styled-components';
import { Link as GLink } from 'gatsby';

const HeaderMain = styled.header`
  width: 100%;
  position: sticky;
  z-index: 1;
  top: 0;
  display: flex;
  flex-direction: column;

  background: black;
`;

const HeaderElements = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0;
  padding: .75rem;
`;

const HeadLogo = styled.h1`
  font-family: Raleway;
  font-size: 1.75rem;
  margin: 0;
`;

const Link = styled(GLink)`
  color: white;
  text-decoration: none;

  :hover {
    color: white;
    text-decoration: none;
  }
`;

export default {
  HeaderMain,
  HeaderElements,
  HeadLogo,
  Link,
};
