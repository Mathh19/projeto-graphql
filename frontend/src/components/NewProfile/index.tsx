import { BoxInput } from '../BoxInput';
import { Form } from '../Form';
import { Title } from '../Title';
import { Button } from '../Button';
import { useMutation } from '@apollo/client';
import { Wrapper } from '../Wrapper';
import { Section } from '../Section';
import { Results } from '../Results';
import { NEW_PROFILE } from '../../graphql/mutations';
import { useState } from 'react';
import { ErrorMessage } from '../ErrorMessage';

type NewProfileProps = {
  newProfile: {
    id: number;
    name: string;
    label: string;
  };
};

export const NewProfile = () => {
  const initialState = {
    name: '',
    label: '',
  };

  const [formState, setFormState] = useState(initialState);

  const [newProfile, { data, error }] = useMutation<NewProfileProps>(
    NEW_PROFILE,
    {
      variables: {
        data: {
          ...formState,
        },
      },
    },
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    newProfile();
  };

  return (
    <Section id="add">
      <Wrapper>
        <Title text="Novo Perfil" />
        <Form onSubmit={handleSubmit}>
          <BoxInput
            nameInput="name"
            typeInput="text"
            nameLabel="Nome"
            onChange={handleInputChange}
          />
          <BoxInput
            nameInput="label"
            typeInput="text"
            nameLabel="Rótulo"
            onChange={handleInputChange}
          />
          <Button text="Novo perfil" onSubmit={() => newProfile()} />
          {error && <ErrorMessage message={error.message} />}
        </Form>
      </Wrapper>
      <Results>
        {data && (
          <>
            <h2>Novo perfil adicionado</h2>
            <h3>ID</h3>
            <p>{data.newProfile.id}</p>
            <h3>Nome</h3>
            <p>{data.newProfile.name}</p>
            <h3>Rótulo</h3>
            <p>{data.newProfile.label}</p>
          </>
        )}
      </Results>
    </Section>
  );
};
