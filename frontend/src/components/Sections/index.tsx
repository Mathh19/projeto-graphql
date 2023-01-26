import * as Styled from './styles';

type SectionsProps = {
  children: React.ReactNode;
};

export const Sections = ({ children }: SectionsProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
