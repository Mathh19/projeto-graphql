import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_PROFILES, GET_USERS } from '../../graphql/querys';
import { DataFormComponents } from '../../sharedTypes/dataFormComponents';
import { ErrorMessage } from '../ErrorMessage';
import { Loading } from '../Loading';
import { TableData } from '../TableData';
import * as Styled from './styles';

type ListDataProps = {
  columns: string[];
} & DataFormComponents;

export const ListData = ({ columns, userOrProfile }: ListDataProps) => {
  const [usersProfiles, setUsersProfiles] = useState();
  const { data, loading, error } = useQuery(
    userOrProfile === 'user' ? GET_USERS : GET_PROFILES,
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={`Error : ${error.message}`} />;

  const handleClick = () => {
    setUsersProfiles(data);
  };

  return (
    <Styled.Container>
      <Styled.Button onClick={handleClick}>
        Obter {`${userOrProfile === 'user' ? 'Usuários' : 'Perfis'}`}
      </Styled.Button>
      <TableData
        columns={columns}
        userOrProfile={userOrProfile}
        data={usersProfiles}
      />
    </Styled.Container>
  );
};
