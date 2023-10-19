import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Home/home';
import { defaultTheme } from './Themes/default-theme';
import { ThemeProvider } from 'styled-components';
import PageLayout from './Components/PageLayout/pageLayout';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Homepage /> } />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
