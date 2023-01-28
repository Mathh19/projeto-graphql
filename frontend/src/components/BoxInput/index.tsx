import * as Styled from './styles';

type BoxInputProps = {
  typeInput: string;
  nameInput: string;
  nameLabel: string;
  isRequired?: boolean;
};

export const BoxInput = ({
  nameInput,
  typeInput,
  nameLabel,
  isRequired = true,
}: BoxInputProps) => {
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
