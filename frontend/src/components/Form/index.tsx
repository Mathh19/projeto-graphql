import * as Styled from './styles';

export type FormProps = {
  children: React.ReactNode;
};

export const Form = ({ children }: FormProps) => {
  return <Styled.Form>{children}</Styled.Form>;
};
