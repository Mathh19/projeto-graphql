import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';

export type AuthSessionProps = {
  session: 'register' | 'login';
};

export const AuthSession = ({ session }: AuthSessionProps) => {
  return (
    <Form>
      {session === 'register' && (
        <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
      )}
      <BoxInput nameInput="email" typeInput="email" nameLabel="Email" />
      <BoxInput nameInput="password" typeInput="password" nameLabel="Senha" />
      <Button text="Entrar" />
    </Form>
  );
};
