import * as Styled from './styles';

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
