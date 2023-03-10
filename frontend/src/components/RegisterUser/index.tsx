import { useMutation } from '@apollo/client';
import { useState, useRef } from 'react';
import { REGISTER_USER } from '../../graphql/mutations';
import { Profile } from '../../sharedTypes/componentData';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { Form } from '../Form';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

type User = {
  name: string;
  email: string;
  password: string;
  profiles?: Profile[];
};

export const RegisterUser = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    profiles: undefined,
  });
  const [registerUser, { error }] = useMutation(REGISTER_USER);
  const dataUserRef = useRef<User>();

  const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerUser({ variables: { data: user } })
      .then((result) => (dataUserRef.current = result.data.registerUser))
      .catch((err) => console.log(err.message));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <Section id="register">
      <Wrapper>
        <Title text="Cadastrar" />
        <Form onSubmit={handleRegisterSubmit}>
          <BoxInput
            nameInput="name"
            typeInput="text"
            nameLabel="Nome"
            onChange={handleInputChange}
          />
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
          <Button type="submit" text="Registrar" />
          {error && <ErrorMessage message={error.message} />}
        </Form>
      </Wrapper>
      <Results>
        {dataUserRef.current !== undefined && (
          <>
            <h3>Nome</h3>
            <p>{dataUserRef.current.name}</p>
            <h3>Email</h3>
            <p>{dataUserRef.current.email}</p>
            <h3>Perfis</h3>
            {dataUserRef.current.profiles &&
              dataUserRef.current.profiles.map((profile, index) => (
                <p key={index}>{profile.label}</p>
              ))}
          </>
        )}
      </Results>
    </Section>
  );
};
