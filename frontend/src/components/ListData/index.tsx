import { ArrowUpward } from '@styled-icons/material';
import { DataFormComponents } from '../../sharedTypes/dataFormComponents';
import * as Styled from './styles';

type ListDataProps = {
  columns: string[];
} & DataFormComponents;

export const ListData = ({ columns, userOrProfile }: ListDataProps) => {
  return (
    <Styled.Container>
      <Styled.Button>
        Obter {`${userOrProfile === 'user' ? 'Usuários' : 'Perfis'}`}
      </Styled.Button>
      <Styled.Data>
        <button>
          ID
          <ArrowUpward />
        </button>
        <Styled.ContainerColumns>
          {columns.map((column) => (
            <div key={column}>{column}</div>
          ))}
        </Styled.ContainerColumns>
      </Styled.Data>
      <Styled.DataResults>
        <p>Not data avaliable.</p>
      </Styled.DataResults>
    </Styled.Container>
  );
};
