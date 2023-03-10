import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContainerResults = styled.div`
  ${({ theme }) => css`
    max-height: 400px;
    overflow: auto;
    color: ${theme.colors.secondaryColor};
    ::-webkit-scrollbar {
        width: 6px;
      }

    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.lightPrimaryColor};
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: ${theme.colors.lightSecondaryColor};
    }

    h3 {
      margin-bottom: 3px;
    }

    p {
      color: ${theme.colors.white};
    }
  `}
`;
