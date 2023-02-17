import * as Styled from './styles';

type BoxInputProps = {
  typeInput: string;
  nameInput: string;
  nameLabel: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const BoxInput = ({
  nameInput,
  typeInput,
  nameLabel,
  isRequired = true,
  onChange,
}: BoxInputProps) => {
  return (
    <Styled.Box>
      <Styled.Input
        type={typeInput}
        name={nameInput}
        placeholder={nameLabel}
        required={isRequired}
        onChange={onChange}
      />
      <Styled.Label>{nameLabel}</Styled.Label>
    </Styled.Box>
  );
};
