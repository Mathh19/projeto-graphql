import { UserCheck } from '@styled-icons/boxicons-regular/UserCheck';
import { Users } from '@styled-icons/heroicons-solid';
import { Fingerprint } from '@styled-icons/material';
import { Outlet } from 'react-router-dom';
import { Bar } from './components/Bar';
import { Tabs } from './components/Tabs';

const mainTabs = [
  {
    id: '1',
    svg: <Fingerprint />,
    content: 'Autenticação',
    session: '/',
  },
  {
    id: '2',
    svg: <Users />,
    content: 'Usuários',
    session: '/',
  },
  {
    id: '3',
    svg: <UserCheck />,
    content: 'Perfis',
    session: '/',
  },
];

function App() {
  return (
    <div className="App">
      <Bar />
      <Tabs tabs={mainTabs} />
      <Outlet />
    </div>
  );
}

export default App;
