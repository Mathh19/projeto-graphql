import styled, { css } from 'styled-components';
import { Tab as TabStyles } from '../Tabs/styles';
import { Button as ButtonStyles } from '../Tabs/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    padding: 0 20px;
    ${TabStyles} {
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

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} ${theme.spacings.xlarge};
  `}
`;
