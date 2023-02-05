import { useQuery } from '@apollo/client';
import { GET_PROFILES, GET_USERS } from '../../graphql/querys';
import { DataFormComponents } from '../../sharedTypes/dataFormComponents';
import { Loading } from '../Loading';
import { TableData } from '../TableData';
import * as Styled from './styles';

type ListDataProps = {
  columns: string[];
} & DataFormComponents;

export const ListData = ({ columns, userOrProfile }: ListDataProps) => {
  const { data, loading, error } = useQuery(
    userOrProfile === 'user' ? GET_USERS : GET_PROFILES,
  );

  if (loading) return <Loading />;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Styled.Container>
      <Styled.Button>
        Obter {`${userOrProfile === 'user' ? 'Usuários' : 'Perfis'}`}
      </Styled.Button>
      <TableData columns={columns} userOrProfile={userOrProfile} data={data} />
    </Styled.Container>
  );
};
