import * as Styled from './styles';

export type FormProps = {
  children: React.ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ children, onSubmit }: FormProps) => {
  return <Styled.Form onSubmit={onSubmit}>{children}</Styled.Form>;
};
