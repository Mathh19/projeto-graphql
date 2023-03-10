export type ComponentData = {
  userOrProfile: 'user' | 'profile';
};

export type Profile = {
  id: string | number;
  name: string;
  label: string;
  users: User[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  profiles: Profile[];
};
