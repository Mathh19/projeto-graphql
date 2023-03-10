import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_PROFILES, GET_USERS } from '../../graphql/querys';
import { ComponentData } from '../../sharedTypes/componentData';
import { ErrorMessage } from '../ErrorMessage';
import { Loading } from '../Loading';
import { TableData } from '../TableData';
import * as Styled from './styles';

type ListDataProps = {
  columns: string[];
} & ComponentData;

export const ListData = ({ columns, userOrProfile }: ListDataProps) => {
  const [usersProfiles, setUsersProfiles] = useState();
  const [closeData, setCloseData] = useState(false);
  const { data, loading, error } = useQuery(
    userOrProfile === 'user' ? GET_USERS : GET_PROFILES,
    { fetchPolicy: 'no-cache' },
  );

  if (loading) return <Loading />;

  const handleClick = () => {
    setUsersProfiles(data);
    setCloseData(!closeData);
    if (closeData) {
      setUsersProfiles(undefined);
    }
  };

  return (
    <Styled.Container>
      <Styled.Button onClick={handleClick} disabled={error && true}>
        {closeData
          ? 'X'
          : `Obter ${userOrProfile === 'user' ? 'Usuários' : 'Perfis'}`}
      </Styled.Button>
      {error && <ErrorMessage message={`Error: ${error.message}`} />}
      <TableData
        columns={columns}
        userOrProfile={userOrProfile}
        data={usersProfiles}
      />
    </Styled.Container>
  );
};
