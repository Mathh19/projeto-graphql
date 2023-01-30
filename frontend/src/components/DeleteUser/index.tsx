import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';
import { Title } from '../Title';
import * as Styled from './styles';

export const DeleteUser = () => {
  return (
    <Styled.Container>
      <Title text="Deletar usuário" />
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
        <Button text="Deletar" />
      </Form>
    </Styled.Container>
  );
};
