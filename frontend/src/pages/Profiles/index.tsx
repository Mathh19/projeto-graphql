import { ListData } from '../../components/ListData';
import { Section } from '../../components/Section';
import { Sections } from '../../components/Sections';
import { TabSections } from '../../components/TabsSections';
import { FilterProfile } from '../../components/FilterProfile';
import { NewProfile } from '../../components/NewProfile';
import { UpdateProfile } from '../../components/UpdateProfile';
import { DeleteProfile } from '../../components/DeleteProfile';

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
        <UpdateProfile />
        <DeleteProfile />
      </Sections>
    </TabSections>
  );
};
