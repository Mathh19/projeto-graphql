import { ContainerSections } from '../../components/ContainerSections';
import { Form } from '../../components/Form';
import { TabSections } from '../../components/TabsSections';
import { Title } from '../../components/Title';
import * as Styled from './styles';

export const AuthPage = () => {
  const tabs = [
    {
      id: '1',
      content: 'Cadastrar',
      session: '#register',
    },
    {
      id: '2',
      content: 'Login',
      session: '#login',
    },
  ];

  return (
    <Styled.Container>
      <TabSections tabs={tabs}>
        <Styled.Sections>
          <Styled.Section>
            <ContainerSections>
              <Styled.SectionForm id="register">
                <Title text="Cadastrar" />
                <Form session="register" />
              </Styled.SectionForm>
              <Styled.SectionForm id="login">
                <Title text="Login" />
                <Form session="login" />
              </Styled.SectionForm>
            </ContainerSections>
          </Styled.Section>
          <Styled.Section>
            <Title text="Results" />
          </Styled.Section>
        </Styled.Sections>
      </TabSections>
    </Styled.Container>
  );
};
