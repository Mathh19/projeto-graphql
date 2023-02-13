import styled, { css } from 'styled-components';
import { ContainerButtons as StyledContainerButtons } from '../NewData/styles';

export const Container = styled.div`
  ${() => css`
    width: 100%;
  `}
`;

export const ContainerButton = styled(StyledContainerButtons)``;
