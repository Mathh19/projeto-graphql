import styled, { css } from 'styled-components';
import { Nav as NavStyles } from '../Tab/styles';
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

      :focus {
        font-weight: 700;
      }
    }

    .sessions {
      display: flex;
      justify-content: space-around;
      gap: 20px;
      padding: 0 ${theme.spacings.large};

      @media ${theme.media.lteMedium} {
        flex-wrap: wrap;
      }
    }

  `}
`;

export const Session = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.medium};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: normal;
    padding-bottom: 2px;
    border-bottom: 1px solid ${theme.colors.darkGray};
    color: ${theme.colors.secondaryColor};
  `}
`;
