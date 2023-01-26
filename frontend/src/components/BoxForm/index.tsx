import * as Styled from './styles';

type BoxFormProps = {
  typeInput: string;
  nameInput: string;
  nameLabel: string;
};

export const BoxForm = ({ nameInput, typeInput, nameLabel }: BoxFormProps) => {
  return (
    <Styled.Box>
      <Styled.Input type={typeInput} name={nameInput} required />
      <Styled.Label>{nameLabel}</Styled.Label>
    </Styled.Box>
  );
};
