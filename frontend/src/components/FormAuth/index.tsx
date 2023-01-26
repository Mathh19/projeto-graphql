import { BoxForm } from '../BoxForm';
import { Form } from '../Form';
import * as Styled from './styles';

export type FormAuthProps = {
  session: 'register' | 'login';
};

export const FormAuth = ({ session }: FormAuthProps) => {
  return (
    <Form>
      {session === 'register' && (
        <BoxForm nameInput="name" typeInput="text" nameLabel="Nome" />
      )}
      <BoxForm nameInput="email" typeInput="email" nameLabel="Email" />
      <BoxForm nameInput="password" typeInput="password" nameLabel="Senha" />
      <Styled.Button>Logar</Styled.Button>
    </Form>
  );
};
