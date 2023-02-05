import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ContainerLoading = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: ${theme.colors.primaryColor};

    svg {
      width: 100px;
      color: ${theme.colors.secondaryColor};
      animation: ${rotate()} 5s linear infinite;
    }
  `}
`;
