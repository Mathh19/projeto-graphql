import { Bar } from '../../components/Bar';
import { Tabs } from '../../components/Tabs';
import { Fingerprint } from '@styled-icons/material';
import { Users } from '@styled-icons/heroicons-solid';
import { UserCheck } from '@styled-icons/boxicons-regular/UserCheck';
import { Register } from '../../components/Register';

export const Base = () => {
  const tabs = [
    {
      id: '1',
      svg: <Fingerprint />,
      content: 'Autenticação',
    },
    {
      id: '2',
      svg: <Users />,
      content: 'Usuários',
    },
    {
      id: '3',
      svg: <UserCheck />,
      content: 'Perfis',
    },
  ];

  return (
    <>
      <Bar />
      <Tabs tabs={tabs} />
      <Register />
    </>
  );
};
