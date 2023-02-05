import { ArrowUpward } from '@styled-icons/material';
import {
  DataFormComponents,
  Profile,
  User,
} from '../../sharedTypes/dataFormComponents';
import * as Styled from './styles';

type TableDataProps = {
  data: {
    users: User[];
    profiles: Profile[];
  };
  columns: string[];
} & DataFormComponents;

export const TableData = ({ columns, userOrProfile, data }: TableDataProps) => {
  return (
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
      {userOrProfile === 'user' ? (
        <Styled.TBody>
          {data.users.map((user) => (
            <Styled.TR key={user.id}>
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
      ) : (
        <Styled.TBody>
          {data.profiles.map((profile) => (
            <Styled.TR key={profile.id}>
              <Styled.TD>{profile.id}</Styled.TD>
              <Styled.TdData>{profile.name}</Styled.TdData>
              <Styled.TdData>{profile.label}</Styled.TdData>
            </Styled.TR>
          ))}
        </Styled.TBody>
      )}
    </Styled.TableContainer>
  );
};
