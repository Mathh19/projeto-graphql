import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { DELETE_USER } from '../../graphql/mutations';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

export const DeleteUser = () => {
  const [filterUser, setFilterUser] = useState({
    id: '',
    email: '',
  });
  const [deleteUser, { data }] = useMutation(DELETE_USER, {
    variables: {
      filter: { id: parseInt(filterUser.id), email: filterUser.email },
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    deleteUser();
  };

  return (
    <Section id="delete">
      <Wrapper>
        <Title text="Usuário" />
        <Form onSubmit={handleSubmit}>
          <BoxInput
            nameInput="id"
            typeInput="text"
            nameLabel="Id"
            isRequired={false}
            onChange={handleInputChange}
          />
          <BoxInput
            nameInput="email"
            typeInput="email"
            nameLabel="Email"
            isRequired={false}
            onChange={handleInputChange}
          />
          <Button warning={true} text="Deletar" onClick={() => deleteUser()} />
        </Form>
      </Wrapper>
      <Results>
        {data !== undefined && (
          <>
            <h2>Usuário deletado</h2>
            <h3>Nome</h3>
            <p>{data.deleteUser.name}</p>
            <h3>Email</h3>
            <p>{data.deleteUser.email}</p>
          </>
        )}
      </Results>
    </Section>
  );
};
