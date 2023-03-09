import { UserCheck } from '@styled-icons/boxicons-regular/UserCheck';
import { Users } from '@styled-icons/heroicons-solid';
import { Fingerprint } from '@styled-icons/material';
import { Outlet } from 'react-router-dom';
import { Bar } from './components/Bar';
import { Navbar } from './components/Navbar';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { Logged } from './components/Logged';

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
  const context = useContext(AuthContext);
  return (
    <div className="App">
      <Bar />
      {context.loginUser && <Logged />}
      <Navbar tabs={mainTabs} />
      <Outlet />
    </div>
  );
}

export default App;
