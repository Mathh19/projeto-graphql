import * as Styled from './styles';

type SectionProps = {
  id: string;
  children: React.ReactNode;
};

export const Section = ({ children, id }: SectionProps) => {
  return (
    <Styled.Section id={id}>
      <Styled.Container>{children}</Styled.Container>
    </Styled.Section>
  );
};
