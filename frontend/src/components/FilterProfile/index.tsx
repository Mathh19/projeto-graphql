import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_PROFILE } from '../../graphql/querys';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { DataContainer } from '../DataContainer';
import { ErrorMessage } from '../ErrorMessage';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

export const FilterProfile = () => {
  const [filterProfile, setFilterProfile] = useState({
    id: '',
    name: '',
  });
  const [loadData, { data, error }] = useLazyQuery(GET_PROFILE, {
    variables: {
      filter: { id: parseInt(filterProfile.id), name: filterProfile.name },
    },
    fetchPolicy: 'no-cache',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  return (
    <Section id="search">
      <Wrapper>
        <Title text="Consultar perfil" />
        <BoxInput
          nameInput="id"
          typeInput="text"
          nameLabel="Id"
          isRequired={false}
          onChange={handleInputChange}
        />
        <BoxInput
          nameInput="name"
          typeInput="text"
          nameLabel="Nome"
          isRequired={false}
          onChange={handleInputChange}
        />
        <Button text="Consultar" onClick={() => loadData()} />
        {error && <ErrorMessage message={error.message} />}
      </Wrapper>
      <Results>
        {data?.profile && (
          <>
            <h2>Resultdo da busca por usuário</h2>
            <h3>Nome</h3>
            <p>{data.profile.label}</p>
            <h3>Usuários</h3>
            {data.profile.users.length === 0 ? (
              <h2>Sem usuários para esse perfil</h2>
            ) : (
              <DataContainer userOrProfile="profile" data={data.profile} />
            )}
          </>
        )}
      </Results>
    </Section>
  );
};
