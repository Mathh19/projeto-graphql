import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { UPDATE_USER } from '../../graphql/mutations';
import { GET_PROFILES } from '../../graphql/querys';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { DataContainer } from '../DataContainer';
import { Form } from '../Form';
import { MultiSelect } from '../MultiSelect';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

import * as Styled from './styles';

type FormStateProps = {
  email?: string;
  name?: string;
  password?: string;
  profiles?: {
    id?: number;
    name?: string;
  }[];
};

type FilterProps = {
  id?: string;
  email?: string;
};

export type OptionsProps = {
  value: number;
  label: string;
};

export const UpdateUser = () => {
  const { data } = useQuery(GET_PROFILES);
  const [filter, setFilterUser] = useState<FilterProps>();
  const [formState, setFormState] = useState<FormStateProps>();
  const filterID = filter?.id !== undefined ? parseInt(filter?.id) : undefined;
  const [updateUser, { data: updatedUser }] = useMutation(UPDATE_USER, {
    variables: {
      filter: {
        ...filter,
        id: filterID,
      },
      data: {
        ...formState,
      },
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUser();
  };

  const handleMultiSelectChange = (options: readonly OptionsProps[]) => {
    if (options) {
      setFormState((prevState) => ({
        ...prevState,
        profiles: options.map((option: OptionsProps) => ({
          id: option.value,
        })),
      }));
    }
  };

  const handleUpdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Section id="update">
      <Wrapper>
        <Title text="Usuário" />
        <Form onSubmit={handleSubmit}>
          <BoxInput
            nameInput="id"
            typeInput="text"
            nameLabel="Id"
            isRequired={false}
            onChange={handleFilterChange}
          />
          <BoxInput
            nameInput="email"
            typeInput="email"
            nameLabel="Email"
            isRequired={false}
            onChange={handleFilterChange}
          />

          <Title text="Alterar Usuário" />
          <BoxInput
            nameInput="name"
            typeInput="text"
            nameLabel="Nome"
            isRequired={false}
            onChange={handleUpdateChange}
          />
          <BoxInput
            nameInput="email"
            typeInput="email"
            nameLabel="Email"
            isRequired={false}
            onChange={handleUpdateChange}
          />
          <BoxInput
            nameInput="password"
            typeInput="password"
            nameLabel="Senha"
            isRequired={false}
            onChange={handleUpdateChange}
          />
          <MultiSelect
            profiles={data === undefined ? [] : data.profiles}
            onChange={handleMultiSelectChange}
          />
          <Styled.ContainerButton>
            <Button text="Alterar usuário" />
          </Styled.ContainerButton>
        </Form>
      </Wrapper>
      <Results>
        {updatedUser !== undefined && (
          <>
            <h2>Usuário atualizado</h2>
            <h3>Nome</h3>
            <p>{updatedUser.updateUser.name}</p>
            <h3>Email</h3>
            <p>{updatedUser.updateUser.email}</p>
            <h3>Perfis</h3>
            <DataContainer userOrProfile="user" data={updatedUser.updateUser} />
          </>
        )}
      </Results>
    </Section>
  );
};
