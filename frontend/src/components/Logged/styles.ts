import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.secondaryColor};
    padding: ${theme.spacings.xsmall};
  `}
`;
