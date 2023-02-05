import { useQuery } from '@apollo/client';
import { ArrowUpward } from '@styled-icons/material';
import { GET_USERS } from '../../graphql/querys';
import { DataFormComponents } from '../../sharedTypes/dataFormComponents';
import * as Styled from './styles';

type ListDataProps = {
  columns: string[];
} & DataFormComponents;

export const ListData = ({ columns, userOrProfile }: ListDataProps) => {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Styled.Container>
      <Styled.Button>
        Obter {`${userOrProfile === 'user' ? 'Usuários' : 'Perfis'}`}
      </Styled.Button>
      <Styled.TableContainer>
        <Styled.THead>
          <tr>
            <Styled.TH>
              <button>
                ID
                <ArrowUpward />
              </button>
            </Styled.TH>
            {columns.map((column) => (
              <Styled.TH key={column}>{column}</Styled.TH>
            ))}
          </tr>
        </Styled.THead>
        <Styled.TBody>
          {data.users.map((user, index) => (
            <Styled.TR key={index}>
              <Styled.TD>{user.id}</Styled.TD>
              <Styled.TdData>{user.name}</Styled.TdData>
              <Styled.TdData>{user.email}</Styled.TdData>
              <Styled.TdData>
                {user.profiles.map((profile) => (
                  <span key={profile.id}>{profile.name}</span>
                ))}
              </Styled.TdData>
            </Styled.TR>
          ))}
        </Styled.TBody>
      </Styled.TableContainer>
    </Styled.Container>
  );
};
