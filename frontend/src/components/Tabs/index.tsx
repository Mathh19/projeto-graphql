import React, { useState } from 'react';
import { TabLinks } from '../TabLinks';
import * as Styled from './styles';

type TabsProps = {
  tabs: {
    id: string;
    content: string;
    svg?: React.ReactElement;
  }[];
};

export const Tabs = ({ tabs }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState('1');

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(e.currentTarget.id);
  };

  return (
    <Styled.Nav>
      {tabs.map((tab) => (
        <TabLinks
          key={tab.id}
          id={tab.id}
          content={tab.content}
          svg={tab.svg}
          disabled={currentTab === `${tab.id}`}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleTabClick(e)
          }
        />
      ))}
    </Styled.Nav>
  );
};
