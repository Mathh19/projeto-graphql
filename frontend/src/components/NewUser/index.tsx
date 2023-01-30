import { BoxInput } from '../BoxInput';
import { Form } from '../Form';
import { Select } from '../Select';
import { Title } from '../Title';
import * as Styled from './styles';

import mock from './mock';
import { Button } from '../Button';

export const NewUser = () => {
  return (
    <Styled.Container>
      <Title text="Novo Usuário" />
      <Form>
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
