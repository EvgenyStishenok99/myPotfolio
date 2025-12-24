import styled from "styled-components";

import React from "react";

interface NavigationList18pxForFooterProps {
  darkMode: boolean;
}
export const NavigationList18pxForFooter: React.FC<NavigationList18pxForFooterProps> = ({ darkMode }) => {
  const navItems = [
    { href: "#SpaMain", text: "Home" },
    { href: "#SpaAbout", text: "About" },
    { href: "#SpaSkills", text: "Tech Stack" },
    { href: "#SpaProjects", text: "Projects" },
    { href: "#SpaContacts", text: "Contact" }
  ];
  return (

    <NavigationListStyle darkMode={darkMode} >
      {navItems.map((item) => (
        <li key={item.href}>
          <a href={item.href}>{item.text}</a>
        </li>
      ))}
    </NavigationListStyle>
  );
};

const NavigationListStyle = styled.ul<{ darkMode: boolean }>`
  align-items: center;
  display: flex;
  gap:66px;
  list-style: none;
  
  a{
    text-decoration: none;
    font-family: "DM Sans", sans-serif;
    
    text-align: center;
    

    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    color: ${props =>
    props.darkMode
      ? '#a7a7a7'  
      : '#42446e' 
  };
  }
`

