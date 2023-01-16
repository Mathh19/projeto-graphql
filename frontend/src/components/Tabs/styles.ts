import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.huge};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primaryColor};
  `}
`;
