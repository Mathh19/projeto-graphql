import styled, { css } from 'styled-components';
import { Nav as NavStyles } from '../Tabs/styles';
import { Button as ButtonStyles } from '../TabLinks/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    padding: 0 20px;
    ${NavStyles} {
      display: flex;
      justify-content: flex-start;
      padding: 0 10px;
      border-radius: 5px;
      gap: ${theme.spacings.small};
      background-color: ${theme.colors.lightPrimaryColor};
    }

    ${ButtonStyles} {
      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: normal;

      :disabled {
        font-weight: 700;
      }
    }
  `}
`;

export const Sessions = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    padding: 0 ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      flex-wrap: wrap;
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.medium};
  `}
`;
