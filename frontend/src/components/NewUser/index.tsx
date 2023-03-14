import { useState } from 'react';
import { BoxInput } from '../BoxInput';
import { Form } from '../Form';
import { MultiSelect } from '../MultiSelect';
import { Title } from '../Title';
import { Button } from '../Button';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROFILES } from '../../graphql/querys';
import { Wrapper } from '../Wrapper';
import { Section } from '../Section';
import { Results } from '../Results';
import { NEW_USER } from '../../graphql/mutations';

import * as Styled from './styles';
import { Profile } from '../../sharedTypes/componentData';
import { ErrorMessage } from '../ErrorMessage';

type FormStateProps = {
  email: string;
  name: string;
  password: string;
  profiles?: {
    name: string;
  }[];
};

export type OptionsProps = {
  value: number;
  label: string;
};

export const NewUser = () => {
  const initialState: FormStateProps = {
    email: '',
    name: '',
    password: '',
    profiles: undefined,
  };

  const [formState, setFormState] = useState<FormStateProps>(initialState);

  const { data } = useQuery(GET_PROFILES);
  const [newUser, { data: userData, error }] = useMutation(NEW_USER, {
    variables: {
      data: {
        ...formState,
      },
    },
  });

  const handleMultiSelectChange = (options: readonly OptionsProps[]) => {
    if (options) {
      setFormState((prevState) => ({
        ...prevState,
        profiles: options.map((option: OptionsProps) => ({
          name: option.label,
        })),
      }));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    newUser();
  };

  return (
    <Section id="add">
      <Wrapper>
        <Title text="Novo Usuário" />
        <Form onSubmit={handleSubmit}>
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
          <MultiSelect
            profiles={data === undefined ? [] : data.profiles}
            onChange={handleMultiSelectChange}
          />
          <Styled.ContainerButtons>
            <Button text="Novo usuário" />
          </Styled.ContainerButtons>
          {error && <ErrorMessage message={error.message} />}
        </Form>
      </Wrapper>
      <Results>
        <h2>Novo usuário adicionado</h2>
        {userData !== undefined && (
          <>
            <h3>Nome</h3>
            <p>{userData.newUser.name}</p>
            <h3>Email</h3>
            <p>{userData.newUser.email}</p>
            <h3>Perfis</h3>
            {userData.newUser.profiles.map(
              (profile: Profile, index: number) => (
                <Styled.BoxProfiles key={index}>
                  <div>
                    <p>{profile.label}</p>
                  </div>
                </Styled.BoxProfiles>
              ),
            )}
          </>
        )}
      </Results>
    </Section>
  );
};
