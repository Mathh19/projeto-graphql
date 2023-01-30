import { DataFormComponents } from '../../sharedTypes/dataFormComponents';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';
import mock from '../NewData/mock';
import { Select } from '../Select';
import { Title } from '../Title';
import * as Styled from './styles';

export const UpdateData = ({ userOrProfile }: DataFormComponents) => {
  return (
    <Styled.Container>
      <Title
        text={`Filtrar ${userOrProfile === 'user' ? 'Usuário' : 'Perfil'}`}
      />
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

        <Title
          text={`Alterar ${userOrProfile === 'user' ? 'Usuário' : 'Perfil'}`}
        />
        <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
        <BoxInput nameInput="email" typeInput="email" nameLabel="Email" />
        <BoxInput nameInput="password" typeInput="password" nameLabel="Senha" />
        <Select profiles={mock.data.profiles} />
        <Button
          text={`Obter ${userOrProfile === 'user' ? 'perfis' : 'usuários'}`}
        />
        <Button
          text={`Alterar ${userOrProfile === 'user' ? 'usuário' : 'perfil'}`}
        />
      </Form>
    </Styled.Container>
  );
};
