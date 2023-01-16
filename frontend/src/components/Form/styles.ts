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

    .box {
      position: relative;

      input:focus ~ label,
      input:valid ~ label {
        top: -20px;
        left: 0;
        color: ${theme.colors.secondaryColor};
        font-size: 14px;
      }
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background-color: transparent;
    color: ${theme.colors.white};
    padding: 10px 0px;
    margin-bottom: 20px;
    outline: none;
    border: none;
    border-bottom: 1px solid ${theme.colors.mediumGray};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: ${theme.colors.white};
    pointer-events: none;
    transition: .5s;
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
