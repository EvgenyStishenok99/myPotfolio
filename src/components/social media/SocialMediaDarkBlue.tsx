import styled from "styled-components";
import {
  GitHubDarkBlue
} from "../../../public/svg for social media /darkBlue/GitHubDarkBlue.tsx";
import {
  TwitterDarkBlue
} from "../../../public/svg for social media /darkBlue/TwitterDarkBlue.tsx";
import {
  LinkedinDarkBlue
} from "../../../public/svg for social media /darkBlue/LinkedinDarkBlue.tsx";

import React from "react";

interface SocialMediaDarkBlueProps {
  darkMode: boolean;
}
export const SocialMediaDarkBlue: React.FC<SocialMediaDarkBlueProps> = ({ darkMode }) => {
  const socialItems = [
    {
      href: "https://github.com/EvgenyStishenok99",
      icon: <GitHubDarkBlue darkMode={darkMode}/>
    },
    {
      href: "https://x.com/elonmusk",
      icon: <TwitterDarkBlue darkMode={darkMode}/>
    },
    {
      href: "https://habr.com/ru/news/400437/",
      icon: <LinkedinDarkBlue darkMode={darkMode}/>
    }
  ];
  return (
    <SocialMediaStyles>
      {socialItems.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.icon}</a>
        </li>
      ))}
    </SocialMediaStyles>
  );
};
const SocialMediaStyles = styled.ul`
  display: flex;
  gap:20px; 
  list-style: none;
  
`