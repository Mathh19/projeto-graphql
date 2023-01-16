import { useState } from 'react';
import { Tabs } from '../Tabs';
import * as Styled from './styles';
import { Form } from '../Form';

export const Register = () => {
  const [register, setRegister] = useState(true);
  const tabs = [
    {
      id: '1',
      content: 'Register',
    },
    {
      id: '2',
      content: 'Login',
    },
  ];

  return (
    <Styled.Container>
      <Tabs tabs={tabs} />
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
