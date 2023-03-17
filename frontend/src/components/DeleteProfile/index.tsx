import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { DELETE_PROFILE } from '../../graphql/mutations';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

export const DeleteProfile = () => {
  const [filterProfile, setFilterProfile] = useState({
    id: '',
    name: '',
  });
  const [deleteProfile, { data }] = useMutation(DELETE_PROFILE, {
    variables: {
      filter: { id: parseInt(filterProfile.id), name: filterProfile.name },
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    deleteProfile();
  };

  return (
    <Section id="delete">
      <Wrapper>
        <Title text="Perfil" />
        <Form onSubmit={handleSubmit}>
          <BoxInput
            nameInput="id"
            typeInput="text"
            nameLabel="Id"
            isRequired={false}
            onChange={handleInputChange}
          />
          <BoxInput
            nameInput="name"
            typeInput="name"
            nameLabel="Nome"
            isRequired={false}
            onChange={handleInputChange}
          />
          <Button warning={true} text="Deletar" />
        </Form>
      </Wrapper>
      <Results>
        {data !== undefined && (
          <>
            <h2>Perfil deletado</h2>
            <h3>Nome</h3>
            <p>{data.deleteProfile.name}</p>
            <h3>Rótulo</h3>
            <p>{data.deleteProfile.label}</p>
          </>
        )}
      </Results>
    </Section>
  );
};
