import styled, { css } from 'styled-components';
import { Button } from '../Button/styles';

export const Container = styled.div`
  ${() => css`
    width: 100%;

    ${Button} {
      background: crimson;
      border: 2px solid crimson;

      :hover {
        background: transparent;
        color: crimson;
      }
    }
  `}
`;
