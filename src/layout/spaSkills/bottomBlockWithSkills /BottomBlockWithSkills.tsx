import styled from "styled-components";
import {HtmlSvg} from "./svg for BottomBlockWithSkills/HtmlSVG.tsx";
import {CssSvg} from "./svg for BottomBlockWithSkills/CSSSVG.tsx";
import {JsSvg} from "./svg for BottomBlockWithSkills/JSSVG.tsx";
import {ReactSvg} from "./svg for BottomBlockWithSkills/ReactSvg.tsx";
import {VetorSvg} from "./svg for BottomBlockWithSkills/VetorSvg.tsx";
import {BootStrapSvg} from "./svg for BottomBlockWithSkills/BootStrapSvg.tsx";
import {TailWindSvg} from "./svg for BottomBlockWithSkills/TailWindSvg.tsx";
import {SassSvg} from "./svg for BottomBlockWithSkills/SassSvg.tsx";
import {GitSvg} from "./svg for BottomBlockWithSkills/GitSvg.tsx";
import {GreensockSvg} from "./svg for BottomBlockWithSkills/GreensockSvg.tsx";
import {VscodeSvg} from "./svg for BottomBlockWithSkills/VscodeSvg.tsx";
import {GitHubSvg} from "./svg for BottomBlockWithSkills/GitHubSvg.tsx";

// создать svg компоненты
export const BottomBlockWithSkills = () => {
  return (
    <BottomBlockWithSkillsStyles>
      <HtmlSvg/>
      <CssSvg/>
      <JsSvg/>
      <ReactSvg/>
      <VetorSvg/>
      <BootStrapSvg/>
      <TailWindSvg/>
      <SassSvg/>
      <GitSvg/>
      <GreensockSvg/>
      <VscodeSvg/>
      <GitHubSvg/>
    </BottomBlockWithSkillsStyles>
  );
};

const BottomBlockWithSkillsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 колонок */
  grid-template-rows: auto auto; /* 2 строки */
  gap: 105px;
`
