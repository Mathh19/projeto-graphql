import { useMutation } from '@apollo/client';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { LOGIN_USER } from '../../graphql/mutations';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { Form } from '../Form';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

import * as Styled from './styles';

type UserLogin = {
  email: string;
  password: string;
};

export const LoginUser = () => {
  const [user, setUser] = useState<UserLogin>({
    email: '',
    password: '',
  });
  const [loginUser, { error }] = useMutation(LOGIN_USER);
  const authContext = useContext(AuthContext);
  const loggedUser = authContext.loginUser;

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser({ variables: { data: user } })
      .then((result) => {
        authContext.login && authContext.login(result.data);
      })
      .catch((err) => console.log(err.message));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <Section id="login">
      <Wrapper>
        <Title text="Login" />
        <Form onSubmit={handleLoginSubmit}>
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
        {loggedUser && (
          <Styled.ContainerResults>
            <h2>Você acessou a conta</h2>
            <h3>Nome</h3>
            <p>{loggedUser.name}</p>
            <h3>Email</h3>
            <p>{loggedUser.email}</p>
          </Styled.ContainerResults>
        )}
      </Results>
    </Section>
  );
};
