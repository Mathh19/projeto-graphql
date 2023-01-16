import * as Styled from './styles';

export type TabLinkProps = {
  id: string;
  content: string;
  svg?: React.ReactElement;
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const TabLinks = ({
  content,
  svg,
  disabled,
  id,
  onClick,
}: TabLinkProps) => {
  return (
    <Styled.Button disabled={disabled} id={id} onClick={onClick}>
      {svg}
      {content}
    </Styled.Button>
  );
};
