import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.huge};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primaryColor};

    a {
      position: relative;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      margin: 10px 0;
      font-weight: 600;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    a::after {
      content: '';
      position: absolute;
      width: 0px;
      height: 2px;
      background-color: ${theme.colors.secondaryColor};
      bottom: 0;
      transition: all ease-in-out 200ms;
    }

    a:hover::after {
      width: 100%;
    }

    @media ${theme.media.lteMedium} {
      font-size: 1.4rem;
    }
  `}
`;
