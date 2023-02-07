import styled, { css } from 'styled-components';

export const Message = styled.p`
  ${({ theme }) => css`
    margin-top: 12px;
    color: ${theme.colors.warning};
  `}
`;
