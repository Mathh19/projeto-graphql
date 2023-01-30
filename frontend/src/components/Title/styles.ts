import styled, { css } from 'styled-components';

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: normal;
    margin-bottom: ${theme.spacings.medium};
    padding-bottom: 2px;
    border-bottom: 1px solid ${theme.colors.darkGray};
    color: ${theme.colors.secondaryColor};
  `}
`;
