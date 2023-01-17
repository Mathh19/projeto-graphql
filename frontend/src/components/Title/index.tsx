import * as Styled from './styles';

type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  return <Styled.Title>{text}</Styled.Title>;
};
