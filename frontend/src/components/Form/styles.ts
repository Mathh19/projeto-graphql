import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.medium};
    color: ${theme.colors.secondaryColor};
  `}
`;
