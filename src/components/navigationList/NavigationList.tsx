import styled from "styled-components";




export const NavigationList = () => {
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
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: #666;
  }
`

