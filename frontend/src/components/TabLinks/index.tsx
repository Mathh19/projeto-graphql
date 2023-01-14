import * as Styled from './styles';

type TabLinkProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const TabLinks = ({ children, onClick }: TabLinkProps) => {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
};
