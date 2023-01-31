import { DataFormComponents } from '../../sharedTypes/dataFormComponents';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';
import { Title } from '../Title';
import * as Styled from './styles';

export const DeleteData = ({ userOrProfile }: DataFormComponents) => {
  return (
    <Styled.Container>
      <Title
        text={`Deletar ${userOrProfile === 'user' ? 'Usuário' : 'Perfil'}`}
      />
      {userOrProfile === 'user' ? (
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
          <Button warning={true} text="Deletar" />
        </Form>
      ) : (
        <Form>
          <BoxInput
            nameInput="id"
            typeInput="text"
            nameLabel="Id"
            isRequired={false}
          />
          <BoxInput
            nameInput="name"
            typeInput="name"
            nameLabel="Nome"
            isRequired={false}
          />
          <Button warning={true} text="Deletar" />
        </Form>
      )}
    </Styled.Container>
  );
};
