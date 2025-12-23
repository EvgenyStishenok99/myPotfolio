import styled from "styled-components";
import {MyProjects} from "./myProjects/MyProjects.tsx";
import React from "react";

interface SpaProjectsProps {
  darkMode: boolean;
}
export const SpaProjects: React.FC<SpaProjectsProps> = ({darkMode}) => {


  return (
    <SpaProjectsStyles  id="SpaProjects" >
      <TopBlock>
        <MainH1>Projects</MainH1>
        <MainP> Things I’ve built so far</MainP>
       <MyProjects darkMode={darkMode} />
      </TopBlock>
    </SpaProjectsStyles>
  );
};

const SpaProjectsStyles = styled.div`
  padding-top: 201px;
  font-family: "Poppins", sans-serif;
  

`
const MainP = styled.p`
  margin-bottom: 110px;
  font-weight: 400;
  font-size: 32px;
  line-height: 81%;
  text-align: center;
  color: #666;
`
const   MainH1 = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 54%;
  text-align: center;
  color: #42446e;
`
const TopBlock = styled.div`
  
`