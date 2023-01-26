import { ArrowUpward } from '@styled-icons/material';
import * as Styled from './styles';

export const ListUser = () => {
  return (
    <Styled.Container>
      <Styled.Button>Obter Usuários</Styled.Button>
      <Styled.Users>
        <button>
          ID
          <ArrowUpward />
        </button>
        <Styled.ContainerColumns>
          <p>Nome</p>
          <p>Email</p>
          <p>Perfis</p>
        </Styled.ContainerColumns>
      </Styled.Users>
      <Styled.DataResults>
        <p>Not data avaliable.</p>
      </Styled.DataResults>
    </Styled.Container>
  );
};
