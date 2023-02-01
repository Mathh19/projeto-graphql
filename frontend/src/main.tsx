import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<AuthPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/profiles" element={<ProfilePage />} />
            </Route>
          </Routes>
          <GlobalStyles />
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
