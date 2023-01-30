import { Tabs, TabsProps } from '../Tabs';
import * as Styled from './styles';

type TabSessionProps = TabsProps & {
  children: React.ReactNode;
};

export const TabSections = ({ tabs, children }: TabSessionProps) => {
  return (
    <Styled.Container>
      <Tabs tabs={tabs} />
      {children}
    </Styled.Container>
  );
};
