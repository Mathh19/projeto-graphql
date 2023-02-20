import { useMutation } from '@apollo/client';
import { useState, useRef } from 'react';
import { REGISTER_USER } from '../../graphql/mutations';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { Form } from '../Form';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

type UserLogin = {
  email: string;
  password: string;
};

export const LoginUser = () => {
  const [user, setUser] = useState<UserLogin>({
    email: '',
    password: '',
  });
  const [registerUser, { error }] = useMutation(REGISTER_USER);
  const dataRef = useRef({ email: '', password: '' });

  const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerUser({ variables: { data: user } }).catch((err) =>
      console.log(err.message),
    );
    dataRef.current = user;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <Section id="login">
      <Wrapper>
        <Title text="Login" />
        <Form onSubmit={handleRegisterSubmit}>
          <BoxInput
            nameInput="email"
            typeInput="email"
            nameLabel="Email"
            onChange={handleInputChange}
          />
          <BoxInput
            nameInput="password"
            typeInput="password"
            nameLabel="Senha"
            onChange={handleInputChange}
          />
          <Button type="submit" text="Entrar" />
          {error && <ErrorMessage message={error.message} />}
        </Form>
      </Wrapper>
      <Results>
        <h1>test</h1>
      </Results>
    </Section>
  );
};
