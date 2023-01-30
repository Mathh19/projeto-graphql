import { ArrowUpward } from '@styled-icons/material';
import { DataFormComponents } from '../../sharedTypes/dataFormComponents';
import * as Styled from './styles';

export const ListData = ({ userOrProfile }: DataFormComponents) => {
  return (
    <Styled.Container>
      <Styled.Button>
        Obter {`${userOrProfile === 'user' ? 'Usuários' : 'Perfis'}`}
      </Styled.Button>
      <Styled.Users>
        <button>
          ID
          <ArrowUpward />
        </button>
        <Styled.ContainerColumns>
          <p>Nome</p>
          <p>Email</p>
          <p>{userOrProfile === 'user' ? 'Perfis' : 'Usuários'}</p>
        </Styled.ContainerColumns>
      </Styled.Users>
      <Styled.DataResults>
        <p>Not data avaliable.</p>
      </Styled.DataResults>
    </Styled.Container>
  );
};
