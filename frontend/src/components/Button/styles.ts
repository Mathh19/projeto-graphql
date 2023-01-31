import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const Button = styled.button<Pick<ButtonProps, 'warning'>>`
  ${({ theme, warning }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    font-weight: bold;
    padding: 1rem 0;
    width: 10rem;
    border: 2px solid ${!warning ? theme.colors.secondaryColor : 'crimson'};
    border-radius: 5px;
    background-color: ${!warning ? theme.colors.secondaryColor : 'crimson'};
    transition: .5s;
    margin-bottom: 15px;

    :hover {
      color: ${!warning ? theme.colors.secondaryColor : 'crimson'};;
      background-color: transparent;
    }
  `}
`;
