import styled, { css } from 'styled-components';
import { BoxUsers } from '../FilterProfile/styles';

export const ContainerButtons = styled.div`
  ${() => css`
    display: flex;
    gap: 10px;
  `}
`;

export const BoxProfiles = styled(BoxUsers)``;
