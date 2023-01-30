import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { AuthPage } from './pages/AuthPage';
import App from './App';
import { UsersPage } from './pages/Users';
import { ProfilePage } from './pages/Profiles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  </React.StrictMode>,
);
