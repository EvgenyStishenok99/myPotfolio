import styled from "styled-components";
import {SocialMedia} from "../social media/SocialMedia.tsx";
import {NavigationList} from "../navigationList/NavigationList.tsx";


export const Menu = () => {
  return (
    <MenuStyle>
      <NavigationList/>
      <SocialMedia/>
    </MenuStyle>
  );
};

const MenuStyle =  styled.nav`
  display: flex;
 justify-content: space-between;
`