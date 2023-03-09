import jwtDecode from 'jwt-decode';
import { useReducer } from 'react';
import { createContext } from 'react';
import { UserInputData } from '../sharedTypes/userInputData';

export type StateProps = {
  loginUser?: {
    id: number;
    exp: number;
  } & UserInputData;
};

type ActionProps = { type: 'LOGIN'; payload: StateProps } | { type: 'LOGOUT' };

export type AuthContextProps = {
  loginUser?: StateProps['loginUser'];
  login?: (user: StateProps) => void;
  logout?: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type DecodeProps = {
  id: number;
  exp: number;
} & UserInputData;

const initialState: StateProps = {
  loginUser: undefined,
};

const token = localStorage.getItem('token');

if (token) {
  const decodedToken = jwtDecode<DecodeProps>(token);

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
  }

  initialState.loginUser = decodedToken;
}

export const AuthContext = createContext<AuthContextProps>({
  loginUser: undefined,
});

const authReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loginUser: action.payload.loginUser,
      };
    case 'LOGOUT':
      return {
        ...state,
        loginUser: undefined,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData: StateProps) => {
    const token = userData.loginUser ? userData.loginUser.token : '';
    localStorage.setItem('token', token);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT',
    });
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ loginUser: state.loginUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
