import * as Styled from './styles';

type ContainerSectionsProps = {
  children: React.ReactNode;
};

export const ContainerSections = ({ children }: ContainerSectionsProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
