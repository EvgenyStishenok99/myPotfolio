import styled from "styled-components";




export const NavigationList = () => {
 // создать массив данными и сделать это через map
  // noinspection HtmlUnknownAnchorTarget
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
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: #666;
  }
`

