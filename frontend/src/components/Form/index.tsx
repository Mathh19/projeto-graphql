import * as Styled from './styles';

type FormProps = {
  stateSession: boolean;
};

export const Form = ({ stateSession }: FormProps) => {
  return (
    <Styled.Form>
      {stateSession && (
        <>
          <Styled.Label>Nome</Styled.Label>
          <Styled.Input type="text" name="name" />
        </>
      )}
      <Styled.Label>Email</Styled.Label>
      <Styled.Input type="email" name="email" />
      <Styled.Label>Senha</Styled.Label>
      <Styled.Input type="password" name="senha" />
      <div className="container-button">
        <Styled.Button>Logar</Styled.Button>
      </div>
    </Styled.Form>
  );
};
