import * as Styled from './styles';

type TabLinkProps = {
  children: React.ReactNode;
};

export const TabLinks = ({ children }: TabLinkProps) => {
  return <Styled.Button>{children}</Styled.Button>;
};
