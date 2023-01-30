import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    font-weight: bold;
    padding: 1rem 0;
    width: 10rem;
    border: 2px solid ${theme.colors.secondaryColor};
    border-radius: 5px;
    background-color: ${theme.colors.secondaryColor};
    transition: .5s;
    margin-bottom: 15px;

    :hover {
      color: ${theme.colors.secondaryColor};
      background-color: transparent;
    }
  `}
`;
