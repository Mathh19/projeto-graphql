import * as Styled from './styles';

export type ButtonProps = {
  text: string;
  warning?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, warning = false }: ButtonProps) => {
  return <Styled.Button warning={warning}>{text}</Styled.Button>;
};
