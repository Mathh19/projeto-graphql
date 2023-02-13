import { Profile } from '../../sharedTypes/dataFormComponents';
import * as Styled from './styles';

type SelectProps = {
  profiles: Profile[];
};

export const MultiSelect = ({ profiles }: SelectProps) => {
  return (
    <Styled.CustomSelect
      isMulti
      classNamePrefix={'Select'}
      options={profiles.map((profile) => ({
        value: profile.id,
        label: profile.label,
      }))}
      placeholder="Perfis..."
    />
  );
};
