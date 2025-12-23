import styled from "styled-components";
import {LineBottom} from "../../components/lineBottom/LineBottom.tsx";


import {LogoBlack} from "../../components/logo/logoBlack.tsx";
import {
  SocialMediaDarkBlue
} from "../../components/social media/SocialMediaDarkBlue.tsx";
import {
  NavigationList18pxForFooter
} from "../../components/navigationList/NavigationList18pxForFooter.tsx";


export const Footer = () => {
  return (
    <FooterStyles>
      <TopPart>
        <LogoBlack/>
        <RightTopPart>
          <NumberAndMail>+375 33 653 65 07</NumberAndMail>
          <NumberAndMail>samurai.it-incubator.io/ru</NumberAndMail>
          <SocialMediaDarkBlue/>
        </RightTopPart>
      </TopPart>
      <LineBottom/>
      <BottomPart>
        <NavigationList18pxForFooter/>
        <Signature>Designed and
          built by <GradientFill>Evgeny ST</GradientFill> with
          <GradientFill> Love </GradientFill> & <GradientFill> Coffee </GradientFill>
        </Signature>
      </BottomPart>

    </FooterStyles>
  );
};

const FooterStyles = styled.footer`
  margin-top: auto; /* для прижатия к низу */
`
const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 44px;
`
const RightTopPart = styled.div`
  display: flex;
  gap:35px;
`
const NumberAndMail = styled.p`

  font-weight: 400;
  font-size: 18px;
  line-height: 144%;
  color: #42446e;
`
const BottomPart = styled.div`
  display: flex;
  justify-content: space-between;
`
const Signature = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 144%;
  text-align: center;
  color: #666;
`

const GradientFill = styled.mark`
  background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`