import * as Styled from './styles';

export type ButtonProps = {
  text: string;
  warning?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, warning = false, onClick }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick} warning={warning}>
      {text}
    </Styled.Button>
  );
};
