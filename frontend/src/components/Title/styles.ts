import styled, { css } from 'styled-components';

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: normal;
    padding-bottom: 2px;
    border-bottom: 1px solid ${theme.colors.darkGray};
    color: ${theme.colors.secondaryColor};
  `}
`;
