import styled, { css } from 'styled-components';

export const Box = styled.div`
  ${({ theme }) => css`
    position: relative;

    input:focus ~ label,
    input:valid ~ label {
      top: -20px;
      left: 0;
      color: ${theme.colors.secondaryColor};
      font-size: 14px;
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

    :focus,
    :valid {
      border-bottom: 1px solid ${theme.colors.secondaryColor};
    }
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
