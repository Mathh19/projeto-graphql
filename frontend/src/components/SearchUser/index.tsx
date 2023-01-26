import { BoxForm } from '../BoxForm';
import { Form } from '../Form';
import { Title } from '../Title';
import * as Styled from './styles';

export const SearchUser = () => {
  return (
    <Styled.Container>
      <Title text="Consultar usuário" />
      <Form>
        <BoxForm nameInput="id" typeInput="text" nameLabel="Id" />
        <BoxForm nameInput="email" typeInput="email" nameLabel="Email" />
        <Styled.Button>Consultar</Styled.Button>
      </Form>
    </Styled.Container>
  );
};
