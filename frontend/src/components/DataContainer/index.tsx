import { ComponentData, Profile, User } from '../../sharedTypes/componentData';
import * as Styled from './styles';

type DataContainerProps = {
  data: {
    users: User[];
    profiles: Profile[];
  };
} & ComponentData;

export const DataContainer = ({ userOrProfile, data }: DataContainerProps) => {
  return (
    <Styled.Container>
      {userOrProfile === 'user'
        ? data.profiles.map((profile, index) => (
            <div key={index}>
              <p>{profile.label}</p>
            </div>
          ))
        : data.users.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          ))}
    </Styled.Container>
  );
};
