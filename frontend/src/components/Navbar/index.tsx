import { Link } from 'react-router-dom';
import { TabsProps } from '../Tabs';
import * as Styled from './styles';

type NavbarProps = TabsProps;

export const Navbar = ({ tabs }: NavbarProps) => {
  return (
    <Styled.Nav>
      {tabs.map((tab) => (
        <Link key={tab.id} to={tab.link}>
          {tab.svg}
          {tab.content}
        </Link>
      ))}
    </Styled.Nav>
  );
};
