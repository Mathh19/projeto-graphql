import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    gap: 20px;
    overflow-x: hidden;
  `}
`;
