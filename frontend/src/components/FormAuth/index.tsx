import { BoxInput } from '../BoxInput';
import { Form } from '../Form';
import * as Styled from './styles';

export type FormAuthProps = {
  session: 'register' | 'login';
};

export const FormAuth = ({ session }: FormAuthProps) => {
  return (
    <Form>
      {session === 'register' && (
        <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
      )}
      <BoxInput nameInput="email" typeInput="email" nameLabel="Email" />
      <BoxInput nameInput="password" typeInput="password" nameLabel="Senha" />
      <Styled.Button>Logar</Styled.Button>
    </Form>
  );
};
