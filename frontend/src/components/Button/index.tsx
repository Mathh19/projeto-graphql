import * as Styled from './styles';

type ButtonProps = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text }: ButtonProps) => {
  return <Styled.Button>{text}</Styled.Button>;
};
