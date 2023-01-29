import styled, { css } from 'styled-components';

export const Section = styled.div`
  ${() => css`
    min-width: 100%;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
      width: 100%;
      display: flex;
      gap: 20px;

      @media ${theme.media.lteMedium} {
        flex-wrap: wrap;
      }
  `}
`;
