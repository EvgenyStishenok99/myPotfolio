import styled from "styled-components";


export const NavigationList18pxForFooter = () => {
  const navItems = [
    { href: "#SpaMain", text: "Home" },
    { href: "#SpaAbout", text: "About" },
    { href: "#SpaSkills", text: "Tech Stack" },
    { href: "#SpaProjects", text: "Projects" },
    { href: "#SpaContacts", text: "Contact" }
  ];
  return (

    <NavigationListStyle>
      {navItems.map((item) => (
        <li key={item.href}>
          <a href={item.href}>{item.text}</a>
        </li>
      ))}
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

