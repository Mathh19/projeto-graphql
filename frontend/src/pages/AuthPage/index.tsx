import { AuthSession } from '../../components/AuthSession';
import { Results } from '../../components/Results';
import { Section } from '../../components/Section';
import { Sections } from '../../components/Sections';
import { TabSections } from '../../components/TabsSections';
import { Title } from '../../components/Title';
import * as Styled from './styles';

export const AuthPage = () => {
  const tabs = [
    {
      id: '1',
      content: 'Cadastrar',
      link: '#register',
    },
    {
      id: '2',
      content: 'Login',
      link: '#login',
    },
  ];

  return (
    <TabSections tabs={tabs}>
      <Sections>
        <Section id="register">
          <Styled.Wrapper>
            <Title text="Cadastrar" />
            <AuthSession session="register" />
          </Styled.Wrapper>
          <Results />
        </Section>
        <Section id="login">
          <Styled.Wrapper>
            <Title text="Login" />
            <AuthSession session="login" />
          </Styled.Wrapper>
          <Results />
        </Section>
      </Sections>
    </TabSections>
  );
};
