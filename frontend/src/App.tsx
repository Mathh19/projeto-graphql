import { UserCheck } from '@styled-icons/boxicons-regular/UserCheck';
import { Users } from '@styled-icons/heroicons-solid';
import { Fingerprint } from '@styled-icons/material';
import { Outlet } from 'react-router-dom';
import { Bar } from './components/Bar';
import { Navbar } from './components/Navbar';

const mainTabs = [
  {
    id: '1',
    svg: <Fingerprint />,
    content: 'Autenticação',
    link: '/',
  },
  {
    id: '2',
    svg: <Users />,
    content: 'Usuários',
    link: 'users',
  },
  {
    id: '3',
    svg: <UserCheck />,
    content: 'Perfis',
    link: '/profiles',
  },
];

function App() {
  return (
    <div className="App">
      <Bar />
      <Navbar tabs={mainTabs} />
      <Outlet />
    </div>
  );
}

export default App;
