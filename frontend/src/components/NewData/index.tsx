import { BoxInput } from '../BoxInput';
import { Form } from '../Form';
import { MultiSelect } from '../MultiSelect';
import { Title } from '../Title';
import { Button } from '../Button';
import { DataFormComponents } from '../../sharedTypes/dataFormComponents';
import { useQuery } from '@apollo/client';
import { GET_PROFILES } from '../../graphql/querys';

import * as Styled from './styles';
import { Loading } from '../Loading';

export const NewData = ({ userOrProfile }: DataFormComponents) => {
  const { data, loading } = useQuery(GET_PROFILES);

  if (loading) return <Loading />;

  return (
    <Styled.Container>
      <Title text={`Novo ${userOrProfile === 'user' ? 'Usuário' : 'Perfil'}`} />
      {userOrProfile === 'user' ? (
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
            <Button text="Novo usuário" />
          </Styled.ContainerButtons>
        </Form>
      ) : (
        <Form>
          <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
          <BoxInput nameInput="rótulo" typeInput="rótulo" nameLabel="Rótulo" />
          <Button text="Novo perfil" />
        </Form>
      )}
    </Styled.Container>
  );
};
