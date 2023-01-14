import { Bar } from '../../components/Bar';
import { Tab } from '../../components/Tab';
import { TabLinks } from '../../components/TabLinks';
import { Fingerprint } from '@styled-icons/material';
import { Users } from '@styled-icons/heroicons-solid';
import { UserCheck } from '@styled-icons/boxicons-regular/UserCheck';
import { Register } from '../../components/Register';

export const Base = () => {
  return (
    <>
      <Bar />
      <Tab>
        <TabLinks>
          <Fingerprint />
          Autenticação
        </TabLinks>
        <TabLinks>
          <Users />
          Usuários
        </TabLinks>
        <TabLinks>
          <UserCheck />
          Perfis
        </TabLinks>
      </Tab>
      <Register />
    </>
  );
};
