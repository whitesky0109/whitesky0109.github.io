import styled, { createGlobalStyle } from 'styled-components';

export const H4GlobalStyled = createGlobalStyle`
  font-family: "Raleway";
`;

export const TechTagButtonStyled = styled.button`
  background: black;
  border-radius: 20% 0 0 20%;
  border-color: transparent;
  font-family: "Raleway";
  font-size: .85rem;
`;

export const TagStyled = styled.div`
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;

export const SvgStyled = styled.svg`
  fill: ${({ color }) => color};
`;
