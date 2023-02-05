import styled, { css } from 'styled-components';

export const TableContainer = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: collapse;
    border-radius: 5px;
    margin-top: 30px;
    background-color: ${theme.colors.lightPrimaryColor};
    color: ${theme.colors.secondaryColor};

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

export const THead = styled.thead`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.mediumGray};
  `}
`;

export const TH = styled.th`
  text-align: center;
`;

export const TBody = styled.tbody``;

export const TR = styled.tr``;

export const TD = styled.td`
  padding: 10px;
`;

export const TdData = styled(TD)`
  text-align: center;

  span {
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span ~ span::before {
    content: ', ';
  }
`;
