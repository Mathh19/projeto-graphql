import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { UPDATE_PROFILE } from '../../graphql/mutations';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { DataContainer } from '../DataContainer';
import { Form } from '../Form';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

type FormStateProps = {
  name?: string;
  label?: string;
};

type FilterProps = {
  id?: string;
  name?: string;
};

export const UpdateProfile = () => {
  const [filter, setFilterProfile] = useState<FilterProps>();
  const [formState, setFormState] = useState<FormStateProps>();
  const filterID = filter?.id !== undefined ? parseInt(filter?.id) : undefined;
  const [updateProfile, { data }] = useMutation(UPDATE_PROFILE, {
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
    updateProfile();
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
    setFilterProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Section id="update">
      <Wrapper>
        <Title text="Perfil" />
        <Form onSubmit={handleSubmit}>
          <BoxInput
            nameInput="id"
            typeInput="text"
            nameLabel="Id"
            isRequired={false}
            onChange={handleFilterChange}
          />
          <BoxInput
            nameInput="name"
            typeInput="text"
            nameLabel="Nome"
            isRequired={false}
            onChange={handleFilterChange}
          />
          <Title text="Alterar Perfil" />
          <BoxInput
            nameInput="name"
            typeInput="text"
            nameLabel="Nome"
            isRequired={false}
            onChange={handleUpdateChange}
          />
          <BoxInput
            nameInput="label"
            typeInput="text"
            nameLabel="Rótulo"
            isRequired={false}
            onChange={handleUpdateChange}
          />
          <Button text="Alterar perfil" />
        </Form>
      </Wrapper>
      <Results>
        {data && (
          <>
            <h2>Perfil atualizado</h2>
            <h3>Nome</h3>
            <p>{data.updateProfile.name}</p>
            <h3>Rótulo</h3>
            <p>{data.updateProfile.label}</p>
            {data.updateProfile.users.length === 0 ? (
              <h2>Sem usuários relacionado com esse perfil</h2>
            ) : (
              <>
                <h3>Usuários relacionado com esse perfil</h3>
                <DataContainer
                  userOrProfile="profile"
                  data={data.updateProfile}
                />
              </>
            )}
          </>
        )}
      </Results>
    </Section>
  );
};
