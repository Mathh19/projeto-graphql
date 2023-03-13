import { BoxInput } from '../BoxInput';
import { Form } from '../Form';
import { Title } from '../Title';
import { Button } from '../Button';
import { useMutation } from '@apollo/client';
import { Wrapper } from '../Wrapper';
import { Section } from '../Section';
import { Results } from '../Results';

import { NEW_USER } from '../../graphql/mutations';

export const NewProfile = () => {
  const [newProfile, { data: userData, error }] = useMutation(NEW_USER, {
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

  return (
    <Section id="add">
      <Wrapper>
        <Title text="Novo Perfil" />
        <Form>
          <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
          <BoxInput nameInput="rótulo" typeInput="rótulo" nameLabel="Rótulo" />
          <Button text="Novo perfil" onSubmit={() => newProfile()} />
        </Form>
      </Wrapper>
      <Results>
        <h2>test</h2>
      </Results>
    </Section>
  );
};
