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


export const SocialMediaDarkBlue = () => {
  const socialItems = [
    {
      href: "https://github.com/EvgenyStishenok99",
      icon: <GitHubDarkBlue/>
    },
    {
      href: "https://x.com/elonmusk",
      icon: <TwitterDarkBlue/>
    },
    {
      href: "https://habr.com/ru/news/400437/",
      icon: <LinkedinDarkBlue/>
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