import styled, { css } from 'styled-components';

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.warning};
  `}
`;
