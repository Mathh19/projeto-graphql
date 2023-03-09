import { Profile } from './componentData';

export type UserInputData = {
  name: string;
  email: string;
  password: string;
  token: string;
  profiles?: Profile[];
};
