import styled, { css } from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};

    .Select__control {
      background-color: transparent;
      cursor: pointer;
      border: 1px solid ${theme.colors.mediumGray};
    }

    .Select__control:hover {
      border-color: ${theme.colors.secondaryColor};
    }

    .Select__control--is-focused {
      box-shadow: 0 0 0 1px ${theme.colors.secondaryColor};
      outline: none;
    }

    .Select__indicators svg:hover {
      color: ${theme.colors.secondaryColor};
      transition: all 200ms ease-in-out;
    }

    .Select__indicator-separator {
      display: none;
    }

    .Select__menu {
      background: ${theme.colors.primaryColor};
    }

    .Select__menu-list {
      scrollbar-width: thin;

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
    }

    .Select__multi-value {
      background-color: ${theme.colors.lightPrimaryColor};
    }

    .Select__multi-value__label {
      color: ${theme.colors.secondaryColor};
    }

    .Select__multi-value__remove:hover {
      background-color: ${theme.colors.warning};
      transition: all 200ms ease-in-out;

      svg {
        color: ${theme.colors.white};
        transition: all 200ms ease-in-out;
      }
    }

    .Select__option {
      cursor: pointer;
      transition: all 200ms ease-in-out;
    }

    .Select__option--is-focused {
      background-color: ${theme.colors.lightPrimaryColor};
    }

    .Select__option:hover {
      background-color: ${theme.colors.lightPrimaryColor};
    }

    .Select__input-container {
      color: ${theme.colors.white};
    }
  `}
`;
