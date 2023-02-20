import { LoginUser } from '../../components/LoginUser';
import { RegisterUser } from '../../components/RegisterUser';
import { Sections } from '../../components/Sections';
import { TabSections } from '../../components/TabsSections';

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
        <RegisterUser />
        <LoginUser />
      </Sections>
    </TabSections>
  );
};
