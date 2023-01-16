import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 10px 0;
    border: none;
    font-weight: bold;
    color: ${theme.colors.secondaryColor};
    background: none;

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.4rem;
      background-color: ${theme.colors.secondaryColor};
    }

    :disabled::after {
      left: 0;
      width: 100%;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  `}
`;
