import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 100%;
  `}
`;

export const ContainerButtons = styled.div`
  ${() => css`
    display: flex;
    gap: 10px;
  `}
`;
