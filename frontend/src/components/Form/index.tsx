import * as Styled from './styles';

export type FormProps = {
  stateSession: 'register' | 'login';
};

export const Form = ({ stateSession }: FormProps) => {
  return (
    <Styled.Form>
      <div className="box">
        {stateSession === 'register' && (
          <>
            <Styled.Input type="text" name="name" required />
            <Styled.Label>Nome</Styled.Label>
          </>
        )}
      </div>
      <div className="box">
        <Styled.Input type="email" name="email" required />
        <Styled.Label>Email</Styled.Label>
      </div>
      <div className="box">
        <Styled.Input type="password" name="senha" required />
        <Styled.Label>Senha</Styled.Label>
      </div>
      <div className="container-button">
        <Styled.Button>Logar</Styled.Button>
      </div>
    </Styled.Form>
  );
};
