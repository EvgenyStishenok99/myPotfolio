import styled from "styled-components";


export const NavigationList18pxForFooter = () => {
  return (
    <NavigationListStyle>
      <li>
        <a href="#SpaMain">Home</a>
      </li>
      <li>
        <a href="#SpaAbout">About</a>
      </li>
      <li>
        <a href="#SpaSkills">Tech Stack</a>
      </li>
      <li>
        <a href="#SpaProjects">Projects</a>
      </li>
      <li>
        <a href="#SpaContacts">Contact</a>
      </li>
    </NavigationListStyle>
  );
};

const NavigationListStyle = styled.ul`
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
    color: #42446e;
  }
`

