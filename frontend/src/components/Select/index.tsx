import { ArrowDropUp } from '@styled-icons/material';
import { useState, ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

export type OpenListProps = {
  isOpen: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type SelectProps = {
  profiles: {
    id: number;
    name: string;
    label: string;
  }[];
};

export const Select = ({ profiles }: SelectProps) => {
  const [isClosed, setIsClosed] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClosed(!isClosed);
  };

  return (
    <Styled.Box>
      <Styled.OpenList onClick={handleClick} isOpen={isClosed}>
        Perfis
        <ArrowDropUp />
      </Styled.OpenList>
      {!isClosed && (
        <Styled.MenuList isOpen={isClosed}>
          {profiles.length === 0 && (
            <Styled.NoData>Not data avaliable.</Styled.NoData>
          )}
          {profiles.map((profile) => (
            <Styled.MenuItems key={profile.id}>{profile.name}</Styled.MenuItems>
          ))}
        </Styled.MenuList>
      )}
    </Styled.Box>
  );
};
