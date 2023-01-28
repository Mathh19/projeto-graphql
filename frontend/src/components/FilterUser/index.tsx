import { BoxInput } from '../BoxInput';
import { Form } from '../Form';
import { Title } from '../Title';
import * as Styled from './styles';

export const FilterUser = () => {
  return (
    <Styled.Container>
      <Title text="Consultar usuário" />
      <Form>
        <BoxInput
          nameInput="id"
          typeInput="text"
          nameLabel="Id"
          isRequired={false}
        />
        <BoxInput
          nameInput="email"
          typeInput="email"
          nameLabel="Email"
          isRequired={false}
        />
        <Styled.Button>Consultar</Styled.Button>
      </Form>
    </Styled.Container>
  );
};
