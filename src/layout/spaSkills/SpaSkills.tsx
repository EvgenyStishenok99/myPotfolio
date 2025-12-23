import styled from "styled-components";
import {
  BottomBlockWithSkills
} from "./bottomBlockWithSkills /BottomBlockWithSkills.tsx";


export const SpaSkills = () => {
  return (
    <SpaSkillsStyle id="SpaSkills">
<TopBlock>
  <MainH1>My Tech Stack</MainH1>
    <MainP> Technologies I’ve been working with recently</MainP>
</TopBlock>
     <BottomBlockWithSkills/>
    </SpaSkillsStyle>
  );
};

const SpaSkillsStyle=styled.div`
  padding-top: 201px  ;
`
const TopBlock = styled.div`
  margin-bottom: 124px;
`
const   MainH1 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 54%;
  text-align: center;
  color: #42446e;
`
const MainP = styled.p`
  font-family: "Poppins", sans-serif;;
  font-weight: 400;
  font-size: 32px;
  line-height: 81%;
  text-align: center;
  color: #666;
`