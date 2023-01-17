import { Form } from '../Form';
import { Results } from '../Results';
import { Tabs } from '../Tabs';
import { Title } from '../Title';
import * as Styled from './styles';

export const Authentication = () => {
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
      <Styled.Sessions>
        <Styled.Section>
          <Title text="Registro" />
          <Form stateSession="register" />
        </Styled.Section>
        <Styled.Section>
          <Results />
        </Styled.Section>
      </Styled.Sessions>
    </Styled.Container>
  );
};
