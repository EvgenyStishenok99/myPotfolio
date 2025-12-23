import './App.css'
import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx"
import {SpaMain} from "./layout/spaMain/SpaMain.tsx";
import {SpaAbout} from "./layout/spaAbout/SpaAbout.tsx";
import {SpaSkills} from "./layout/spaSkills/SpaSkills.tsx";
import {SpaProjects} from "./layout/spaProjects/SpaProjects.tsx";
import {SpaContacts} from "./layout/spaContacts/SpaContacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <AppStyle darkMode={darkMode}>
      <Container>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: "fixed",
            top: '15px',
            right: '1px',
            zIndex: 1000,
            padding: '8px 12px',
            background: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#333',
            border: 'none',
            borderRadius: '40px',
            cursor: 'pointer'
          }}
        >
          {darkMode ? '☀️ ' : '🌙 '}
        </button>

        <Header darkMode={darkMode} /> {/* Передаем darkMode в Header */}
        <SpaMain />
        <SpaAbout />
        <SpaSkills />
        <SpaProjects />
        <SpaContacts />
        <Footer />
      </Container>
    </AppStyle>
  )
}

export default App

const AppStyle = styled.div`
  background-color: ${props => props.darkMode ? '#121212' : 'whitesmoke'};
  color: ${props => props.darkMode ? '#ffffff' : '#333333'};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  transition: background-color 2s, color 2s;
`

const Container = styled.div`
  max-width: 1230px;
  width: 100%;
  padding: 0 15px;
`