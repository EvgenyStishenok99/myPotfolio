import styled from "styled-components";
import {
  BottomBlockWithSkills
} from "./bottomBlockWithSkills /BottomBlockWithSkills.tsx";
import React from "react";
interface SpaSkillsProps {
  darkMode: boolean;
}

export const SpaSkills:React.FC<SpaSkillsProps> = ({ darkMode }) => {
  return (
    <SpaSkillsStyle  id="SpaSkills">
<TopBlock>
  <MainH1 darkMode={darkMode}>My Tech Stack</MainH1>
    <MainP darkMode={darkMode}> Technologies I’ve been working with recently</MainP>
</TopBlock>
     <BottomBlockWithSkills darkMode={darkMode}/>
    </SpaSkillsStyle>
  );
};

const SpaSkillsStyle=styled.div`
  padding-top: 201px  ;
`
const TopBlock = styled.div`
  margin-bottom: 124px;
`
const   MainH1 = styled.h1<{ darkMode: boolean }>`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 54%;
  text-align: center;
  color: ${props =>
    props.darkMode
      ? '#d9d9d9'  // Темный режим с прозрачностью
      : '#42446e'
  };
`
const MainP = styled.p<{ darkMode: boolean }>`
  font-family: "Poppins", sans-serif;;
  font-weight: 400;
  font-size: 32px;
  line-height: 81%;
  text-align: center;
  color: ${props =>
  props.darkMode
    ? '#a7a7a7'  // Темный режим с прозрачностью
    : '#666'}
`