import { Profile } from '../../sharedTypes/componentData';
import { OptionsProps } from '../NewUser';
import * as Styled from './styles';

type SelectProps = {
  profiles: Profile[];
  onChange: (option: readonly OptionsProps[]) => void;
};

export const MultiSelect = ({ profiles, onChange }: SelectProps) => {
  return (
    <Styled.CustomSelect
      captureMenuScroll={false}
      maxMenuHeight={100}
      menuPosition="fixed"
      isMulti
      onChange={onChange}
      classNamePrefix={'Select'}
      options={profiles.map((profile) => ({
        value: profile.id,
        label: profile.label,
      }))}
      placeholder="Perfis..."
    />
  );
};
