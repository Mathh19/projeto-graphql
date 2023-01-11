import styled, { css } from 'styled-components';

export const Bar = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: nowrap;
    background-color: ${theme.colors.darkPurple};
    color: ${theme.colors.white};
    font-size: 2rem;
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    text-transform: uppercase;

    & p {
      font-weight: 400;
    }

    & span {
      font-weight: lighter;
    }
  `}
`;
