import React, { useState } from 'react';
import * as Styled from './styles';

export type TabsProps = {
  tabs: {
    id: string;
    content: string;
    svg?: React.ReactElement;
    session: string;
  }[];
};

export const Tabs = ({ tabs }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState('1');

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(e.currentTarget.id);
  };

  return (
    <Styled.Tab>
      {tabs.map((tab) => (
        <a key={tab.id} href={tab.session}>
          <Styled.Button
            disabled={currentTab === tab.id}
            id={tab.id}
            onClick={handleTabClick}
          >
            {tab.svg}
            {tab.content}
          </Styled.Button>
        </a>
      ))}
    </Styled.Tab>
  );
};
