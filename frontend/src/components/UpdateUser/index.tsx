import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';
import mock from '../NewUser/mock';
import { Select } from '../Select';
import { Title } from '../Title';
import * as Styled from './styles';

export const UpdateUser = () => {
  return (
    <Styled.Container>
      <Title text="Filtrar usuário" />
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

        <Title text="Alterar Usuário" />
        <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
        <BoxInput nameInput="email" typeInput="email" nameLabel="Email" />
        <BoxInput nameInput="password" typeInput="password" nameLabel="Senha" />
        <Select profiles={mock.data.profiles} />
        <Button text="Obter Perfis" />
        <Button text="Novo Usuário" />
      </Form>
    </Styled.Container>
  );
};
