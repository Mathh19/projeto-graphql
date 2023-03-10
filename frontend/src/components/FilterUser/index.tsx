import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_USER } from '../../graphql/querys';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';
import { User } from '../../sharedTypes/componentData';
import { ErrorMessage } from '../ErrorMessage';

import * as Styled from './styles';

type DataFilterProps = {
  user: User;
};

export const FilterUser = () => {
  const [filterUser, setFilterUser] = useState({
    id: '',
    email: '',
  });
  const [loadData, { data, error }] = useLazyQuery<DataFilterProps>(GET_USER, {
    variables: {
      filter: { id: parseInt(filterUser.id), email: filterUser.email },
    },
    fetchPolicy: 'no-cache',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <Section id="search">
      <Wrapper>
        <Title text="Consultar usuário" />
        <BoxInput
          nameInput="id"
          typeInput="text"
          nameLabel="ID"
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
        <Button text="Consultar" onClick={() => loadData()} />
        {error && <ErrorMessage message={error.message} />}
      </Wrapper>
      <Results>
        {data?.user && (
          <>
            <h2>Resultdo da busca por usuário</h2>
            <h3>Email</h3>
            <p>{data?.user.email}</p>
            <h3>Nome</h3>
            <p>{data?.user.name}</p>
            <h3>Perfis</h3>
            {data?.user.profiles.map((profile) => (
              <Styled.BoxProfiles key={profile.id}>
                <div>
                  <p>{profile.label}</p>
                </div>
              </Styled.BoxProfiles>
            ))}
          </>
        )}
      </Results>
    </Section>
  );
};
