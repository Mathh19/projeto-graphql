import { BoxInput } from '../BoxInput';
import { Form } from '../Form';
import { MultiSelect } from '../MultiSelect';
import { Title } from '../Title';
import { Button } from '../Button';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROFILES } from '../../graphql/querys';
import { Wrapper } from '../Wrapper';
import { Loading } from '../Loading';
import { Section } from '../Section';
import { Results } from '../Results';

import * as Styled from './styles';
import { NEW_USER } from '../../graphql/mutations';

export const NewUser = () => {
  const { data, loading } = useQuery(GET_PROFILES);
  const [newUser, { data: userData, error }] = useMutation(NEW_USER, {
    variables: {
      data: {
        email: 'newuser@email.com',
        name: 'New User',
        password: '123',
      },
    },
  });
  console.log(userData);
  console.log(error);

  if (loading) return <Loading />;

  return (
    <Section id="add">
      <Wrapper>
        <Title text="Novo Usuário" />
        <Form>
          <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
          <BoxInput nameInput="email" typeInput="email" nameLabel="Email" />
          <BoxInput
            nameInput="password"
            typeInput="password"
            nameLabel="Senha"
          />
          <MultiSelect profiles={data === undefined ? [] : data.profiles} />
          <Styled.ContainerButtons>
            <Button onClick={() => newUser()} text="Novo usuário" />
          </Styled.ContainerButtons>
        </Form>
      </Wrapper>
      <Results>
        <h2>test</h2>
      </Results>
    </Section>
  );
};
