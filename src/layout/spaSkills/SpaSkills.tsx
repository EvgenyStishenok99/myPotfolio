import styled from "styled-components";
import {
  BottomBlockWithSkills
} from "./bottomBlockWithSkills /BottomBlockWithSkills.tsx";


export const SpaSkills = () => {
  return (
    <SpaSkillsStyle id="SpaSkills">
<div className="topBlock">
  <h1 className="mainH1">My Tech Stack</h1>
    <p className="mainP"> Technologies I’ve been working with recently</p>
</div>
     <BottomBlockWithSkills/>
    </SpaSkillsStyle>
  );
};

const SpaSkillsStyle=styled.div`
  padding-top: 201px  ;
  
  .topBlock{
    margin-bottom: 124px;
  }
  .mainH1{
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 54%;
    text-align: center;
    color: #42446e;
  }
  .mainP{
    font-family: "Poppins", sans-serif;;
    font-weight: 400;
    font-size: 32px;
    line-height: 81%;
    text-align: center;
    color: #666;
  }
`