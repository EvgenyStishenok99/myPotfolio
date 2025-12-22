import styled from "styled-components";
import {
  GitHubGrey
} from "../../../public/svg for social media /grey/GitHubGrey.tsx";
import {
  TwitterGrey
} from "../../../public/svg for social media /grey/TwitterGrey.tsx";
import {
  LinkedinGrey
} from "../../../public/svg for social media /grey/LinkedinGrey.tsx";


export const SocialMedia = () => {
  const socialItems = [
    {
      href: "https://github.com/EvgenyStishenok99",
      icon: <GitHubGrey />
    },
    {
      href: "https://x.com/elonmusk",
      icon: <TwitterGrey />
    },
    {
      href: "https://habr.com/ru/news/400437/",
      icon: <LinkedinGrey />
    }
  ];
  return (
    <SocialMediaStyles>

      <SocialMediaStyles>
        {socialItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.icon}</a>
          </li>
        ))}
      </SocialMediaStyles>
    </SocialMediaStyles>
  );
};
const SocialMediaStyles = styled.ul`
  display: flex;
  gap:20px; 
  list-style: none;
  
`
