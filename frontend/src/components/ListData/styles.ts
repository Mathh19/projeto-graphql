import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
    border: none;
    border-radius: 4px;
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 10px 20px;

    :not([disabled]):hover {
      background-color: ${theme.colors.lightSecondaryColor};
    }

    :disabled {
      cursor: not-allowed;
      filter: brightness(60%);
    }
  `}
`;
