import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    max-width: 48vw;
    display: flex;
    gap: 10px;
    overflow: hidden;
  `}
`;
