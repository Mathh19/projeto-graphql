import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: ${theme.spacings.medium};
    color: ${theme.colors.secondaryColor};

    .container-button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  `}
`;

export const Label = styled.label`

`;

export const Input = styled.input``;

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    padding: 1rem 0;
    width: 8rem;
    border: none;
    border-radius: 5px;
    background-color: ${theme.colors.secondaryColor};
  `}
`;
