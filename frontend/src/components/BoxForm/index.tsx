import * as Styled from './styles';

type BoxFormProps = {
  typeInput: string;
  nameInput: string;
  nameLabel: string;
  isRequired?: boolean;
};

export const BoxForm = ({
  nameInput,
  typeInput,
  nameLabel,
  isRequired = true,
}: BoxFormProps) => {
  return (
    <Styled.Box>
      <Styled.Input
        type={typeInput}
        name={nameInput}
        placeholder={nameLabel}
        required={isRequired}
      />
      <Styled.Label>{nameLabel}</Styled.Label>
    </Styled.Box>
  );
};
