import styled, { css } from 'styled-components';

export const ContainerResults = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};

    h3 {
      margin-bottom: 3px;
    }

    p {
      color: ${theme.colors.white};
    }
  `}
`;
