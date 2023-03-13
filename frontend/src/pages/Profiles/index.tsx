import { ListData } from '../../components/ListData';
import { Section } from '../../components/Section';
import { Sections } from '../../components/Sections';
import { TabSections } from '../../components/TabsSections';
import { UpdateData } from '../../components/UpdateData';
import { DeleteData } from '../../components/DeleteData';
import { FilterProfile } from '../../components/FilterProfile';
import { NewProfile } from '../../components/NewProfile';

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

  const columns = ['nome', 'rótulo'];

  return (
    <TabSections tabs={tabs}>
      <Sections>
        <Section id="list">
          <ListData userOrProfile="profile" columns={columns} />
        </Section>
        <FilterProfile />
        <NewProfile />
        <UpdateData userOrProfile="profile" />
        <DeleteData userOrProfile="profile" />
      </Sections>
    </TabSections>
  );
};
