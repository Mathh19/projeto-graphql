import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  ${({ theme }) => css`
      cursor: pointer;
      background-color: ${theme.colors.secondaryColor};
      color: ${theme.colors.white};
      border: none;
      border-radius: 4px;
      font-size: 1.4rem;
      text-transform: uppercase;
      padding: 10px 20px;

      :hover {
        background-color: ${theme.colors.lightSecondaryColor};
      }
  `}
`;

export const Users = styled.div`
  ${({ theme }) => css`
      display: flex;
      margin-top: 3rem;
      background: ${theme.colors.lightPrimaryColor};
      border-bottom: 1px solid ${theme.colors.mediumGray};

      button {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;
        color: ${theme.colors.secondaryColor};
        background: none;
        border: none;
        font-size: 1.4rem;
        font-weight: bold;
        padding: 10px;

        svg {
          width: 15px;
          height: 16px;
        }
      }
  `}
 `;

export const ContainerColumns = styled.div`
  ${({ theme }) => css`
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: ${theme.colors.secondaryColor};
  `}
`;

export const DataResults = styled.div`
  ${({ theme }) => css`
      display: flex;
      justify-content: center;
      padding: 8px;
      color: ${theme.colors.white};
      background: ${theme.colors.lightPrimaryColor};
  `}
`;
