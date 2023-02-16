import { Profile } from '../../sharedTypes/componentData';
import * as Styled from './styles';

type SelectProps = {
  profiles: Profile[];
};

export const MultiSelect = ({ profiles }: SelectProps) => {
  return (
    <Styled.CustomSelect
      captureMenuScroll={false}
      maxMenuHeight={100}
      menuPosition="fixed"
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
