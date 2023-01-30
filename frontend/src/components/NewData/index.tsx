import { BoxInput } from '../BoxInput';
import { Form } from '../Form';
import { Select } from '../Select';
import { Title } from '../Title';
import { Button } from '../Button';
import { DataFormComponents } from '../../sharedTypes/dataFormComponents';

import * as Styled from './styles';
import mock from './mock';

export const NewData = ({ userOrProfile }: DataFormComponents) => {
  return (
    <Styled.Container>
      <Title text={`Novo ${userOrProfile === 'user' ? 'Usuário' : 'Perfil'}`} />
      {userOrProfile === 'user' ? (
        <Form>
          <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
          <BoxInput nameInput="email" typeInput="email" nameLabel="Email" />
          <BoxInput
            nameInput="password"
            typeInput="password"
            nameLabel="Senha"
          />
          <Select profiles={mock.data.profiles} />
          <Button text="Obter perfis" />
          <Button text="Novo usuário" />
        </Form>
      ) : (
        <Form>
          <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
          <BoxInput nameInput="rótulo" typeInput="rótulo" nameLabel="Rótulo" />
          <Button text="Novo perfil" />
        </Form>
      )}
    </Styled.Container>
  );
};
