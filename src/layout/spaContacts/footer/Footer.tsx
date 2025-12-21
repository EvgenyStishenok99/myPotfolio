import styled from "styled-components";
import {LineBottom} from "../../../components/lineBottom/LineBottom.tsx";


import {LogoBlack} from "../../../components/logo/logoBlack.tsx";
import {
  SocialMediaDarkBlue
} from "../../../components/social media/SocialMediaDarkBlue.tsx";
import {
  NavigationList18pxForFooter
} from "../../../components/navigationList/NavigationList18pxForFooter.tsx";


export const Footer = () => {
  return (
    <FooterStyles>
      <div className="topPart">
        <LogoBlack/>
        <div className="rightTopPart">
          <p className="numberAndMail">+375 33 653 65 07</p>
          <p className="numberAndMail">samurai.it-incubator.io/ru</p>
          <SocialMediaDarkBlue/>
        </div>
      </div>
      <LineBottom/>
      <div className="bottomPart">
        <NavigationList18pxForFooter/>
        <p className="signature">Designed and
          built by <mark className="EvgenyST">Evgeny ST</mark> with
          <mark className="Love"> Love </mark> & <mark className="Coffee"> Coffee </mark></p>
      </div>

    </FooterStyles>
  );
};

const FooterStyles = styled.div`
  margin-top: auto; /* для прижатия к низу */
  .topPart{
    display: flex;
    justify-content: space-between;
    margin-bottom: 44px;
  }
  .rightTopPart{
    display: flex;
    gap:35px;
  }
  .numberAndMail{
   
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    color: #42446e;
  }
  .bottomPart{
    display: flex;
    justify-content: space-between;
  }
  .signature{
    
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    text-align: center;
    color: #666;
  }
  .EvgenyST,.Love,.Coffee{
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
`