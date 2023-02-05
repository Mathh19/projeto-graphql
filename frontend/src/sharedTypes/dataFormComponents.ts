export type DataFormComponents = {
  userOrProfile: 'user' | 'profile';
};

export type Profile = {
  id: string;
  name: string;
  label: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  profiles: Profile[];
};
