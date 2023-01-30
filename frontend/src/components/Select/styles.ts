import styled, { css } from 'styled-components';
import { OpenListProps } from '.';
import { Box as BoxInput } from '../BoxInput/styles';

export const Box = styled(BoxInput)`
  ${({ theme }) => css`
    margin-bottom: 20px;
    transition: all ease-in-out 200ms;
    ${MenuList}:focus ~ ${OpenList},
    ${MenuList}:not(:placeholder-shown) ~ ${OpenList},
    ${MenuList}:hover ~ ${OpenList} {
      top: -20px;
      left: 0;
      color: ${theme.colors.secondaryColor};
      font-size: 14px;
    }
  `}
`;

export const MenuList = styled.ul<Pick<OpenListProps, 'isOpen'>>`
  ${({ theme, isOpen }) => css`
    cursor: pointer;
    max-height: 130px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.secondaryColor} transparent;
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 15px;
      background: ${theme.colors.secondaryColor};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.lightSecondaryColor};
    }
    color: ${theme.colors.white};
    list-style: none;
    padding-bottom: 10px;
    border: none;
    border-bottom: 1px solid ${
      isOpen ? `${theme.colors.mediumGray}` : `${theme.colors.secondaryColor}`
    };
    font-size: ${theme.font.sizes.small};
  `}
`;

export const MenuItems = styled.li`
  ${({ theme }) => css`
    background: transparent;
    color: ${theme.colors.white};
    padding: 1rem;
    border-radius: 4px;
    transition: all ease-in-out 200ms;

    :hover {
      color: ${theme.colors.secondaryColor};
      background: ${theme.colors.primaryColor};
    }
  `}
`;

export const OpenList = styled.button<Pick<OpenListProps, 'isOpen'>>`
  ${({ theme, isOpen }) => css`
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    font-size: 16px;
    color: ${
      isOpen ? `${theme.colors.white}` : `${theme.colors.secondaryColor}`
    };
    background-color: transparent;
    border: none;
    border-bottom: ${isOpen ? `1px solid ${theme.colors.mediumGray}` : 'none'};
    transition: all ease-in-out 200ms;

    :hover {
      color: ${theme.colors.secondaryColor};
      border-bottom: ${
        isOpen ? `1px solid ${theme.colors.secondaryColor}` : 'none'
      };

      svg {
        color: ${theme.colors.secondaryColor};
      }
    }

    svg {
      width: 20px;
      height: 20px;
      transform: ${!isOpen && 'rotate(180deg)'};
    }

  `}
`;

export const NoData = styled.div`
  ${({ theme }) => css`
    color: crimson;
    background: ${theme.colors.primaryColor};
    padding: 1rem;
    border-radius: 4px;
  `}
`;
