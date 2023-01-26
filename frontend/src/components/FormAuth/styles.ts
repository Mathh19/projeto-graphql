import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.medium};
    color: ${theme.colors.secondaryColor};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    font-weight: bold;
    padding: 1rem 0;
    width: 8rem;
    border: 2px solid ${theme.colors.secondaryColor};
    border-radius: 5px;
    background-color: ${theme.colors.secondaryColor};
    transition: .5s;

    :hover {
      color: ${theme.colors.secondaryColor};
      background-color: transparent;
    }
  `}
`;
