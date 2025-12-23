import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

// Добавляем интерфейс для пропсов
interface HeaderProps {
  darkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  return (
    <StyleHeader darkMode={darkMode}>
      <Logo/>
      <Menu/>
    </StyleHeader>
  );
};

// Используем darkMode для изменения фона
const StyleHeader = styled.header<{ darkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: ${props =>
    props.darkMode
      ? 'rgba(18, 18, 18, 0.8)'  // Темный режим с прозрачностью
      : 'rgba(245, 245, 245, 0.8)' // Светлый режим с прозрачностью
  };
  backdrop-filter: blur(10px); // Добавляем размытие для эффекта стекла
  transition: background-color 2s; // Плавный переход

  // Дополнительные стили для темного режима
  color: ${props => props.darkMode ? '#ffffff' : '#333333'};
  box-shadow: ${props =>
    props.darkMode
      ? '0 2px 10px rgba(0, 0, 0, 0.3)'
      : '0 2px 10px rgba(0, 0, 0, 0.1)'
  };
`