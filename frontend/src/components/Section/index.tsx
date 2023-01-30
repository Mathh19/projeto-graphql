import * as Styled from './styles';

type SectionProps = {
  id: string;
  children: React.ReactNode;
};

export const Section = ({ children, id }: SectionProps) => {
  return <Styled.Section id={id}>{children}</Styled.Section>;
};
