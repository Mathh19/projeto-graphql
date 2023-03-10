import { Title } from '../Title';
import * as Styled from './styles';

type ResultsProps = {
  children: React.ReactNode;
};

export const Results = ({ children }: ResultsProps) => {
  return (
    <Styled.Container>
      <Title text="Resultado" />
      <Styled.ContainerResults>{children}</Styled.ContainerResults>
    </Styled.Container>
  );
};
