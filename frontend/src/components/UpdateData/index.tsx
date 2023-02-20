import { useQuery } from '@apollo/client';
import { GET_PROFILES } from '../../graphql/querys';
import { ComponentData } from '../../sharedTypes/componentData';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';
import { Loading } from '../Loading';
import { MultiSelect } from '../MultiSelect';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

import * as Styled from './styles';

export const UpdateData = ({ userOrProfile }: ComponentData) => {
  const { data, loading } = useQuery(GET_PROFILES);

  if (loading) return <Loading />;

  return (
    <Section id="update">
      <Wrapper>
        <Title
          text={`Filtrar ${userOrProfile === 'user' ? 'Usuário' : 'Perfil'}`}
        />
        {userOrProfile === 'user' ? (
          <Form>
            <BoxInput
              nameInput="id"
              typeInput="text"
              nameLabel="Id"
              isRequired={false}
            />
            <BoxInput
              nameInput="email"
              typeInput="email"
              nameLabel="Email"
              isRequired={false}
            />

            <Title text="Alterar Usuário" />
            <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
            <BoxInput nameInput="email" typeInput="email" nameLabel="Email" />
            <BoxInput
              nameInput="password"
              typeInput="password"
              nameLabel="Senha"
            />
            <MultiSelect profiles={data === undefined ? [] : data.profiles} />
            <Styled.ContainerButton>
              <Button text="Alterar usuário" />
            </Styled.ContainerButton>
          </Form>
        ) : (
          <Form>
            <BoxInput
              nameInput="id"
              typeInput="text"
              nameLabel="Id"
              isRequired={false}
            />
            <BoxInput
              nameInput="name"
              typeInput="name"
              nameLabel="Nome"
              isRequired={false}
            />

            <Title text="Alterar Perfil" />
            <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
            <BoxInput nameInput="label" typeInput="label" nameLabel="Rótulo" />
            <Button text="Alterar perfil" />
          </Form>
        )}
      </Wrapper>
      <Results>
        <h2>test</h2>
      </Results>
    </Section>
  );
};
