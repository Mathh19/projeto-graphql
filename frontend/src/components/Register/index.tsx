import { useState } from 'react';
import { TabLinks } from '../TabLinks';
import { Tab } from '../Tab';
import * as Styled from './styles';
import { Form } from '../Form';

export const Register = () => {
  const [register, setRegister] = useState(true);

  return (
    <Styled.Container>
      <Tab>
        <TabLinks onClick={() => setRegister(true)}>Registrar</TabLinks>
        <TabLinks onClick={() => setRegister(false)}>Login</TabLinks>
      </Tab>
      <div className="sessions">
        <Styled.Section>
          <Styled.Title>{register ? 'Registrar' : 'Login'}</Styled.Title>
          <Form stateSession={register} />
        </Styled.Section>
        <Styled.Section>
          <Styled.Title>Resultado</Styled.Title>
        </Styled.Section>
      </div>
    </Styled.Container>
  );
};
