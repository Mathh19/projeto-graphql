import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import * as Styled from './styles';
import { Button } from '../Button';

export const Logged = () => {
  const authContext = useContext(AuthContext);
  return (
    <Styled.Container>
      <h2>Você está logado com a conta {authContext.loginUser?.name}</h2>
      <Button onClick={authContext.logout} text="Logout" />
    </Styled.Container>
  );
};
