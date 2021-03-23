import styled, { createGlobalStyle } from 'styled-components';

const H4Global = createGlobalStyle`
  font-family: Raleway;
`;

const TechTagButton = styled.button`
  background: black;
  border-radius: 20% 0 0 20%;
  border-color: transparent;
  font-family: Raleway;
  font-size: .85rem;
`;

const Tag = styled.div`
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;

const Svg = styled.svg`
  fill: ${({ color }) => color};
`;

export default {
  H4Global,
  TechTagButton,
  Tag,
  Svg,
};
