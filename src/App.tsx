import './App.css'
import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx"
import {SpaMain} from "./layout/spaMain/SpaMain.tsx";
import {SpaAbout} from "./layout/spaAbout/SpaAbout.tsx";
import {SpaSkills} from "./layout/spaSkills/SpaSkills.tsx";
import {SpaProjects} from "./layout/spaProjects/SpaProjects.tsx";
import {SpaContacts} from "./layout/spaContacts/SpaContacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

import  { useState, useEffect } from 'react';

// Интерфейс для пропсов AppStyle
interface AppStyleProps {
  darkMode: boolean;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Применяем класс к body для глобальной темы
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
            // background: darkMode ? 'linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%)' : 'linear-gradient(90deg,#e70faa,  2.6%, #13b0f5, 100%)',
            color: darkMode ? '#ffffff' : '#333',
            border: 'none',
            borderRadius: '40px',
            cursor: 'pointer'
          }}
        >
          {darkMode ? '☀️ ' : '🌙 '}
        </button>

        <Header darkMode={darkMode} />
        <SpaMain darkMode={darkMode}/>
        <SpaAbout darkMode={darkMode}/>
        <SpaSkills darkMode={darkMode}/>
        <SpaProjects darkMode={darkMode}/>
        <SpaContacts />
        <Footer />
      </Container>
    </AppStyle>
  )
}

export default App

// Явно указываем тип для styled компонента
const AppStyle = styled.div<AppStyleProps>`
  background-color: ${props => props.darkMode ? '#121212' : '#ffffff'};
 
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
  button{
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
  }
  
`