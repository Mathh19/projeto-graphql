import styled, { css } from 'styled-components';

export const Section = styled.div`
  ${({ theme }) => css`
    min-width: 100%;
    display: flex;
    gap: 20px;
    padding: 0 ${theme.spacings.xlarge};

    @media ${theme.media.lteMedium} {
      flex-wrap: wrap;
    }
  `}
`;
