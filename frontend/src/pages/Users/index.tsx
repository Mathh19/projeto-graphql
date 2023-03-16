import { ListData } from '../../components/ListData';
import { NewUser } from '../../components/NewUser';
import { FilterUser } from '../../components/FilterUser';
import { Section } from '../../components/Section';
import { Sections } from '../../components/Sections';
import { TabSections } from '../../components/TabsSections';
import { UpdateUser } from '../../components/UpdateUser';
import { DeleteUser } from '../../components/DeleteUser';

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
        <NewUser />
        <UpdateUser />
        <DeleteUser />
      </Sections>
    </TabSections>
  );
};
