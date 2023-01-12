import * as Styled from './styles';

type TabProps = {
  children: React.ReactNode;
};

export const Tab = ({ children }: TabProps) => {
  return <Styled.Nav>{children}</Styled.Nav>;
};
