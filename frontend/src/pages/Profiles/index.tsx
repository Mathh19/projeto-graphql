import { ListData } from '../../components/ListData';
import { NewData } from '../../components/NewData';
import { Results } from '../../components/Results';
import { FilterData } from '../../components/FilterData';
import { Section } from '../../components/Section';
import { Sections } from '../../components/Sections';
import { TabSections } from '../../components/TabsSections';
import { UpdateData } from '../../components/UpdateData';
import { DeleteData } from '../../components/DeleteData';

export const ProfilePage = () => {
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
          <ListData userOrProfile="profile" />
        </Section>
        <Section id="search">
          <FilterData userOrProfile="profile" />
          <Results />
        </Section>
        <Section id="add">
          <NewData userOrProfile="profile" />
          <Results />
        </Section>
        <Section id="update">
          <UpdateData userOrProfile="profile" />
          <Results />
        </Section>
        <Section id="delete">
          <DeleteData userOrProfile="profile" />
          <Results />
        </Section>
      </Sections>
    </TabSections>
  );
};
