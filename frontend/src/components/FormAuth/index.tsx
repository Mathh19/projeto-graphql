import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';

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
      <Button text="Entrar" />
    </Form>
  );
};
