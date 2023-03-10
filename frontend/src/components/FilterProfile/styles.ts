import styled, { css } from 'styled-components';

export const BoxUsers = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightPrimaryColor};
    overflow: auto;

    div {
      padding: 10px;
      border: 1px solid ${theme.colors.darkGray};
    }
  `}
`;
