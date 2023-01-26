import { ListUser } from '../../components/ListUser';
import { NewUser } from '../../components/NewUser';
import { Results } from '../../components/Results';
import { SearchUser } from '../../components/SearchUser';
import { Section } from '../../components/Section';
import { Sections } from '../../components/Sections';
import { TabSections } from '../../components/TabsSections';

export const UsersPage = () => {
  const tabs = [
    {
      id: '1',
      content: 'Lista',
      link: '#list',
    },
    {
      id: '2',
      content: 'Consulta',
      link: '#search',
    },
    {
      id: '3',
      content: 'Novo',
      link: '#add',
    },
    {
      id: '4',
      content: 'Alterar',
      link: '#update',
    },
    {
      id: '5',
      content: 'Excluir',
      link: '#delete',
    },
  ];

  return (
    <TabSections tabs={tabs}>
      <Sections>
        <Section id="list">
          <ListUser />
        </Section>
        <Section id="search">
          <SearchUser />
          <Results />
        </Section>
        <Section id="add">
          <NewUser />
          <Results />
        </Section>
      </Sections>
    </TabSections>
  );
};
