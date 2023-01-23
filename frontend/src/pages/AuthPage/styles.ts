import styled, { css } from 'styled-components';
export const Container = styled.div``;

export const Sections = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 10px;

    @media ${theme.media.lteMedium} {
      flex-wrap: wrap;
    }
  `}
`;

export const Section = styled.section`
  ${() => css`
    width: 100%;
  `}
`;

export const SectionForm = styled.div``;
