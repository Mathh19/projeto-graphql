import { ListData } from '../../components/ListData';
import { NewData } from '../../components/NewData';
import { FilterUser } from '../../components/FilterUser';
import { Section } from '../../components/Section';
import { Sections } from '../../components/Sections';
import { TabSections } from '../../components/TabsSections';
import { UpdateData } from '../../components/UpdateData';
import { DeleteData } from '../../components/DeleteData';

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

  const columns = ['nome', 'email', 'perfis'];

  return (
    <TabSections tabs={tabs}>
      <Sections>
        <Section id="list">
          <ListData userOrProfile="user" columns={columns} />
        </Section>
        <FilterUser />
        <NewData userOrProfile="user" />
        <UpdateData userOrProfile="user" />
        <DeleteData userOrProfile="user" />
      </Sections>
    </TabSections>
  );
};
