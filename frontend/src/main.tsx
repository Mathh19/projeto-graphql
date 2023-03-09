import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { AuthPage } from './pages/AuthPage';
import { UsersPage } from './pages/Users';
import { ProfilePage } from './pages/Profiles';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <AuthPage /> },
      { path: '/users', element: <UsersPage /> },
      { path: '/profiles', element: <ProfilePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
          <GlobalStyles />
        </ApolloProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
